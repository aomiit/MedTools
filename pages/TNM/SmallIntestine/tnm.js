var tnmlist = [
  {
    "th8": {
      "orderedKeys": {
        "M": ["M0", "M1"],
        "T": ["TX", "T0", "Tis", "T1a", "T1b", "T2", "T3", "T4"],
        "N": ["NX", "N0", "N1", "N2"]
      },

      "Table": {
        "Tis_N0_M0": "0",        
        "T1a_N0_M0": "Ⅰ",
        "T1b_N0_M0": "Ⅰ",
        "T2_N0_M0": "Ⅰ",
        "T3_N0_M0": "ⅡA",
        "T4_N0_M0": "ⅡB",
        "AnyT_N1_M0": "ⅢA",
        "AnyT_N2_M0": "ⅢB",    
        "AnyT_AnyN_M1": "Ⅳ"
      },
      "M": {
        "M0":"无远处转移",
        "M1":"有远处转移"    
      },
      "T": {
        "TX":"原发肿瘤无法评估",
        "T0":"未发现肿瘤",
        "Tis":"原位癌",
        "T1a":"肿瘤侵及固有层",
        "T1b": "肿瘤侵及黏膜下层",
        "T2":"肿瘤侵及固有肌层",
        "T3":"穿过肌层侵及浆膜下层或无腹膜覆盖的组织（肠系膜或腹膜后）",
        "T4": "穿透腹膜或直接侵及其它器官或结构（包括其它小肠袢、肠系膜、腹膜后，经浆膜侵及腹壁；侵及胰腺或胆管(仅对十二指肠而言)"
      },
      "N": {
        "NX":"无法评估区域淋巴结",
        "N0":"无区域淋巴结转移",
        "N1": "1-2个区域淋巴结转移",
        "N2": "≥3个区域淋巴结转移"
      }
    }
  }
]
 
module.exports ={
  tnm: tnmlist
}

