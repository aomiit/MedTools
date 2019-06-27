var tnmlist = [
  {
    "th8": {
      "orderedKeys": {
        "M": ["M0", "M1"],
        "T": ["AnyT","TX", "T0", "T1a", "T1b", "T2", "T3a", "T3b", "T4a", "T4b"],
        "N": ["AnyN","NX", "N0a", "N0b", "N1a", "N1b"]
      },
      "Table": {
        "TX_N0_M0": "隐匿癌",
        "Tis_N0_M0": "0",

        "T1mi_N0_M0": "IA1",
        "T1a_N0_M0": "IA1",
        "T1a_N1_M0": "IIB",
        "T1a_N2_M0": "IIIA",
        "T1a_N3_M0": "IIIB",
  
        "T1b_N0_M0": "IA2",
        "T1b_N1_M0": "IIB",
        "T1b_N2_M0": "IIIA",
        "T1b_N3_M0": "IIIB",

        "T1c_N0_M0": "IA3",
        "T1c_N1_M0": "IIB",
        "T1c_N2_M0": "IIIA",
        "T1c_N3_M0": "IIIB",

        "T2a_N0_M0": "IB",
        "T2a_N1_M0": "IIB",
        "T2a_N2_M0": "IIIA",
        "T2a_N3_M0": "IIIB",

        "T2b_N0_M0": "IIA",
        "T2b_N1_M0": "IIB",
        "T2b_N2_M0": "IIIA",
        "T2b_N3_M0": "IIIB",

        "T3_N0_M0": "IIB",
        "T3_N1_M0": "IIIA",
        "T3_N2_M0": "IIIB",
        "T3_N3_M0": "IIIC",

        "T4_N0_M0": "IIIA",
        "T4_N1_M0": "IIIA",
        "T4_N2_M0": "IIIB",
        "T4_N3_M0": "IIIC",

        "M1a": "IVA",
        "M1b": "IVA",
        "M1c": "IVB",
      },
      "M": {
        "M0":"无远处转移",
        "M1":"有远处转移"    
      },
      "T": {
        "AnyT":"任何T分期",
        "TX":"原发肿瘤无法评估",
        "T0":"无原发肿瘤证据",
        "T1a":"原发肿瘤最大径≤1cm，肿瘤局限于甲状腺",
        "T1b":"原发肿瘤最大径>1cm，≤2cm，肿瘤局限于甲状腺",
        "T2":"原发肿瘤最大径>2cm，≤4cm，肿瘤局限于甲状腺",

        "T3a":"肿瘤最大径＞4cm，肿瘤局限于甲状腺",
        "T3b":"任何大小肿瘤，甲状腺外浸润，仅累及带状肌群（胸骨舌骨肌、胸骨甲状肌、甲状舌骨肌、肩甲舌骨肌）",
        "T4a":"任何大小肿瘤甲状腺外浸润，包括皮下软组织、喉、气管、食道、喉返神经",
        "T4b": "任何大小肿瘤甲状腺外浸润，包括椎前筋膜、或包绕颈动脉或纵膈血管"
      },
      "N": {
        "AnyN": "任何N分期",
        "NX":"淋巴结转移情况无法判断",
        "N0a":"无区域淋巴结转移证据,细胞学或者组织学确定良性的淋巴结",
        "N0b": "无区域淋巴结转移证据,无影像学或者临床检查发现淋巴结转移",
        "N1a":"单侧或者双侧Ⅵ或Ⅶ区淋巴结转移",
        "N1b":"单侧、双侧或对侧Ⅰ、Ⅱ、Ⅲ、Ⅳ、Ⅴ区或咽后壁淋巴结转移"
      }
    }
  }
]
 
module.exports ={
  tnm: tnmlist
}

