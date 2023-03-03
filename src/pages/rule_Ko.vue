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
      | 최소 카드 1장, 카드 2장 혹은 4장으로 권장; Nvidia 시리즈 그래픽 카드 사용해야합니다 
    li 
      span 메모리: 
      | 메모리 요구 사항은 카드당 최소 48G, 기기는 최소 64G입니다(즉, 각 카드에 할당된 메모리가 48G에 도달하면 온체인 심사를 통과할 수 있습니다,만약 새 기기 4카드 경우 320G 메모리 권장합니다); 클라이언트측 실제 사용환경 요구 대비 ,GPU 메모리가 10G 혹은 그 이상  CudaCore가 4000보다 크면 서버의 더큰 메모리 사용을 권장 합니다 , 카드 1장 256G로 권장, 카드 2장 448G로 권장, 카드 4개 832G로 권장 )
    li 
      span CPU: 
      | Intel/AMD, 주주파수는 2.0Ghz 이상, CPU는 8코어 이상; 특별 주의사항: 중장기 임대율 및 임대 상태에서 30%의 컴퓨팅값 보너스를 고려하여  새 기기의 CPU는 Intel, V3 이상, 주 주파수 2.4Ghz, 터보 주파수 3.0Ghz 이상, 단일 CPU는 10코어 이상, 평균 GPU별 5코어 10스레드 이상 , 4장 GPU 서버에는 듀얼  CPU 사용을 권장합니다.
    li 
      span 하드디스크: 
      | 시스템디스크 100G SSD 및 그이상,데이터디스크 1T nvme SSD 및 그이상(새 기기 GPU 카드 4장 서버는 3.84T nvme SSD사용 권장);
    li 
      span 네트워크 대역폭: 
      | GPU 4정 기기의 업다운 대역폭은 20M 이상,  GPU 2장 기기의 업다운 대역폭은 10M 이상, 각 GPU의 평균 대역폭은 5M 이상입니다;특별주의, 장기 임대율 보장위해.중국 지역 데이터센터는 BGP및  3선 대역폭 지원 권장,기타 해외 지역은 BGP대역폭 지원 권장합니다 .
    li
      span 그래픽카드 가상기기:
      | 온체인의 모든 서버 기기에는 해당 그래픽 카드 수와 함께 그래픽 카드 가상기기(그래픽 카드 디시버)가 장착되어 있어야 합니다. 새 기기에는 10기가비트 네트워크 카드로 권장합니다; 그래픽 카드 가상화 기기가 없는 기기는 온체인 심사 통과 안됩니다 .
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
      | 기기 사용의 안정성, 온라인 수익 안정성, 패널티 메커니즘을 고려하여 조립 기기가 아닌 제조업체 브랜드 기기 사용을 권장합니다
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
    div 이번 모델 수정에서는 서버 기본값 및 메모리도 계산 모델에 포함되며 전체 생태계  클라이언트의 임대 비용도 컴퓨팅값 시스템을 참조하여 가격이 책정됩니다. 임대 수익은 $0.8468/C/월 입니다.
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
            div 2
            div 96
            div 167.94
            div 142.22
            div 71.11
          div.line
            div 4
            div 192
            div 335.88
            div 284.45
            div 71.11
      div.table_li
        div 1080ti
        div 3584
        div 11
        div.width60
          div.line
            div 2
            div 96
            div 203.31
            div 171.92
            div 85.96
          div.line
            div 4
            div 192
            div 406.01
            div 343.84
            div 85.96
      div.table_li
        div 1660
        div 1408
        div 6
        div.width60
          div.line
            div 2
            div 96
            div 135.56
            div 114.80
            div 57.40
          div.line
            div 4
            div 192
            div 271.12
            div 229.60
            div 57.40
      div.table_li
        div 1660ti
        div 1536
        div 6
        div.width60
          div.line
            div 2
            div 96
            div 138.14
            div 116.99
            div 58.50
          div.line
            div 4
            div 192
            div 276.29
            div 233.98
            div 58.50
      div.table_li
        div 1660s
        div 1408
        div 6
        div.width60
          div.line
            div 2
            div 96
            div 135.56
            div 114.80
            div 57.40
          div.line
            div 4
            div 192
            div 271.12
            div 229.60
            div 57.40
      div.table_li
        div 2080
        div 2944
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 174.49
            div 147.77
            div 73.89
          div.line
            div 4
            div 192
            div 348.98
            div 295.54
            div 73.89
      div.table_li
        div 2080s
        div 3072
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 176.58
            div 149.54
            div 74.77
          div.line
            div 4
            div 192
            div 353.15
            div 299.08
            div 74.77
      div.table_li
        div 2080ti
        div 4352
        div 11
        div.width60
          div.line
            div 2
            div 96
            div 215.81
            div 182.76
            div 91.38
          div.line
            div 4
            div 192
            div 431.62
            div 365.52
            div 91.38
      div.table_li
        div 2080ti
        div 4352
        div 11
        div.width60
          div.line
            div 2
            div 448
            div 316.38
            div 267.93
            div 133.97
          div.line
            div 4
            div 832
            div 614.47
            div 520.38
            div 130.10
      div.table_li
        div 3060
        div 3584
        div 12
        div.width60
          div.line
            div 2
            div 96
            div 208.59
            div 176.65
            div 88.32
          div.line
            div 4
            div 192
            div 417.18
            div 353.30
            div 88.32
      div.table_li
        div 3060ti
        div 4864
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 202.19
            div 171.23
            div 85.61
          div.line
            div 4
            div 192
            div 404.38
            div 342.46
            div 85.61
      div.table_li
        div 3070
        div 5888
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 214.69
            div 182.82
            div 90.91
          div.line
            div 4
            div 192
            div 429.39
            div 363.64
            div 90.91
      div.table_li
        div 3070ti
        div 6144
        div 8
        div.width60
          div.line
            div 2
            div 96
            div 217.65
            div 184.32
            div 92.16
          div.line
            div 4
            div 192
            div 435.29
            div 368.64
            div 92.16
      div.table_li
        div 3080
        div 8704
        div 10
        div.width60
          div.line
            div 2
            div 96
            div 264.02
            div 223.59
            div 111.80
          div.line
            div 4
            div 192
            div 528.04
            div 447.18
            div 111.80
      div.table_li
        div 3080
        div 8704
        div 10
        div.width60
          div.line
            div 2
            div 448
            div 364.59
            div 308.76
            div 154.38
          div.line
            div 4
            div 832
            div 710.90
            div 602.04
            div 150.51
      div.table_li
        div 3080ti
        div 10240
        div 12
        div.width60
          div.line
            div 2
            div 96
            div 299.13
            div 253.33
            div 126.66
          div.line
            div 4
            div 192
            div 598.26
            div 506.65
            div 126.66
      div.table_li
        div 3080ti
        div 10240
        div 12
        div.width60
          div.line
            div 2
            div 448
            div 399.70
            div 338.50
            div 169.25
          div.line
            div 4
            div 832
            div 781.12
            div 661.51
            div 165.38
      div.table_li
        div 3090
        div 10496
        div 24
        div.width60
          div.line
            div 2
            div 96
            div 394.86
            div 334.40
            div 167.20
          div.line
            div 4
            div 192
            div 789.72
            div 668.79
            div 167.20
      div.table_li
        div 3090
        div 10496
        div 24
        div.width60
          div.line
            div 2
            div 448
            div 495.43
            div 419.57
            div 209.78
          div.line
            div 4
            div 832
            div 972.57
            div 823.65
            div 205.91
      div.table_li
        div A4000
        div 6144
        div 16
        div.width60
          div.line
            div 2
            div 96
            div 275.73
            div 233.50
            div 116.75
          div.line
            div 4
            div 192
            div 551.45
            div 467.01
            div 116.75
      div.table_li
        div A5000
        div 8192
        div 24
        div.width60
          div.line
            div 2
            div 96
            div 357.86
            div 303.06
            div 151.53
          div.line
            div 4
            div 192
            div 715.73
            div 606.13
            div 151.53
      div.table_li.height30
        div A100
        div 6912
        div 40
        div.width60
          div.line
            div 4
            div 832
            div 1002.82 
            div 849.18
            div 212.29
      div.table_li.height30
        div A100
        div 6912
        div 80
        div.width60
          div.line
            div 4
            div 832
            div 1278.32
            div 1082.48
            div 270.62   
      div.table_li.height30
        div A40
        div 10752
        div 48
        div.width60
          div.line
            div 4
            div 832
            div 1246.42
            div 1055.47
            div 263.87 
      div.table_li.height30
        div V100
        div 5120
        div 16
        div.width60
          div.line
            div 4
            div 832
            div 699.75
            div 592.55
            div 148.14   
      div.table_li.height30
        div V100
        div 5120
        div 32
        div.width60
          div.line
            div 4
            div 832
            div 849.71 
            div 719.53
            div 179.88
      div.table_li.height30
        div T4
        div 2560
        div 16
        div.width60
          div.line
            div 4
            div 832
            div 593.71 
            div 502.75
            div 125.69  
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
    div 상담 메일  참조: zhouyu@deepbrainchain.org; leo@deepbrainchain.org
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
