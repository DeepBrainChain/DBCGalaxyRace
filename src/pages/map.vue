<template lang="pug">
div.description
 | {{t('desc1')}}
div#map
</template>
<style lang="less">
.description {
  width: 744px;
  font-family: PingFang SC, sans-serif;
  font-weight: 500;
  font-size: 16px;
  // line-height: 29px;
  text-align: center;
  margin: 24px auto 0;
  color: #666666;
}
#map {
  position: relative;
  width: 1200px;
  height: 700px;
  margin: 50px auto;
  border-radius: 12px;
  background: #ffffff;
  .l7-popup-content {
    padding: 10px 10px 5px;
    .l7-popup-p {
      width: 100%;
      display: flex;
      margin: 2px auto;
      align-items: center;
      justify-content: space-between;
    }
  }
  .l7-scene{
    top: 0;
  }
}
</style>
<script>
import { computed, defineComponent, ref, watch, onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";
import { Scene, PointLayer, LineLayer, Popup } from "@antv/l7/lib/index";
import { Mapbox } from "@antv/l7-maps";
import { worldgeo } from "../assets/data/worldgeo.js";
import { getPosGpuInfo } from "../apis";
export default defineComponent({
  name: "maps",
  setup() {
    const { t } = useI18n();
    const maxDecimal = number => {
      return String(number).replace(/^(.*\..{4}).*$/, "$1");
    };
    const isWin = computed(()=>{
        if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
          return false
        }else{
          return true
        }
    })
    onBeforeMount(async () => {
      let list = []
      let data1 = []
      try {
        list = await getPosGpuInfo()
      } catch {
        list = []
      }
      // list = list.filter((el) => { return (el[0] <= 1800000 && el[1] <= 900000)})
      list.map((el, index) => {
        // East 东 West 西 South 南 North 北   lat 纬度 lng 经度
        // 南纬是负，北纬是正，东经是正，西经是负。
        data1[index] = {};
        data1[index].lng = el[0]['East'] ? (el[0]['East'] / Math.pow(10, 4)) : -(el[0]['West'] / Math.pow(10, 4));
        data1[index].lat = el[1]['North'] ? (el[1]['North'] / Math.pow(10, 4)) : -(el[1]['South'] / Math.pow(10, 4));
        data1[index].RentalRate =
        el[2].rentedGpu != 0
            ? maxDecimal((el[2].rentedGpu / el[2].onlineGpu) * 100) + "%"
            : "0%";
        el[2].onlineGpuCalcPoints = el[2].onlineGpuCalcPoints/100;
        data1[index] = { ...data1[index], ...el[2] };
      });
      const scene = new Scene({
        id: "map",
        map: new Mapbox({
          style: "blank",
          zoom: 1,
          minZoom: 0,
          maxZoom: 1.2,
          center: [3.438, 45.16797],
          interactive: isWin.value?false:true
        }),
        logoVisible: false
      });
      scene.on("loaded", () => {
        const worldLine = new LineLayer()
          .source(worldgeo)
          .color("#A490FF")
          .size(0.5)
          .style({
            opacity: 1
          });

        const pointLayer = new PointLayer({
          zIndex: 2
        })
          .source(data1, {
            parser: {
              type: "json",
              x: "lng",
              y: "lat"
            }
          })
          .shape("circle")
          .active(true)
          .animate(true)
          .size("onlineGpu", [15, 30])
          .color("offlineGpu", xVal => {
            if (xVal > 0) {
              return "#555C9D";
            } else {
              return "#FF0909";
            }
          })
          .style({
            opacity: 1
          });
        pointLayer.on("mousemove", e => {
          let str = "";
          let lan = localStorage.getItem("lan");
          if (lan == "zh") {
            if (e.feature.offlineGpu <= 0) {
              str = `
                            <div class='l7-popup-p'>在线GPU数量：<span>${e.feature.onlineGpu}</span></div>
                            <div class='l7-popup-p'>算力值：<span>${e.feature.onlineGpuCalcPoints}</span></div>
                            <div class='l7-popup-p'>租用率：<span>${e.feature.RentalRate}</span></div>
                            `;
            } else {
              str = `
                            <div class='l7-popup-p'>离线GPU数量：<span>${e.feature.offlineGpu}</span></div>
                            <div class='l7-popup-p'>在线GPU数量：<span>${e.feature.onlineGpu}</span></div>
                            <div class='l7-popup-p'>算力值：<span>${e.feature.onlineGpuCalcPoints}</span></div>
                            <div class='l7-popup-p'>租用率：<span>${e.feature.RentalRate}</span></div>
                            `;
            }
          } else {
            if (e.feature.offlineGpu <= 0) {
              str = `
                            <div class='l7-popup-p'>Number of online GPUs: <span>${e.feature.onlineGpu}</span></div>
                            <div class='l7-popup-p'>Computing Power Value: <span>${e.feature.onlineGpuCalcPoints}</span></div>
                            <div class='l7-popup-p'>Occupancy rate: <span>${e.feature.RentalRate}</span></div>
                            `;
            } else {
              str = `
                            <div class='l7-popup-p'>Number of offline GPU(s): <span>${e.feature.offlineGpu}</span></div>
                            <div class='l7-popup-p'>Number of online GPU(s): <span>${e.feature.onlineGpu}</span></div>
                            <div class='l7-popup-p'>Computing Power Value: <span>${e.feature.onlineGpuCalcPoints}</span></div>
                            <div class='l7-popup-p'>Rental Rate: <span>${e.feature.RentalRate}</span></div>
                            `;
            }
          }

          const popup = new Popup({
            offsets: [0, 0],
            closeButton: false
          })
            .setLnglat(e.lngLat)
            .setHTML(str);
          scene.addPopup(popup);
        });
        pointLayer.on("click", e => {
          let str = "";
          let lan = localStorage.getItem("lan");
          if (lan == "zh") {
            if (e.feature.offlineGpu <= 0) {
              str = `
                            <div class='l7-popup-p'>在线GPU数量：<span>${e.feature.onlineGpu}</span></div>
                            <div class='l7-popup-p'>算力值：<span>${e.feature.onlineGpuCalcPoints}</span></div>
                            <div class='l7-popup-p'>租用率：<span>${e.feature.RentalRate}</span></div>
                            `;
            } else {
              str = `
                            <div class='l7-popup-p'>离线GPU数量：<span>${e.feature.offlineGpu}</span></div>
                            <div class='l7-popup-p'>在线GPU数量：<span>${e.feature.onlineGpu}</span></div>
                            <div class='l7-popup-p'>算力值：<span>${e.feature.onlineGpuCalcPoints}</span></div>
                            <div class='l7-popup-p'>租用率：<span>${e.feature.RentalRate}</span></div>
                            `;
            }
          } else {
            if (e.feature.offlineGpu <= 0) {
              str = `
                            <div class='l7-popup-p'>Number of online GPUs: <span>${e.feature.onlineGpu}</span></div>
                            <div class='l7-popup-p'>Computing Power Value: <span>${e.feature.onlineGpuCalcPoints}</span></div>
                            <div class='l7-popup-p'>Occupancy rate: <span>${e.feature.RentalRate}</span></div>
                            `;
            } else {
              str = `
                            <div class='l7-popup-p'>Number of offline GPU(s): <span>${e.feature.offlineGpu}</span></div>
                            <div class='l7-popup-p'>Number of online GPU(s): <span>${e.feature.onlineGpu}</span></div>
                            <div class='l7-popup-p'>Computing Power Value: <span>${e.feature.onlineGpuCalcPoints}</span></div>
                            <div class='l7-popup-p'>Rental Rate: <span>${e.feature.RentalRate}</span></div>
                            `;
            }
          }

          const popup = new Popup({
            offsets: [0, 0],
            closeButton: false
          })
            .setLnglat(e.lngLat)
            .setHTML(str);
          scene.addPopup(popup);
        });
        scene.addLayer(worldLine);
        scene.addLayer(pointLayer);

        let size = scene.getSize();
        if (size[0] > 1100) {
          scene.setZoomAndCenter(1.1);
        } else if (size[0] <= 1100 && size[0] > 1000) {
          scene.setZoomAndCenter(0.8);
        } else if (size[0] <= 1000 && size[0] > 900) {
          scene.setZoomAndCenter(0.6);
        } else if (size[0] <= 900 && size[0] > 700) {
          scene.setZoomAndCenter(0.4);
        } else if (size[0] <= 700) {
          scene.setZoomAndCenter(0);
        }
      });
    });
    return {
      t
    };
  },
  mounted() {}
});
</script>
