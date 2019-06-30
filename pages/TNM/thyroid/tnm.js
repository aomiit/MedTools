var tnmlist = [
  {
    "th8": {
      "orderedKeys": {
        "M": ["M0", "M1"],
        "T": ["TX", "T0", "T1a", "T1b", "T2", "T3a", "T3b", "T4a", "T4b"],
        "N": ["NX", "N0a", "N0b", "N1a", "N1b"]
      },
      "TableDD55": {
        "M0": "I",
        "M1": "II",        
      },
      "TableDU55": {
        "T1a_N0_M0": "I",
        "T1b_N0_M0": "I",
        "T1a_NX_M0": "I",
        "T1b_NX_M0": "I",
        "T2_N0_M0": "I",
        "T2_NX_M0": "I",

        "T1a_N1a_M0": "II",
        "T1b_N1a_M0": "II",
        "T2_N1a_M0": "II",
        "T1a_N1b_M0": "II",
        "T1b_N1b_M0": "II",
        "T2_N1b_M0": "II",

        "T3a_M0": "II",
        "T3b_M0": "II",

        "T4a_M0": "III",

        "T4b_M0": "IVA",
        "M1": "IVB",
      },
      "TableA": {
        "T1a_N0_M0": "IVA",
        "T1b_N0_M0": "IVA",
        "T2_N0_M0": "IVA",
        "T3a_N0_M0": "IVA",

        "T1a_NX_M0": "IVA",
        "T1b_NX_M0": "IVA",
        "T2_NX_M0": "IVA",
        "T3a_NX_M0": "IVA",

        "T1a_N1a_M0": "IVB",
        "T1b_N1a_M0": "IVB",
        "T2_N1a_M0": "IVB",
        "T3a_N1a_M0": "IVB",

        "T1a_N1b_M0": "IVB",
        "T1b_N1b_M0": "IVB",
        "T2_N1b_M0": "IVB",
        "T3a_N1b_M0": "IVB",

        "T3b_M0": "IVB",

        "T4a_M0": "IVB",
        "T4b_M0": "IVB",

        "M1": "IVC",
      },
      "M": {
        "M0":"无远处转移",
        "M1":"有远处转移"    
      },
      "T": {
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

