<template lang="pug">
div.description
  | DeepBrain Chain 갤럭시 컴퓨팅 레이스 보상 프로그램은 협력 레이스 이며,  네트워크에 압력 테스트하고 글로벌 컴퓨팅제공자의 참여를 독려하며 세계 최대의 고성능 컴퓨팅 네트워크 운영을 준비할 수 있도록 돕는 협력 레이스입니다.
div.rule-wrapper
  div.rule-title 레이스 규칙
  div.rule-content _x001c_,전체 네트워크에서 5,000 GPU 달성 시 레이스는 자동으로 활성화됩니다.활성화 후 레이스는 2 개월 동안 지속됩니다,레이스 진행 동안 모든 컴퓨팅제공자는 1.33억 DBC 보상을 공동 배분합니다. 상위 5명의 컴퓨팅제공자는 추가로 3,000만 DBC 보상을 얻을 수 있습니다!갤럭시 레이스가 정식으로 활성화되기 전에 컴퓨팅제공자는 임대 수입과 온라인 보상의 두가지 수입을 받을 수 있습니다,일일 온라인 보상의 총 수는 109,589 만DBC입니다,  활성화 후 임대료100%가 소각됩니다!
  div.rule-title 가. GPU 서버 파라미터에 대한 최소 요구사항: 컴퓨팅 서버의 파라미터가 최소 요구사항을 충족하는 경우에만 검증자 심사 후 온체인 등록 가능합니다, 그렇지 않으면 수입을 얻을 수 없습니다.
  ul.rule-content
    li 
      span GPU: 
      | 최저 1카드, 클라우드 PC방은 4카드와 6카드 기계, AI는 8카드 기계를 추천한다.엔비디아 Nvidia 시리즈 그래픽 카드가 필요합니다；
    li
      span 메모리: <br>
      | 클라우드게임 요구사항: 최소 메모리 요구 사항은 카드당 16G입니다.<br>
      | AI 요구사항 : 최소 메모리 요구사항은 카드당 48G입니다,기기 1세트의 최소 요구사항은 64G입니다(즉, 각 카드의 할당된 메모리는 최소48G로 준비하면  ,온체인 심사 통과됩니다 ,4카드 새 기기 일경우320G 메모리 권장); 유저의 실제 응용 시나리오 요구사항과 결합하여 GPU 메모리가 10G 이상이고 CudaCore가 4000보다 큰 경우 대용량 메모리를 구성하는 것이 좋습니다. 1카드  256G권장, 2카드 448G권장, 4카드  832G권장
    li
      span CPU:<br>
      | 클라우드게임 요구사항 : Intel/AMD, 주 주파수 3.5Ghz 이상, 각 GPU는 별도의 CPU로 구성해야 합니다 <br>
      | AI 요구사항: Intel/AMD, 주 주파수 2.0Ghz 이상, 단일 CPU 8코어 이상 ; 주의사항: 중장기 임대율 및  임대 상태에서 30% 컴퓨팅 파워 보너스 추가 지원을 고려하여 , 새 기기의 CPU는 하기 설정으로 권장드립니다 : Intel, V3 이상, 메인 주파수 2.4Ghz, 터보 주파수 3.0Ghz 이상, 단일 CPU 10코어 이상 , 평균적으로 각 GPU에는 5 코어 10 스레드 이상이 할당되며, 4카드 GPU 서버는 듀얼 CPU로 권장합니다.
    li
      span 하드디스크: <br>
      | 클라우드게임 요구사항: 시스템 디스크는 100G SSD 이상이며 데이터 디스크 필요없습니다, 노하드시스템 방식을 사용할 수 있습니다.<br>
      | AI 요구사항: 시스템 디스크 100G SSD 이상, 데이터 디스크 1T nvme SSD 이상(새 기기 4카드 GPU 서버는 3.84T nvme SSD로 권장합니다);
    li
      span 네트워크 대역폭: <br>
      | 클라우드게임 요구사항: 각 GPU 기기에는 최소 10M 대역폭 설정 필요합니다.<br>
      | AI 요구사항: 4카드 GPU 기기는 업다운링크 대역폭  20M 이상 설정, 2카드 GPU 기기는 업다운링크 대역폭 10M 이상으로 설정,각 GPU의 평균 대역폭은 5M 이상입니다. 주의사항: 중장기 임대료를 고려하여 중국 현지의 기기 IDC센터는  BGP 및 3차 회선 대역폭을 지원하고 기타 해외 지역은 BGP 대역폭을 지원하는 것이 좋습니다.
    //- li
    //-   span 그래픽카드 가상기기:
    //-   | 온체인의 모든 서버 기기에는 해당 그래픽 카드 수와 함께 그래픽 카드 가상기기(그래픽 카드 디시버)가 장착되어 있어야 합니다. 새 기기에는 10기가비트 네트워크 카드로 권장합니다; 그래픽 카드 가상화 기기가 없는 기기는 온체인 심사 통과 안됩니다 .
    li
      span 10Gb네트워크 카드:
      |  GPU 서버에는 최소 10Gb 네트워크 카드가 장착되어 있어야 합니다 .
    li
      span 독립적 고정  IP:
      | 각 GPU 서버는 독립적 공용 IP로 구성되고 ,추후 확장 가능성 있습니다  , 예 일부 유저 시나리오에서는 각 GPU 별  공용 IP가 있어야 합니다. 즉, 4개의 GPU 서버에 5개의 IP가 필요합니다.
    li 
      span IDC코로케이션: 
      | 기기는 표준 데이터센터 T3급이상에 배치합니다  
    li
      span IDC 데이터센터 스위치: 
      | 액세스 레이어는 10G 인트라넷 스위치를 지원해야 하고, 코어 레이어 스위치는 액세스 레이어 대역폭의 두 배 이상이어야 하며, 20G 인트라넷 대역폭 으로  지원해야 합니다.
    li 
      span 주의사항: 
      | 각 GPU는 최대 USD 1,500 상당의 DBC와 최소 100,000 DBC를 약속할 수 있습니다. 기계 사용의 안정성, 온라인 소득의 안정성, 패널티 메커니즘 등을 고려할 때 조립 기계보다는 제조사의 브랜드 기계를 사용하는 것이 좋습니다.
    li
      span 컴퓨터실의 권장 스위치 및 네트워크 아키텍처: 
      | 모든 GPU 머신 ETH0 네트워크 포트는 하나의 Vlan에 속하며 이 네트워크 포트는 서버 네트워크 정보로 구성됩니다. 모든 GPU 서버 ETH1 네트워크 포트 및 스토리지 서버 ETHx 네트워크 포트는 동일한 새 Vlan에 속하며 네트워크 포트에는 IP 구성이 필요하지 않으며 스토리지 서버 ETHx 네트워크 포트는 vlan 정보로 구성해야 합니다.
    img.ruleimg(src="../assets/rule.png")
    li 
      span GPU모델 추천: 
      | 3080、3080Ti、3090、A5000、A6000
    li 
      span GPU 서버가 갤럭시 레이스 배포 문서에 참여: 
      a(target="_blank" href="https://github.com/DeepBrainChain/DBC-DOC") https://github.com/DeepBrainChain/DBC-DOC
  div.rule-title 나.컴퓨팅값 계산 규칙
  div.rule-content
    div 이번 모델 수정에서는 서버 기본값 및 메모리도 계산 모델에 포함되며 전체 생태계  클라이언트의 임대 비용도 컴퓨팅값 시스템을 참조하여 가격이 책정됩니다. 임대 수익은 $0.508/C/월 입니다. 시장에서 GPU의 가격 변동에 따라 이 매개변수는 커뮤니티 투표를 통해 변경됩니다.
    | 계산 모델은 다음과 같습니다:전체 기기의 컴퓨팅값 = (25 * 카드 수 + 메모리/3.5 + (√(쿠다 수) * √(그래픽 메모리/10)) * 그래픽 카드 수) * 계수, 로컬 계수가 1일 때 컴퓨팅값은 다음과 같습니다:
    div.table
      div.table_con
        div GPU유형
        div Cuda core
        div 메모리
        div GPU카드수
        div 메모리(G)
        div.fs10 기기 컴퓨팅(C)
        div 기기임대(USD)
        div.fs10 임대비용/월/카드(USD)
      div.table_li
        div 1080
        div 2560
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 299.31
            div 152.05 
            div 38.01
          div.line
            div 4
            div 128
            div 317.59
            div 161.34
            div 40.33
      div.table_li
        div 1080ti
        div 3584
        div 11
        div.width60
          div.line
            div 4
            div 64
            div 369.44 
            div 187.68
            div 46.92
          div.line
            div 4
            div 128
            div 387.73
            div 196.96 
            div 49.24 
      div.table_li
        div 1660
        div 1408
        div 6
        div.width60
          div.line
            div 4
            div 64
            div 234.55 
            div 119.15 
            div 29.79 
          div.line
            div 4
            div 128
            div 252.83 
            div 128.44 
            div 32.11 
      div.table_li
        div 1660ti
        div 1536
        div 6
        div.width60
          div.line
            div 4
            div 64
            div 239.72 
            div 121.78 
            div 30.44 
          div.line
            div 4
            div 128
            div 258.00 
            div 131.07 
            div 32.77 
      div.table_li
        div 1660s
        div 1408
        div 6
        div.width60
          div.line
            div 4
            div 64
            div 234.55 
            div 119.15 
            div 32.11 
          div.line
            div 4
            div 128
            div 252.83 
            div 128.44 
            div 32.11 
      div.table_li
        div 2070s
        div 2560
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 299.31 
            div 152.05 
            div 38.01 
          div.line
            div 4
            div 128
            div 317.59 
            div 161.34 
            div 40.33 
      div.table_li
        div 2080
        div 2944
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 312.41 
            div 158.70 
            div 39.68 
          div.line
            div 4
            div 128
            div 330.69 
            div 167.99 
            div 42.00 
      div.table_li
        div 2080s
        div 3072
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 316.58 
            div 160.82 
            div 40.21 
          div.line
            div 4
            div 128
            div 334.87 
            div 170.11 
            div 42.53 
      div.table_li
        div 2080ti
        div 4352
        div 11
        div.width60
          div.line
            div 4
            div 64
            div 395.04 
            div 200.68 
            div 50.17 
          div.line
            div 4
            div 128
            div 413.33 
            div 209.97 
            div 52.49 
      div.table_li
        div 3060
        div 3584
        div 12
        div.width60
          div.line
            div 4
            div 64
            div 380.61 
            div 193.35 
            div 48.34 
          div.line
            div 4
            div 128
            div 398.89 
            div 202.64 
            div 50.66 
      div.table_li
        div 3060ti
        div 4864
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 367.80 
            div 186.84 
            div 46.71 
          div.line
            div 4
            div 128
            div 386.09 
            div 196.13 
            div 49.03 
      div.table_li
        div 3070
        div 5888
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 392.82 
            div 199.55 
            div 49.89 
          div.line
            div 4
            div 128
            div 411.10 
            div 208.84 
            div 52.21 
      div.table_li
        div 3070ti
        div 6144
        div 8
        div.width60
          div.line
            div 4
            div 64
            div 398.72 
            div 202.55 
            div 50.64 
          div.line
            div 4
            div 128
            div 417.01 
            div 211.84 
            div 52.96 
      div.table_li
        div 3080
        div 8704
        div 10
        div.width60
          div.line
            div 4
            div 128
            div 509.75 
            div 258.95 
            div 64.74 
          div.line
            div 4
            div 512
            div 619.47 
            div 314.69 
            div 78.67 
      div.table_li
        div 3080ti
        div 10240
        div 12
        div.width60
          div.line
            div 4
            div 128
            div 579.98 
            div 294.63 
            div 73.66 
          div.line
            div 4
            div 512
            div 689.69 
            div 350.36 
            div 87.59 
      div.table_li
        div 3090
        div 10496
        div 24
        div.width60
          div.line
            div 4
            div 128
            div 771.43 
            div 391.89 
            div 97.97 
          div.line
            div 4
            div 512
            div 881.15 
            div 447.62 
            div 111.91 
      div.table_li
        div A4000
        div 6144
        div 16
        div.width60
          div.line
            div 4
            div 128
            div 533.16 
            div 270.85 
            div 67.71 
          div.line
            div 4
            div 512
            div 642.88 
            div 326.58 
            div 81.65 
      div.table_li
        div A5000
        div 8192
        div 24
        div.width60
          div.line
            div 4
            div 128
            div 697.44 
            div 354.30 
            div 88.57 
          div.line
            div 4
            div 512
            div 807.15 
            div 410.03 
            div 102.51 
      div.table_li.height30
        div A40
        div 10752
        div 48
        div.width60
          div.line
            div 8
            div 2048
            div 2602.56 
            div 1322.10 
            div 165.26 
      div.table_li.height30
        div A100 PCIe
        div 6912
        div 40
        div.width60
          div.line
            div 8
            div 2048
            div 2115.36 
            div 1074.60 
            div 134.33 
      div.table_li.height30
        div A100 PCIe
        div 6912
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 2666.35 
            div 1354.51 
            div 169.31 
      div.table_li.height30
        div A100 SXM4
        div 6912
        div 40
        div.width60
          div.line
            div 8
            div 2048
            div 2115.36 
            div 1074.60 
            div 134.33 
      div.table_li.height30
        div A100 SXM4
        div 6912
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 2666.35 
            div 1354.51 
            div 169.31 
      div.table_li.height30
        div A800 PCIe
        div 6912
        div 40
        div.width60
          div.line
            div 8
            div 2048
            div 2115.36 
            div 1074.60 
            div 134.33 
      div.table_li.height30
        div A800 PCIe
        div 6912
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 2666.35 
            div 1354.51 
            div 169.31 
      div.table_li.height30
        div A800 SXM5
        div 6912
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 2666.35 
            div 1354.51 
            div 169.31 
      div.table_li.height30
        div V100
        div 5120
        div 16
        div.width60
          div.line
            div 8
            div 2048
            div 1509.22 
            div 766.68 
            div 95.84  
      div.table_li.height30
        div V100
        div 5120
        div 32
        div.width60
          div.line
            div 8
            div 2048
            div 1809.14 
            div 919.04 
            div 114.88 
      div.table_li.height30
        div H100 SXM5
        div 16896
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 3726.36 
            div 1892.99 
            div 236.62  
      div.table_li.height30
        div H100 PCIe
        div 14592
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 3518.47 
            div 1787.39 
            div 223.42 
      div.table_li.height30
        div H100 NVL1
        div 16896
        div 94
        div.width60
          div.line
            div 8
            div 2048
            div 3973.35 
            div 2018.46 
            div 252.31 
      div.table_li.height30
        div H800 SXM5
        div 16896
        div 80
        div.width60
          div.line
            div 8
            div 2048
            div 3726.36 
            div 1892.99 
            div 236.62  
      div.table_li
        div 4060
        div 3072
        div 8
        div.width60
          div.line
            div 4
            div 128
            div 334.87 
            div 170.11 
            div 42.53 
          div.line
            div 4
            div 512
            div 444.58 
            div 225.85 
            div 56.46 
      div.table_li
        div 4060ti
        div 4352
        div 8
        div.width60
          div.line
            div 4
            div 128
            div 372.59
            div 189.28 
            div 47.32 
          div.line
            div 4
            div 512
            div 482.31 
            div 245.01 
            div 61.25 
      div.table_li
        div 4060ti
        div 4352
        div 16
        div.width60
          div.line
            div 4
            div 128
            div 470.35 
            div 238.94 
            div 59.74 
          div.line
            div 4
            div 512
            div 580.07 
            div 294.67 
            div 73.67 
      div.table_li
        div 4070
        div 5888
        div 12
        div.width60
          div.line
            div 4
            div 128
            div 472.80 
            div 240.18 
            div 60.05 
          div.line
            div 4
            div 512
            div 582.51 
            div 295.92 
            div 73.98 
      div.table_li
        div 4070ti
        div 7680
        div 12
        div.width60
          div.line
            div 4
            div 128
            div 520.57 
            div 264.45 
            div 66.11 
          div.line
            div 4
            div 512
            div 630.29 
            div 320.19 
            div 80.05
      div.table_li
        div 4080
        div 9728
        div 16
        div.width60
          div.line
            div 4
            div 128
            div 635.61 
            div 322.89 
            div 80.72 
          div.line
            div 4
            div 512
            div 745.32 
            div 378.62
            div 94.66  
      div.table_li
        div 4080ti
        div 14080
        div 20
        div.width60
          div.line
            div 4
            div 128
            div 807.81 
            div 410.37 
            div 102.59 
          div.line
            div 4
            div 512
            div 917.52 
            div 466.10 
            div 116.53  
      div.table_li
        div 4090
        div 16384
        div 24
        div.width60
          div.line
            div 4
            div 128
            div 929.76 
            div 472.32 
            div 118.08 
          div.line
            div 4
            div 512
            div 1039.47 
            div 528.05 
            div 132.01 
      div.table_li
        div 4090ti
        div 18176
        div 24
        div.width60
          div.line
            div 4
            div 128
            div 972.01 
            div 493.78 
            div 123.45 
          div.line
            div 4
            div 512
            div 1081.72 
            div 549.52 
            div 137.38 
    div 지역 계수는 다음과 같습니다:
    div.table1
      div.table_con
        div 지역 계수
        div 계수
        div 지역 계수
        div 계수
      div.table_li
        div 중국대륙
        div 1
        div 북미
        div 1.2
      div.table_li
        div 남미
        div 1.3
        div 유럽
        div 1.5
      div.table_li
        div 중동
        div 1.6
        div 한국
        div 1.6
      div.table_li
        div 일본
        div 1.7
        div 중국대만
        div 1.3
      div.table_li
        div 중국홍콩 및 마카오
        div 1.3
        div 말레이시아
        div 1.5
      div.table_li
        div 인도네시아
        div 1.5
        div 싱가폴
        div 1.5
      div.table_li
        div 베트남
        div 1.3
    div 대형 모델 계수, 대형 모델의 기계 계산력 값 지원 * 2
    div.table2
      div.table_con
        div GPU유형
        div Cuda core
        div 메모리
        div GPU유형
        div Cuda core
        div 메모리
      div.table_li
        div A100 PCIe
        div 6912
        div 40
        div A100 PCIe
        div 6912
        div 80
      div.table_li
        div A100 SXM4
        div 6912
        div 40
        div A100 SXM4
        div 6912
        div 80
      div.table_li
        div A800 PCIe
        div 6912
        div 40
        div A800 PCIe
        div 6912
        div 80
      div.table_li
        div A800 SXM5
        div 6912
        div 80
        div V100
        div 5120
        div 16
      div.table_li
        div V100
        div 5120
        div 32
        div H100 SXM5
        div 16896
        div 80
      div.table_li
        div H100 PCIe
        div 14592
        div 80
        div H100 NVL1
        div 16896
        div 94
      div.table_li
        div H800 SXM5
        div 16896
        div 80
  
    div 기계 연산력 계산:
    div.select
      div.topcon
        div.topitem GPU유형: 
          el-select.select_width210(v-model="gpu_type1", size='mini', placeholder="선택하십시오" @change='SelectGPU1')
            el-option( v-for="(item, index) in options" , :key="item.value", :label="item.name + '-Mem:' + item.men", :value="item.cuda+'_'+item.men+'_'+item.large+'_'+index")
        div.topitem GPU카드수: 
          el-select.select_width100(v-model="gpu_num1", size='mini', placeholder="선택하십시오" @change='SelectGpuNum1')
            el-option( v-for="item in options1" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem 메모리(G): 
          el-select.select_width100(v-model="mem_num1", size='mini', placeholder="선택하십시오" @change='SelectMem1')
            el-option( v-for="(item, index) in options2_1" , :key="item.value", :label="item.name", :value="item.value")
        div.topitem 지역 계수: 
          el-select.select_width200(v-model="local1", size='mini', placeholder="선택하십시오" @change='SelectLocal1')
            el-option( v-for="(item, index) in options3" , :key="index", :label="item.name", :value="item.value +'_'+index")
    div 현재 머신 컴퓨팅 파워 값은: {{machinePoints}}
  div.rule-title 다.레이스 보상 계산 규칙:
  div.rule-content
    div 컴퓨팅제공자의 DBC보상에 영향을 미치는 몇가지 요소:
    ul
      li 서버의 기기 컴퓨팅값
      li 보유하고 있는 GPU수 
      li 단일 지갑이 소유한 GPU의 수 ,단일 지갑이 소유한 GPU가 추가될 때마다 모든 기기의 포인트는 0.01% 증가하여 10% 증가할 때까지 증가합니다.
      li GPU 임대 여부 확인하여 , 임대중인  GPU 컴퓨값은 30% 증가 됩니다 
      li 매일 컴퓨팅 제공자가 얻는 보상 = 전체 네트워크 컴퓨팅값 대비  컴퓨팅 제공자가 소유한 컴퓨팅값의 비율 * 1,095,890 DBC, 이 중 25%는 즉시 보상, 75%는 150일 동안 분할보상, 즉 매일 0.5% 씩  보상 됩니다.
  //- div.rule-title.fs16 Example:
  //- div.rule-content
  //-   div Assume that the amount of DBCs produced is 333,333,333 per day; the total network-wide computing power value is 800,000, and the computing power provider A adds 500 GPUs under the same wallet to the DBC network, each with a computing power value of 99, of which 450 graphic cards are in the leased state and 50 cards are idle, then
  //-   div A's Total computing power value: 450*99*(1+5%)*130%+50*99*(1+5%)=66008.25
  //-   div Reward obtained by A in 24 hours is: 66008.25 /800,000*3,333,333= 275,034.3 DBC
  div.rule-title.fs16 기계 월 소득 계산
  div.rule-content
    div 기계의 월 소득 계산 공식: 전체 기계의 컴퓨팅 파워 값 / 전체 네트워크의 총 컴퓨팅 파워 값 * 1,095,890 * DBC 가격 * 지역 계수 * 대형 모델 계수 * 1.3 (임대 컴퓨팅 파워 값은 증가합니다. 30%) * 30 + 전체 시스템의 컴퓨팅 성능 값 *0.508
    div.select
      div.topcon
        div.topitem GPU유형: 
          el-select.select_width210(v-model="gpu_type", size='mini', placeholder="선택하십시오" @change='SelectGPU')
            el-option( v-for="(item, index) in options" , :key="item.value", :label="item.name + '-Mem:' + item.men", :value="item.cuda+'_'+item.men+'_'+item.large+'_'+index")
        div.topitem GPU카드수: 
          el-select.select_width100(v-model="gpu_num", size='mini', placeholder="선택하십시오" @change='SelectGpuNum')
            el-option( v-for="item in options1" , :key="item.value", :label="item.label", :value="item.value")
        div.topitem 메모리(G): 
          el-select.select_width100(v-model="mem_num", size='mini', placeholder="선택하십시오" @change='SelectMem')
            el-option( v-for="(item, index) in options2" , :key="item.value", :label="item.name", :value="item.value")
        div.topitem 지역 계수: 
          el-select.select_width200(v-model="local", size='mini', placeholder="선택하십시오" @change='SelectLocal')
            el-option( v-for="(item, index) in options3" , :key="index", :label="item.name", :value="item.value +'_'+index")
    div 현재 월 수입은: {{Income}} 미화 등가 DBC
  div.rule-title 라.패널티 메커니즘 
  div.rule-content
    div 온체인 기기든 오프체인 기기든 컴퓨팅 제공자는 적극적으로 온체인 알림을 보내야 하며, 기기에 문제가 있는 경우 온체인 알림을 사전에 보내지 않으면 패널티는  더 심해집니다. 기기가 공식적으로 온체인에 연결되면 향후 하드웨어 구성 정보를 수정할 수 없습니다. 기기가 유휴 상태인 동시에 오프라인 상태일 경우 대역폭과 위경도 정보를 수정할 수 있습니다. 기기가  페널티를 받으면 스테이킹 코인만 차감됩니다 과거 보상은 향후 150일 동안 차감되지 않지만 새로운 온라인 보상은 없을 것입니다. 기기  스테이킹토큰이 90% 미만일 경우 경고 상태이며, 기계 스테이킹 토큰이 80% 미만인 경우 온라인 보상이 없습니다.
    | 스테이킹 수량:
  div.rule-content
    div 1) 검증인은 사전에 2만 dbc를 스테이킹 합니다.
    div 2)신고자는 사전에 2만dbc를 스테이킹해야 하며, 그렇지 않으면 신고할 수 없습니다.
    div 3) 검증인의 스테이킹 토큰이 50% 남으면 경고 상태가 되며, 검증인의 스테이킹이 40% 미만일 경우 검증인은 실격 처리됩니다. 매번 주문 예약확정시 스테이킹 1000개 소모, 주문 상태 완료되면, 스테이킹 1000개 환불됩니다 
  div.rule-title 1. 컴퓨팅 제공자가 적극적으로 오프라인 알림을 보내는 경우:
  div.rule-title.fs16 기기가 온체인 1년 미만일 경우, 유휴상태라도 오프라인 시 패널티 발생.
  div.rule-content
    div 1)기기 임대중 상태 
      ul
        li 기기가 3분 이상 7분 이하 오프라인 상태일 경우 새로운 온라인 보상이 없으며, 스테이킹 토큰의 2% 차감.100%  국고로 이동
        li 기기가 7분 이상 오프라인 상태일 경우 스테이킹 토큰의 4% 차감. 100% 국고로 이동
        li 기기가 48시간 이상 오프라인 상태일 경우 스테이킹의 30% 차감되고,이중 10%는 사용자에게, 90%는 국고로 이동
        li 기기가 120시간 이상 오프라인 상태일 경우 스테이킹 토큰의 50%차감. 이중 10%는 사용자에게, 90%는 국고로 이동 
    div 2).기기 유휴 상태 
      ul
        li 10일 이상 유휴 상태를 유지한 기기는 ,만약  이 때 오프라인 진행 경우 새로운 온라인 보상이 없으며 이전 보상은 여전히 기준대로 보상됩니다. (기기 오프라인 조치 후, 기기 온체인  365일 이상일 경우 스테이킹에 대해  환불 신청할 수 있습니다.)
        li 10일 미만 유휴 상태일 경우. 이 때 기기 오프라인 진행 경우 새로운 온라인 보상이 없습니다. 스테이킹 토큰의 2% 차감되고 스테이킹 토큰은  전부  국고로 이동 
        li 10일 미만 유휴 상태일 경우. 이 때 기기 오프라인 7분 이상 되면 ,   스테이킹 토큰의 4% 차감되고 스테이킹 토큰은  전부  국고로 이동 
        li 10일 미만 유휴 상태일 경우. 이 때 기기 오프라인 48h 이상 되면 ,   스테이킹 토큰의 30% 차감되고 스테이킹 토큰은  전부  국고로 이동 
        li 10일 미만 유휴 상태일 경우. 이 때 기기 오프라인 240h 이상 되면 ,   스테이킹 토큰의 80% 차감되고 스테이킹 토큰은  전부  국고로 이동 .만약 기기 온체인  365일 이상일 경우 남은 20% 스테이킹에 대해  환불 신청할 수 있습니다.
  div.rule-title 2.  컴퓨팅 제공자가 적극적으로 오프라인 알림을 보내지 않고 신고를 받은 경우:
  div.rule-content
    div 기기에 문제가 있는데 컴퓨팅 제공자는 오프라인 알림을 보내지 않고 신고 받은 경우. 신고 후 검증인는 주문을 받아 기기에 문제가 있는지 확인합니다. 기기가  임대 중이면 오직 사용자만 신고 가능합니다 .
  div.rule-content
    div 1) 기기 임대 상태일 경우 현 기기에 접근할 수 없습니다:
      ul
        li 기기 오프라인 상태  3분 이상 7분 이하일 경우, 새로운 온라인 보상은 없으며, 스테이킹 토큰의 4% 차감.이중 10%는 검증인에게, 90%는 국고로 이동.
        li 기기 오프라인 상태  7분 이상일 경우, 스테이킹 토큰의 8% 차감.이중 10%는 검증인에게, 90%는 국고로 이동.
        li 기기 오프라인 상태  48h 이상일 경우, 스테이킹 토큰의 60% 차감.이중 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
        li 기기 오프라인 상태  120h 이상일 경우, 스테이킹 토큰의 100% 차감.이중 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
    div 2) 기기가 임대 상태일 때 기기 하드웨어 고장 확인:
      ul
        li 기기 오프라인 상태 4시간 미만일 경우,새로운 온라인 보상이 없고, 스테이킹 토큰의 6% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
        li 기기 오프라인 상태 4시간 이상일 경우, 스테이킹 토큰의 12% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
        li 기기 오프라인 상태 24시간 이상일 경우, 스테이킹 토큰의 16% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
        li 기기 오프라인 상태 48시간 이상일 경우, 스테이킹 토큰의 60% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
        li 기기 오프라인 상태 120시간 이상일 경우, 스테이킹 토큰의 100% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
    div 3) 기기가 임대 상태에 있을 때 하드웨어 파라미터 구성이 가짜인 것으로 판별.(대역폭의 실제 값이 30% 미만이고 위도 및 경도 오차가 30km 이상 떨어져 있거나 혹은 기타 하드웨어 파라미터가 불일치 경우 )
      ul
        li 기기 오프라인 상태 4시간 미만일 경우,새로운 온라인 보상이 없고, 스테이킹 토큰의 12% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
        li 기기 오프라인 상태 4시간 이상일 경우,스테이킹 토큰의 24% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
        li 기기 오프라인 상태 24시간 이상일 경우,스테이킹 토큰의 32% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
        li 기기 오프라인 상태 48시간 이상일 경우,스테이킹 토큰의 60% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
        li 기기 오프라인 상태 120시간 이상일 경우,스테이킹 토큰의 100% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
    div 4) 기계가 유휴 상태일 때 기기를 임대할 수 없다고 판단
      ul
        li 기기 오프라인 상태 4시간 미만일 경우,새로운 온라인 보상이 없고, 스테이킹 토큰의 6% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
        li 기기 오프라인 상태 4시간 이상일 경우, 스테이킹 토큰의 12% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
        li 기기 오프라인 상태 24시간 이상일 경우, 스테이킹 토큰의 16% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
        li 기기 오프라인 상태 48시간 이상일 경우, 스테이킹 토큰의 60% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
        li 기기 오프라인 상태 120시간 이상일 경우, 스테이킹 토큰의 100% 차감. 10%는 유저에게, 20%는 검증인에게, 70%는 국고로 이동.
    div.rule-title 마.항소 규칙
  div.rule-content
    div 1. 기기가 악의적으로 신고된 경우 컴퓨팅 제공자는 48시간 이내에 항소할 수 있으며, 그렇지 않으면 무효입니다. 항소가 승인되면 모든 패널티는 취소됩니다. 항소가 기각되면 모든 패널티는 두 배가 됩니다.
    div 2. 신고자가 악의적인 신고를 한 사실이 확인될 경우 신고자에 해당하는 dbc 보증금의 10%를 차감합니다. 신고자도 48시간 이내에 항소할 수 있습니다.
    div 3. 검증인이 소수자이거나 악의적인 검증인 경우 검증인에 해당하는 dbc 보증금의 10%를 차감합니다. 검증인도 48시간 이내에 항소할 수 있습니다.
    div 4. 신고에 대해 컴퓨팅제공자, 신고자, 검증인 중 1인이 항소를 하면 나머지는 다시 항소할 수 없습니다.
  div.rule-title 바.스테이킹 해제 규칙 
  div.rule-content
    div 1. 기기가 365일 동안 온체인 상태일 경우  다시 스테이킹 가능합니다 . Re-staking은 전체 네트워크의 GPU 수와 토큰 가격을 기반으로 새로운 스테이킹 토큰의 양을 다시 계산하며, 새로운 스테이킹 토큰의 양이 기존 스테이킹 토큰 보다 적으면 차액을 해제합니다. 이는 365일마다 진행할 수 있습니다.
    div 2. 기기가 365일 동안 온체인 상태일 경우. 기기가 10일 이상 유휴 상태이면 기기를 오프라인 상태로 전환하고 모든 스테이킹 토큰을 해제할 수 있습니다.
  div.rule-title 사. 연락처 
  div.rule-content
    div 상담 메일  참조: feng@deepbrainchain.org
    //- div.rule-content
    //-   div Contact details：
    //-     ul
    //-       li Mail：zhouyu@deepbrainchain.org；leo@deepbrainchain.org
    //-       li WeChat：DeepBrainChain；DBC-Leo
    //-       li Telegram：18221230521；13681709317
  //- div.rule-title Disclaimer:
  //- div.rule-content If a serious bug is found during the Race, the DeepBrain Chain team may end the race early. Rewards will still be given for the period of time prior to the discovery of the bug. If such a bug is disclosed to the DeepBrain Chain team, the team reporting the bug will be eligible for a reward of up to 3 million DBC, depending on the severity of the bug, as determined by the DeepBrain Chain team.
</template>
<style lang="less" scoped>
.li-style {
  margin-top: 0;
  padding-left: 20px;
  li {
    position: relative;
    margin: 10px 0;
    &::before {
      position: absolute;
      left: -15px;
      top: 12px;
      margin-top: -4px;
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: currentColor;
      border-radius: 100%;
      transform: scale(0.5);
    }
    span{
      font-weight: bold;
    }
  }
}
.rule-content {
  font-family: PingFang SC, sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #666666;
  ul& {
    .li-style;
  }
  ul {
    .li-style;
  }
  .ruleimg{
    width: 100%;
  }
  .table {
    width: 100%;
    margin: 10px 0;
    border: 1px solid #333;
    .table_con {
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      font-weight: bold;
      justify-content: space-between;
      border-bottom: 1px solid #333;
      div {
        width: 12.5%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 30px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:last-child {
          border: none;
        }
      }
      .fs10{
        font-size: 10px;
      }
    }
    .table_li {
      width: 100%;
      min-height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #333;
      &:last-child {
        border: none;
      }
      div {
        width: 12.5%;
        min-height: 60px;
        text-align: center;
        line-height: 60px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:last-child {
          border: none;
        }
      }
      .width60{
        width: 62.5%;
        display: flex;
        align-items: center;
        flex-direction: column;
        .line{
          width: 100%;
          display: flex;
          min-height: 30px;
          line-height: 30px;
          align-items: center;
          border-bottom: 1px solid #333;
          border-right: none;
          &:last-child {
            border: none;
          }
          div{
            width: 33.333%;
            min-height: 30px;
            line-height: 30px;
            &:last-child {
              border: none;
            }
          }
        }
      }
      &.height30{
        div {
          min-height: 30px;
          line-height: 30px;
        }
      }
    }
    .hide{
      display: none;
    }
  }
  .table1 {
    width: 100%;
    margin: 10px 0;
    border: 1px solid #333;
    .table_con {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      font-weight: bold;
      justify-content: space-between;
      border-bottom: 1px solid #333;
      div {
        width: 25%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 30px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:last-child {
          border: none;
        }
      }
    }
    .table_li {
      width: 100%;
      min-height: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid #333;
      &:last-child {
        border: none;
      }
      div {
        width: 25%;
        min-height: 40px;
        text-align: center;
        line-height: 40px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:nth-child(4n) {
          border: none;
        }
      }
    }
  }
  
  .table2 {
    width: 100%;
    margin: 10px 0;
    border: 1px solid #333;
    .table_con {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      font-weight: bold;
      justify-content: flex-start;
      border-bottom: 1px solid #333;
      div {
        width: 16.6%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 30px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:last-child {
          border: none;
        }
      }
    }
    .table_li {
      width: 100%;
      min-height: 30px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid #333;
      &:last-child {
        border: none;
      }
      div {
        width: 16.6%;
        min-height: 40px;
        text-align: center;
        line-height: 40px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        &:nth-child(6n) {
          border: none;
        }
      }
    }
  }
  
  .select{
    width: 100%;
    padding: 5px 0;
    box-sizing: border-box;
    .topcon{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .topitem{
        color: #333;
        font-size: 14px;
        margin-right: 15px;
        margin-bottom: 10px;
        &.bold{
          font-weight: bold;
        }
        .select_width210{
          width: 210px;
        }
        .select_width200{
          width: 200px;
        }
        .select_width60 {
          width: 60px;
        }
        .select_width100 {
          width: 100px;
        }
      }
    }
  }
}
.rule-title {
  font-family: PingFang SC, sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #333333;
  margin-bottom: 10px;
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
  &.fs16{
    font-size: 16px;
  }
}
.rule-wrapper {
  margin: 32px auto;
  box-sizing: border-box;
  padding: 26px;
  width: 1000px;
  // height: 660px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(153, 146, 185, 0.06);
  border-radius: 6px;
}
.description {
  width: 744px;
  font-family: PingFang SC, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 29px;
  text-align: center;
  margin: 24px auto 0;

  color: #666666;
}
@media screen and (max-width: 750px){
  .description{
    line-height: 1.5;
  }
  .rule-wrapper {
    .rule-title{
      line-height: 1.3;
    }
    .rule-content{
      line-height: 1.2;
      .table {
        .table_con {
          height: 10vw;
          div {
            height: 10vw;
            line-height: 1.2;
          }
        }
      }
    }
  }
}
</style>
<script>
import { defineComponent, ref, onMounted } from "vue";
import { getRewardInfo } from "../apis";
import { dbcPriceOcw } from '../untils/index'
export default defineComponent({
  name: "rule",
  setup() {
    const gpu_type = ref('')
    const gpu_num = ref('')
    const mem_num = ref('')
    const local = ref('')
    const gpu_type1 = ref('')
    const gpu_num1 = ref('')
    const mem_num1 = ref('')
    const local1 = ref('')
    const numList = ref([])
    const options = ref([
      {name: '1080', cuda: '2560', men: '8', large: 1},
      {name: '1080ti', cuda: '3584', men: '11', large: 1},
      {name: '1660', cuda: '1408', men: '6', large: 1},
      {name: '1660ti', cuda: '1536', men: '6', large: 1},
      {name: '1660s', cuda: '1408', men: '6', large: 1},
      {name: '2070s', cuda: '2560', men: '8', large: 1},
      {name: '2080', cuda: '2944', men: '8', large: 1},
      {name: '2080s', cuda: '3072', men: '8', large: 1},
      {name: '2080ti', cuda: '4352', men: '11', large: 1},
      {name: '3060', cuda: '3584', men: '12', large: 1},
      {name: '3060ti', cuda: '4864', men: '8', large: 1},
      {name: '3070', cuda: '5888', men: '8', large: 1},
      {name: '3070ti', cuda: '6144', men: '8', large: 1},
      {name: '3080', cuda: '8704', men: '10', large: 1},
      {name: '3080ti', cuda: '10240', men: '12', large: 1},
      {name: '3090', cuda: '10496', men: '24', large: 1},
      {name: 'A4000', cuda: '6144', men: '16', large: 1},
      {name: 'A5000', cuda: '8192', men: '24', large: 1},
      {name: 'A40', cuda: '10752', men: '48', large: 1},
      {name: 'A100 PCIe', cuda: '6912', men: '40', large: 2},
      {name: 'A100 PCIe', cuda: '6912', men: '80', large: 2},
      {name: 'A100 SXM4', cuda: '6912', men: '40', large: 2},
      {name: 'A100 SXM4', cuda: '6912', men: '80', large: 2},
      {name: 'A800 PCIe', cuda: '6912', men: '40', large: 2},
      {name: 'A800 PCIe', cuda: '6912', men: '80', large: 2},
      {name: 'A800 SXM5', cuda: '8192', men: '80', large: 2},
      {name: 'V100', cuda: '5120', men: '16', large: 2},
      {name: 'V100', cuda: '5120', men: '32', large: 2},
      {name: 'H100 SXM5', cuda: '16896', men: '80', large: 2},
      {name: 'H100 PCIe', cuda: '14592', men: '80', large: 2},
      {name: 'H100 NVL1', cuda: '16896', men: '94', large: 2},
      {name: 'H800 SXM5', cuda: '16896', men: '80', large: 2},
      {name: '4060', cuda: '3072', men: '8', large: 1},
      {name: '4060ti', cuda: '4352', men: '8', large: 1},
      {name: '4060ti', cuda: '4352', men: '16', large: 1},
      {name: '4070', cuda: '5888', men: '12', large: 1},
      {name: '4070ti', cuda: '7680', men: '12', large: 1},
      {name: '4080', cuda: '9728', men: '16', large: 1},
      {name: '4080ti', cuda: '14080', men: '20', large: 1},
      {name: '4090', cuda: '16384', men: '24', large: 1},
      {name: '4090ti', cuda: '18176', men: '24', large: 1}
    ])
    const options1 = ref([
      {label: 1, value: 1},
      {label: 2, value: 2},
      {label: 3, value: 3},
      {label: 4, value: 4},
      {label: 5, value: 5},
      {label: 6, value: 6},
      {label: 7, value: 7},
      {label: 8, value: 8}
    ])
    const options2 = ref([])
    const options2_1 = ref([])
    const options3 = ref([
      { name: '중국대륙', key: 1, value: 1 },
      { name: '북미', key: 2, value: 1.2 },
      { name: '남미', key: 3, value: 1.3 },
      { name: '유럽', key: 4, value: 1.5 },
      { name: '중동', key: 5, value: 1.6 },
      { name: '한국', key: 6, value: 1.6 },
      { name: '일본', key: 7, value: 1.7 },
      { name: '중국대만', key: 8, value: 1.3 },
      { name: '중국홍콩 및 마카오', key: 9, value: 1.3 },
      { name: '말레이시아', key: 10, value: 1.5 },
      { name: '인도네시아', key: 11, value: 1.5 },
      { name: '싱가폴', key: 12, value: 1.5 },
      { name: '베트남', key: 13, value: 1.3 }
    ])

    const Income = ref(0) // 月收益
    const dbcPrice = ref(0) // dbc价格
    const countVideo_num = ref(0) // 显存
    const countGpu_num = ref(0) // 显卡数量
    const countMem_num = ref(0) // 内存
    const countLarge_num = ref(1) // 大模型系数
    const countCuda_core = ref(0) // cuda数量
    const countLocal_num = ref(0) // 地域系数
    const totalCalcPoints = ref(0) // 总算力值
    const machineCalcPoints = ref(0) // 整机算力值

    const machinePoints = ref(0) // 整机算力值
    const countVideo_num1 = ref(0) // 显存
    const countGpu_num1 = ref(0) // 显卡数量
    const countMem_num1 = ref(0) // 内存
    const countLarge_num1 = ref(1) // 大模型系数
    const countCuda_core1 = ref(0) // cuda数量
    const countLocal_num1 = ref(0) // 地域系数
    
    const SelectGPU1 = (val) => {
      const arr = val.split('_')
      countCuda_core1.value = arr[0]
      countVideo_num1.value = arr[1]
      countLarge_num1.value = arr[2]
      machineCalc()
    }
    const SelectGpuNum1 = (val) => {
      countGpu_num1.value = val
      options2_1.value = []
      mem_num1.value = ''
      for (let i = 0; i < numList.value.length; i ++) {
        let mem_value = val * numList.value[i]
        options2_1.value.push({ name: mem_value, value: mem_value })
      }
      mem_num1.value = val * numList.value[0]
      countMem_num1.value = val * numList.value[0]
      machineCalc()
    }
    const SelectMem1 = (val) => {
      countMem_num1.value = val
      machineCalc()
    }
    const SelectLocal1 = (val) => {
      const arr = val.split('_')
      countLocal_num1.value = arr[0]
      machineCalc()
    }
    const machineCalc = () => {
      if (countCuda_core1.value&&countVideo_num1.value&&countGpu_num1.value
      &&countMem_num1.value&&countLarge_num1.value&&countLocal_num1.value) {
        machinePoints.value = countPoint(countGpu_num1.value, countMem_num1.value, countCuda_core1.value, countVideo_num1.value, countLocal_num1.value)*countLarge_num1.value
      }
    }

    const SelectGPU = (val) => {
      const arr = val.split('_')
      countCuda_core.value = arr[0]
      countVideo_num.value = arr[1]
      countLarge_num.value = arr[2]
      MonthlyIncome()
    }
    const SelectGpuNum = (val) => {
      countGpu_num.value = val
      options2.value = []
      mem_num.value = ''
      for (let i = 0; i < numList.value.length; i ++) {
        let mem_value = val * numList.value[i]
        options2.value.push({ name: mem_value, value: mem_value })
      }
      mem_num.value = val * numList.value[0]
      countMem_num.value = val * numList.value[0]
      MonthlyIncome()
    }
    const SelectMem = (val) => {
      countMem_num.value = val
      MonthlyIncome()
    }
    const SelectLocal = (val) => {
      const arr = val.split('_')
      countLocal_num.value = arr[0]
      MonthlyIncome()
    }
    const countPoint = (Gpu_Num, Mem, Cuda, M_value, coe) => {
      var num = Math.round(((Gpu_Num*25+ Mem/3.5 + Math.sqrt(Cuda) * Math.sqrt(M_value/10)*Gpu_Num)*coe) * 100) / 100
      return num
    }
    const MonthlyIncome = () => {
      if (countCuda_core.value&&countVideo_num.value
      &&dbcPrice.value&&countGpu_num.value
      &&countMem_num.value&&countLarge_num.value
      &&countLocal_num.value&&totalCalcPoints.value) {
        machineCalcPoints.value = countPoint(countGpu_num.value, countMem_num.value, countCuda_core.value, countVideo_num.value, countLocal_num.value)
        Income.value = Math.round(((machineCalcPoints.value*countLarge_num.value / totalCalcPoints.value)*1095890*dbcPrice.value*countLocal_num.value*countLarge_num.value*1.3*30+machineCalcPoints.value*0.508) * 100) / 100
      }
    }
    const getPrice = async () => {
      const priceNum = await dbcPriceOcw()
      dbcPrice.value = priceNum/1000000
      const rewardInfo = await getRewardInfo();
      totalCalcPoints.value = rewardInfo.totalCalcPoints/100
    }
    onMounted(() => {
      for (let i = 1; i < 33; i ++) {
        numList.value.push(16*i)
      }
      getPrice()
    })
    return {
      gpu_type,
      gpu_num,
      mem_num,
      local,
      gpu_type1,
      gpu_num1,
      mem_num1,
      local1,
      Income,
      machinePoints,
      options,
      options1,
      options2,
      options2_1,
      options3,
      SelectGPU,
      SelectGpuNum,
      SelectMem,
      SelectLocal,
      SelectGPU1,
      SelectGpuNum1,
      SelectMem1,
      SelectLocal1
    };
  }
});
</script>
