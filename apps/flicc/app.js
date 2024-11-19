///<reference path="../../typescript/types/main.d.ts" />

const _clockFont = {
  1: require("heatshrink").decompress(
    atob(
      "2FYwJC/AH4A/AH4A/AH4A/AEsD//AAYP4h//BQUH/+ACo8f//4CoU/DYUAAgPwCo9///+CoQFBCAX///8Co4KBHgIVBAgIxBgIEBEAIAFBQRNBgf5EwZhBEARsHAAPAgf7CoZsBEAQVFg40Bv/gDQPgA4UPDAJzDAAcPJ4Mf+AVBIgIVBA4KFBCo4KBAQIVBOoQVB8ACDVwoHBg/4FAQVCFAQjCAAgKCS4IVDv4KBNQMHCo4KBgP8ga9CCoIBBCqIIBCoQ2BeAwDC/wMDCoN+CqhcCCqsBCqJcCMQIVFJgQDBCqA2CF4IVF/4ACCvmBCtRXWCIwVZYpoAHeJQ2DCueAgEB/gVFEAYAGBgIVU4EAgYVHEAMD8AVFj4VC/AVFGwQIDCogdBg4VHEAIKBCosP+ACCCosfBQYVFg7RBn/gCosPAoM/Co//gH/CowKECosD/4AB4AVFBQgVFgIKCB4IVEBQjcH/7pBCoo/BAALGI/5vBCowKDAA0P/53BCowKDAAxNBJY4KLAH4A/AH4A/AH4A/AH4AiA"
    )
  ),
  2: require("heatshrink").decompress(
    atob(
      "2FYwJC/AH4A/AH4A/AG0H+AV/Cv4V/CrP///4/wFBn/AgEP8EAj4JCCpF/Co4LBAwIVQgYLBJw4VFv4oBCoMHBYQVPj/Ah4LB/gVJn+ACosfBYJuHTIQVHn/wLIIVMMwQFBv5yB/4KBCo4lBCowzCCqI+CUIQVJgP7CoUBNQQgCCo8PCoP5VAN/gKWCcAQVI8AVagbYCBoQVHg/ggfxE4P+Cp69B+AVpIYIVB/gaBBoIDDCowKBCoN+QIInDF4YVH/AVZAgIVNCALdBvwaCCp38CoM/CqxyBCpqUBh+ACqcfwEfw4VQ/wVEYp0AvwVD8DxOCoM/gAVSv4VBh/PCqvAgf8BIMP8AVJn8+Coa2BCp1+AwPfCoP+BIMfCpYPBg//wCgBCoXACpMfCov/D4QVHPIUfKIIVDv4CEAAh5DCoUDFAfggIFCCov/zB5BCo34GIIVGDwJCBh4CBCocf///OAQVLHYcPCoJOCAAoVGEoQvB/7wGdwSACCoovB/7EGSwoiCKId/TwQAGWAYAGRYQA/AH4A/AH4A/AHg"
    )
  ),
  3: require("heatshrink").decompress(
    atob(
      "2FYwJC/AH4A/AH4A/ABsH8AV/CqUH+AV/Cv4V/CrP///4CoM//wIB/kH/kAh//wAIBgP/EoIVEAgINB/kfCoN/CAQaCBAIVD8IEB4AVBn4MECoM/AoIVE8YEBEYP8v/8gYHBDIIwCHIIVD84EBOYP8CIMHA4JgCAgI5BCon9HIQDB/hRBHgRsBHISZD9/ANIQ8Cj/4CQOAIwJZB+AVDA4KVCIgUfLoN/4CgDCohMBgYVCQwM/AQcHJgICBCoYSBgIYBWQU/AQIuBFAIjCCoakCCoSTCYQQVBIwMBCogCBCot+CoXwj5GBCpSpCAQQLBCoQIBCowmBCQTYCCoRcBCopJBCpED+ByCCpBoBCoJOBCoX4Cod+CqIEBBoIVLUIQVS/4ACCoIFDCvl/CtRBQTIQABTIb4CYpgVuwAVjgAVVAQQABj/ACsgEBBYPAj4NC/AVMKQIOBh4NC/wVLn48Bh4VBCAMBCoLmBCpIIBH4MHRIMD/gBBCpMfEwIYBgYIBh4VB/+YCpEP/0B//AAQU//AEBOAIVHg//AAJwBAgXwCpY3BAAIKCAgIQBCpQhB/5zDAoKLBv/8CpAmCSIJdBGAcfCpUfHYRHCSwJiBIIwADCAIFDv4PCAH4A/AH4A/AH4AIA="
    )
  ),
  4: require("heatshrink").decompress(
    atob(
      "2FYwJC/AH4A/AH4Afg/+Cqcf/4VTv4rU/4VTgIVW/gVSgf+ggVTFSauB/AVU+AV/Cv4Vt///bgMH//AcYIdCv8A/0HdQoVDn//CQIVGh4VJv4DCCo0/CpEBAYP+Co9/CpEDAYP/Co41CCov4NgIABwAVNTIRhCQgIVFCgwVDj4CBn/gCoy9GCofgDAQVGXAIVHn4KBh4VHwAVJBQMH/AVQv4KBgYVHCgoVEAoMDWgIVSgIVGcYIVIBQQVrAYIVmfYYVmNIIV/NtYVWbdYKCQ4IVmBgIVD/AFB/4VOCYIVQn+ACosBCpvAAoUDWoMDCpkf8EAh4VBCAMHCpoYDHwUPCpkPKQN/CoWAn6ZMg/+CQJaB//5/4VMMoIABQwIDB/wVMFIIABbAX//gVMEwYEBn///AVNEwLYCj//+AVNCAKxBVoXACpqrCAAQEEAH4A/AH4A/AHQ="
    )
  ),
  5: require("heatshrink").decompress(
    atob(
      "2FYwJC/AH4A/AH4Afg/+Cqcf/8PwAVRv/+j/ACqP//0/8AUQgIVW/gVSgf+ggVT/kACqUH/CbBQaMH+ACBV6IVCeCYV/Cv4AC////kf4P+A4MBcYMH/7OICofACoT5D/43ICpD5Bv4KBCpn/CocBBQIdCCpV/OoX4gYKBDoQVH/AVF+BsBAAOATJIVBn4NBA4MPKoKEICo8P8EPBIM/8AVQj4SBAQQVKAIIVDAgSwHCo5cGCqKeDCpY+BAgSeCcAQVNH4N+Cq8BCpgECKoP+CoTIBCppVBCqEDCoYRCCpxPBFIP/AAQViPYQVT/hRCCsw/BIYQVSN4QRHCpN+QogVPv7HCCqQGCCqM/CquH8BbBCqOPCoN/CqEfCqvPF4WAgEDDYIVLh/fCoQCBWoQVM/4oBj4oBg4VSBIMPAQIVLg4VCh4oBDAQVNBIQDB/5tNCocD/4ABBIIVLCIIJBgIVCI4IVM/wKCCoTFNCok///8CpsBB4aeBQQ4VDAA5YBKw4A/AH4A/AH4A0"
    )
  ),
  6: require("heatshrink").decompress(
    atob(
      "2FYwJC/AH4A/AH4A5vgVU/wUTgP/Cv4VrQasAnjw/AH4Aqj7YC/0H/AEBv+ACpV///gCoMDCoYUKgP///wCoX8BIIzCABEDCoInB/0B/weBAQIAJg4VBE4IQBCoQuCABEP/wBBCYQ+BIgaCJ+BZBCoRqBOAYVJQIIVDn+Ag50BABM/4CoCCoXAh4VMXYICBCoMfCoI0BCpkcIIRIBC4IVLAgYVBFIIVTNYI0CIJgVFTYIVRVoIVNJwbvDAYLbMCozwLCoINDE4X/CpkP/5CCCoV//AVLg4kDCqED/4sCCoU/L4YAJCoIPBCofgCpk/IQQrRLAITBCqJnB/5tRFgavECpwQBwDFQIQYVCeIIZCQpvACIMDCqEfCof4v4VSg4VBwASKgwVFh/wn4VLvwVG8AFBQBYVFj4VB8AVNHYIVC4AtBVhivEDIJZBVhjbEDIKFBCpf4g//gAVCWISsL///CYIBBDILdBCpUPCoIOB/0BC4ICCABI/B/46BCoIoCCpcBCoKSB/w+DIgKaLQQIVBQAajCLBRlLAH4A/AH4A/AHY"
    )
  ),
  7: require("heatshrink").decompress(
    atob(
      "2FYwJC/AH4A/AH4A/AH4A/AEsf/4EFgf8AwMD/EAh4OCj/AgF///gA4IECgIVCg4VBBwcf4MB///+EAAgYVEAoIJBDIMf4cDAwYEC/kB/wVDBIYVB48HAwYECCYIVCh/wBIkf58P/wBBMQQABCongBIkf78fJQQGB/AEBwF/CoYJESIMfOQIVBn4EBv4VDSQIJEj/8n6bCwE/wAYB4AVFBwICBGAIQDEwwJBAgIhBAgJGB+ALCjgtBCoXgD45cCCoL1DPwgVEBIghCCobWCBYRSCCobKBG4jwBdggVCH4IJGCpoJHRQQVB/ALDIYMAvwVDgYVCN4IVFBYIVC/wJE/AVCDoQVFg4VKh//IQMD/4AC/BDBH4MBBIgVBg//FgIVRCIQDDBYRDBCpMAAoPwCowBDCo8/IQIVSLAP+BYo/BIYQVHaAP/EYIFBcIZvCBIgVDFgIVFgAVMN4OBCov+Y4IVKv4VHeYJFBCpE/4ILEgF+CpkfCo1/h/ACqYNC/wVFgwEDBYhJBCpN+Co0HcoWfwCPBBIYQBv4VDAgUP+AHB34VBBIS1BCAk/wF/BwJ/BCoIoCBIYVDD4WAn4+CCooGD8AVBCAX/wEfHwN/A4MPCoQJDCof4g4MBj/+gf/CoR0CAYMBBIIVBGwP/BgIlBAAJQCRQYJDCoIQCYYILDCIQVCGYIJCCoIQC/EAGoIwCCoLiCBIgVBAwR2BOAIaCCohrBBITjCAwJRBSAIaDgYZCTwSbCPIQhDJwL/DAAYJJAH4A/AH4A/AH4A/AH4AfA="
    )
  ),
  8: require("heatshrink").decompress(
    atob(
      "2FYwJC/AH4AJgfgCqcH+AVTh/4A4t/Cv4Vc/iDOCpqvHCpoAHCv4V/CpsH//AYocB//gn+Av4FCDQP//4VBj//dwIVCDgP4CoQFBFAIVEAgIIBCoQcB/gVCh///wVFAYIEBCoU/B4IVCDYIMBCoZJBAAOACoQGCCoQbBBgIVDgYOC4AVBDgP7/+/CAN/94MBCoJFBg5IC8AVDwEfCoV8GYKRBTIUPQIMfCoUDDgJpBCoIMBn6aBCoYFBh/wCoMHBQJLBCoIMBEQIVDj7DDAIQlBIgV/BgIlCCo34CoIvBCo4IBCoSOBHQIVDEQJoBCoIMBUgQVDAQIVSv4CBgP8BQJICBQIVBAgIVbvwVOgYVHAwIVCKIJ4CCp6KCCpf/AAX+Cv4V+/yZCaAQVkYoYVCbaQVD4AFBv4VJBAQVvh/gUgQVJPgYVUgPwCoQMBgIVKKAUD/gVBg/4AwIVHYQUfHQMD/AVCEAMHCpQ6Ch4VCgYKBh4VKEgUfK4RUB4F/34VG/4VCEIP/CoQKBAALxHv/mMYQAB8AVCv///wVIIQI6BAAPACoU/CpIKBbgQVBwAVCj///AVHBQLGCEgLbCL4XwCo6MBTQQkBCobvCCo4gBAwIOBboIAFCo6aDABIVBBpYV/ABJrCAB6ICCqMD8CQOAAjHECqEPcAMBfIIrQCQICCK6H/wE//gVQgP/AAJEBACAVCOATCQCoKcCAB8fCoLwSg//QSJCDICQA/AEwA="
    )
  ),
  9: require("heatshrink").decompress(
    atob(
      "2FYwJC/AH4A/AH4A5gPgCqcH+AVU/AVTh/8Cv5XVQaqvVAH4A/ACk/wH/YQMD+EH8E/eocf/4VGwf/BwIVD/4QDAgPACouHBwQVC8IQDgIEBfYs/x4JBwAVC8YGBewMHAgP4CoufEgQVC84mDh4EBLoYVC34VF94VDNgP//wVFAwN/8AVDwEfHgM/+EDQgs/BYQVDBoMHHgM/OAJkBCohNCEIIVBGQMDCoN/CQICCCoZ5BCogSBgIVCB4SwECoUHCoZIBgIuBNQUfCooFBCoi9CCYKWCj4lBCosD/AVGIYROBCopdBCpLYCCpoMCCogIDCpoIBCoQ0CCsgRCCqX/AAQV/Cv4REYqYV/CqcBCqv8CtIBCgEPB4IVP/4VCBAQVOv4MBj4VS4APBAQIVPn4FBDAQVPj/8gf/NqMP/4ABTKMHCgKcCCp4/B/7IFCpiwB//wCqU//6CEAB0HKwoA/AH4A/AH4A0A="
    )
  ),
  10: require("heatshrink").decompress(
    atob(
      "2FYwJC/AH4A/AH4A/AG0H+AV/Cv4V/CrP///4gED//gAYPwh/+CpsPDIfwn//4AVMB4ImBCoIJBGIIVLv4EBCoPxAgJiJCoYDBHgMD+YJDCpUB//3Cof+//8TJcDKoM/8ED+/gh4VMg45Bj/wToOADoQVKh4CC/AVBgEBCpqRBFwIoDDAIVKj69Bgf8AIIVRgIVEv4VLn+ACoasCCp8A/wVRAwQVEBAYVeHAYVBA4IVk/4ABCv4V/dAgV/CqQMECqOACtMf4AGBwAVU+AVR8EAgP8CqEPAQMDCp/4AQgVOEoISB/wuB/AVO/+YAQOAv5tOgP//ACBAAIVRgAVC8AVNCQIVBv4VBYpwSBNwMfCoLxOCQKEC/4DBCpytCF4LzCAH4A/AH4A/AH4A/AAQA="
    )
  ),
  11: require("heatshrink").decompress(
    atob(
      "2FYwJC/AH4A/AH4A5v4V/Cv4V/Cv4V/AAkP/4VEn/4AQOAgEB/kAj/+BgIFBn//4AVCgP/DgMfCoQbBv//AwIVBAoPwCoUDCoOAj4eBgYVBBAPgCoIkCD4UAg4GB4AVEDwQlB/gFCF4RdCEQMPCoXwDwQlB/gFCLwIVBMYIiBCogeCEoIVB/BDBCoU/FIP4h5QBg4VB+EDEoP9AoJfBCoV/wEDEAIVC8Ef8EBCoP/AoKnCCoSqCCok/U4YVBAoIIBA4K6C/w+BOgIVBVoI3B/4FCDAIVBMIIVBNQIVBBQQ7CCoLzCBQLpCEQIVEvwIBcYIVE8AVBUYIVCAgI2BCofA/wFCCo0/AgQmBGgQVFPAI8DCpJGBCpgRBNAIVQCIRlBCp49DCo//AAXwCoIGDwDKBOwIID8AVMG4N+CtDtB/wVSNYQVcRIQABTIixCwIVBfQQAB/yNBCpMfwP4b4QVDYoQVLYoYVkh/DAwIVMMggVJXIIVDPQoVDPon+UYMAggVHg/n8DzBAwMICoWAEQLqBSAc8Cog7Cj4VBj4VC8AKBHAQEBCoY7Cj/ACoPAAoQQB/4MBAQL3BBgI7CAQP+FAIFBCoV/BgIuBCoYlCBYIVBM4N/CoQZBgYVGQwP/CoMH/0BAoIVC/EPOAIJCMgP8DYI2BAYIABNAUfAoI0BCocHBAI0BFIQFCCoMPAwI6BCoYlCGgIRBAoaUCAwJ2BRIYlCGgIVBn4FCCoIMCNIIVDBYI0CCoJRBaAgMBCIYDCEoIeBCoIlBBQQABUIQAFUIQA/AH4A/AH4A/ABY"
    )
  ),
  12: require("heatshrink").decompress(
    atob(
      "2FYwJC/AH4A/AH4A/AAf8Cv4Vdg/gCv4V/Cv4VZ///+f4gEDAQkfCQX8j+ADQYVB+IVHBQIRBCoPAgEBCo4HBgfwgIKBCIIVJCQQVDgYKBMYP8h4VC/AgC+ASBg4CC+EHBQQVCDIJMBEAYVF8EP/9/JYIVFg6ZCCQX+CoUfFoIJB/gPCJgMPAoQSCCoc/4EBAwIVBIoICBj4VCv0Ah4OBHIM/S4IVR4F/XwICB/g+BGwYVF34VCAwIVEOII2CCoU/dYIVDF4IJBwAVMz4CB4CABCobCBGwYVFj4CBCAIVBAgTuCEAIVEwAVBAQOBEgIVMBYM/CpLTCAoQVFh4CBKARcECpM+CoxnBCYKgBOYQVD4AVB4AVB/4ACCosA/4VCRITZCCqUHAQIVHCYIXBCot8CqQCBCoPgCqT9BAQIVHWYYVKTIQABCoqZDAQP4CqUD+AVB+AVIh/BBAIVE+P4gICCCsH+CoQSB+EB/IVBCAIVEg/j+CbBCof5CoQKBCp/7A4ICCCpV/CogDBCoX+CYMeCoUD+4NBn4VCZQIDB/4gCBAM/VYQVMAQN/wACCCoQKCj8HEgISEEAXAFwQVBgP/A4IVBUwV/B4QgC8AQBCo0PGANgCo7RBOAIVFg5GDCoYgC///CYKeC/5fBg4aBPoQSBKgUHCoJNBCosDSYaQBCoY1BBQQVFNQQVFBQQVBJgIVCW4S5CCokfCoU/EoQVHh7GCAAsHCQQA/AH4A/AH4A/ACAA="
    )
  ),
};
Graphics.prototype.setFontN57 = function () {
  // Actual height 105 (117 - 13)
  // 1 BPP
  return this.setFontCustom(
    E.toString(
      require("heatshrink").decompress(
        atob(
          "AH4A/AA0OgEcgE4gFwgHgCRP+gP8gf4g/wh4SJh/+j/8n/4v/w/4SJv/8//5//z//n//ACI8BBwnP/+f/43J/4AG/wSIn4SH/ASICI5dJgYSIwBKtSshdBw//aIoSJd4kf4E/N48B4EDwEHgEOgEcgE4gFwCQodBFxAsBLYwSJv4SFUwKxIMwLPFn6xJDow3B/g3JS4sH/4/FDpUfLpIdHFgwdKJUqVkYQ5dEKo1/CJD+I/ASJnydGMwIABDopKkSspdBcA//8I3Gg5vHgH+fw8PwAHFuEA8EDIQ1/AwosDj43GJQ1/CQLGBCQp3KS4JDFO4wODDozgHYQT+HcAwODDpQsHDpQsHDpRKhSsjCHj5GCaIQSEKIrvEfw0DIQIACh0AjgFCIQodEAAJEEg43GJQkPCQhKGO4t/KAaGDSpAqBD4aVGYQoMBD4bgMn4fDcBv/LobgMK4KQDj//VgRKtSsgfBBgcfG5cDN4YSBN5MB4EHAIMAh0An0AnEAuASFDoM/wF/gH+gP8FgMHVYpbB4f/w//h/+JQM//F/CQpoBz//n/+QwP//P/+aGGBxHn//PQwo3BABYkEfwIAKTIr+BABRdFfwIAKVghKlSshdB+H/8LRIeYrvIh/gfwISFuEA8EB4EDwEPwEOgEcCIoAHFgIAPRQISQO4ISQ//4G6LvFABUfd4pvMLqEBd4xKwSshdBG6EBN6ASBEiAA/AH4APuEA8CkBgeABAMOCI8H+EP8Ef4E/CQX+CQ9/+H/8P/4f/CQMPCQ8D//n//P/+f/4bCeo8PBwU//wOCgP/+A3H/4AE/AbC8ARFDYIAFBwM/JwRvFCQwOB/5dHj4RFBwJmBHYJKqSssf/k//DRCG4IuBG4wSBd4V/d4cDN48An0AnEAuEBGYUDwEHOAxTEh5+EFgJKGAoaREYwISFWIgMB4AFCO4KVGD4bTBDpAMDD4bvEFg7vEDopKmSsrCFn4MDLoI3Fg5REn5vCfwyQCBgkfBYhCDBgacEG4kHG4xKRO4t/KAbTBIYiVScHAsEK4KQDDopKmSsjCFD4IMDj43FCQIEDgZvDfwwABuEA8EB4EDwEHgEOgEcCIpBC8AdDFgJTDAA3/8KgCRQMPCRIMB55bCO4KGEAArEBQwf//LeGG4gABD4IqBAAKmFSIgABD4IqBAAKmFWIgABLoLvB/5dJd4IABZ4QABVghKpSss//F/BgJdB4Y3JCQOAd4ISB/kDN5MAnEAuASC4EDEhIA/AH4AZUgMHCR7REEhv/w//CR0f/8//wSOv/8//4G54AB+ASNh4SC4BvOCQRKOCIX8JWaVkLoPhG58A/0BN51wgHggfgCJkHPwUfG5t/CQMBJRqmBGgKXBwCmNBwKVOv7vBG4JwMBwcHcBoODZ4JdMBwY7CJWCVlj5GCaIQSMPwV/CBcOgEcAoX4CRZEEg43Lh4SEJRl/UQaGDUxQfDSpgMBD4bgMn4fDcBv/LobgMK4KQDj//VgRKtSsgfBDYZdBFQLRDCQwEDd4cPN4wABuEA8EB4EHAIMAhwRHDocf4E/wAsEAA//8P/4f/w6vDAA5oB5//z//O4gAHcQIOBSoLeIG4gAFUw6REAAqmHZ4gAFG5TvBAAjiBJVyVln/4v/waIQ3KCQLvC/0BN5cAnEAuEA8EBEhYAPA=="
        )
      )
    ),
    48,
    atob("VDZUVFRUVFRUVA=="),
    150 | 65536
  );
};
Graphics.prototype.setFontInterNumeric = function () {
  // Actual height 25 (26 - 2)
  // 1 BPP
  return this.setFontCustom(
    E.toString(
      require("heatshrink").decompress(
        atob(
          "AAkf/gDBn//8AHB/4IBh/gn+Ag/AgPwgPAgEcgHwgEHwE4DYPghwDBnEDwEAAwIjBAwM8gEB8EHCAIhBDoN8GwOA/wjB///BwN/AYQIBKZIjBAgVwAYQuBAAMeAYQyCHgJUBAAItB/+ANoJuBh4DB/AuL8EBBwN4gBOBnxWCj5lCRIMPGgO4N4MD5waC8aHC/CHCviHCnwGB+EfAwMeh+A8ED//AC4N/4AQBFgKfCJpICBCQJNBXgM/OQKrBHoKpBJwLLIFAJDCJQXgAwU4AwQQBIYMD4PwUYN4/yjBj/74/Agf8v6NBv0fGAJHBAYQAEEwLACMARLBYgS1CgamBDgPzCASTBAYRWCvghCvyCCXgIQBj8ACAK6BCAKcB/4mBdo5DFUggLCEIQAKkEAEIJ+Bh//PQX/+JdBJ4I9BnEcgLVBAwN4geDwCiCbgU4GIKpBBQKpBCAnwZYUeW4MOg5YBDQP/UoUPSgUAuBSJgJxCAYJ+BAYIIC/n//hJBKgUcKgPgh7jBIYxUHNgQQB4B/B+F4BIMfh+PQYPDGQVwn5UBgkHfw64NsDJCTAIQBvwQCv4QCAYIQBAYIQBAYIQBAYU4AYUOAYTLBFwQDDn4DCLQIAMvgCB/E/4AdBj62Bv/v38Aj0/wPATAPAKgXwTASOBTAIGChwGCCAnwvgGBEIXgg/++CQB/8/GQMfw7PBAAJ+BABkD/gpBdoODSQP/+DtCnxwBnkDGQIFB+BDCjhNCg5NCgPAKgLZBCAPAnDtCjztDh7tB/7tCv4DCg43BVQSTBABs8gIZBFAN4LoPAGQIzBg70BAAY"
        )
      )
    ),
    48,
    atob("FAsSFBUUExITFAc="),
    34 | 65536
  );
};
Graphics.prototype.setFont4x5 = function () {
  this.setFontCustom(
    atob(
      "AAAAdBgGAfV8CfyBIiQKrcAMAA6IARcAFXVARxAAwABCEAAIAAGTAPx+BHwAvXoK1+DhPg7W4P1uCEPg/X4O1+ACgACoAIqIBSlAIqIIVQC9VAfR4P1UB0VA/FwP1qD9KAdGYPk+AHwAEHwPk2D4Qg+j4PweB0XA/RAHTeD9FgTWQIfgD4fg8HwPi+DZNgwfAJ1yAA=="
    ),
    32,
    4,
    5
  );
};
const offset = new Date().getTimezoneOffset();
let classDataDay, classData, currentTimeout;

function bigCountdown(remaining, now) {
  g.setFont("N57")
    .setFontAlign(0, -1)
    .setColor(1, 1, 1)
    .clear()
    .drawString(remaining, 176 / 2, 15)
    .setFont("InterNumeric")
    .drawString(now, (176 + 5) / 2, 176 - 30);
}
function countDown() {
  const remainingTime = 60 - Math.floor((new Date().getTime() % 60000) / 1000);
  Bangle.setLCDPower(1);
  g.setFont("N57")
    .setFontAlign(0, 0)
    .setColor(1, 1, 1)
    .clear()
    .drawString(remainingTime + 1, 85, 100);
  if (remainingTime > 1) setTimeout(countDown, 1000 - (Date.now() % 1000));
  else
    setTimeout(() => {
      g.setFont("N57")
        .setFontAlign(0, 0)
        .setColor(1, 1, 1)
        .clear()
        .drawString("1", 176 / 2, 100);
    }, 900 - (Date.now() % 1000));
}
function bigTime(h, m) {
  g.clear();

  g.setColor(1, 1, 1).setFont("N57");
  if (m[0] == "1" || m[1] == "1") {
    g.setFontAlign(1, -1);
    g.drawString(m, 170, 55);
  } else {
    g.setFontAlign(0, -1);
    g.drawString(m, 88, 55);
  }

  g.setColor(0.5, 0.5, 0.5).drawImage(_clockFont[h.toString()], 0, -10);
}

let cachedClasses, cachedClassesMinute;
function getClasses(minute, classes) {
  if (cachedClassesMinute == minute) return cachedClasses;
  const applicableClasses = classes.filter((classItem) => {
    return classItem.end > minute;
  });
  const activeClass = applicableClasses.find((classItem) => {
    return classItem.start <= minute;
  });
  const nextClass = applicableClasses.find((classItem) => {
    const timeDifference = classItem.start - minute;
    return timeDifference <= 8;
  });
  cachedClasses = [activeClass, nextClass];
  cachedClassesMinute = minute;
  return cachedClasses;
}

let infoShown = false;
function draw() {
  infoShown = false;
  const now = new Date();
  const nowStr = require("locale").time(now, 1).trim();
  if (classDataDay != now.getDay()) {
    classDataDay = now.getDay();
    classData = JSON.parse(
      require("Storage").open(`classes-${classDataDay}.json`, "r").readLine() ||
        "[]"
    );
    // classData = [];
    // classData = [
    //   {
    //     name: "Math",
    //     room: "117",
    //     start: ((Math.floor(now.getTime() / 60000) - offset) % (60 * 24)) + 4,
    //     end: ((Math.floor(now.getTime() / 60000) - offset) % (60 * 24)) + 4,
    //   },
    // ];
  }
  const currentMinute = Math.floor(now.getTime() / 60000) - offset;
  const minuteOfDay = currentMinute % (60 * 24);
  const classes = getClasses(minuteOfDay, classData);

  if (classes[0]) {
    const remainingMins = classes[0].end - minuteOfDay;
    bigCountdown(remainingMins, nowStr);
    if (remainingMins == 1) {
      Bangle.buzz(500);
      countDown();
    }
  } else {
    if (classes[1]) {
      const remainingTime = classes[1].start - minuteOfDay;

      g.setColor(0.25, 0, 0).setFont("4x5", 5).setFontAlign(0, 1).clear();
      if (remainingTime == 1) {
        g.fillPoly([88, 88, 88, 0, 176, 0, 176, 176, 0, 176, 0, 60]);
      } else if (remainingTime == 2) {
        g.fillPoly([88, 88, 88, 0, 176, 0, 176, 176, 24, 176]);
      } else if (remainingTime == 3) {
        g.fillPoly([88, 88, 88, 0, 176, 0, 176, 176, 152, 176]);
      } else if (remainingTime == 4) {
        g.fillPoly([88, 88, 88, 0, 176, 0, 176, 60]);
      }

      g.setColor(1, 1, 1)
        .drawString(classes[1].name.toUpperCase(), 176 / 2, 176 / 2 - 5)
        .setFontAlign(0, -1)
        .drawString(classes[1].room.toUpperCase(), 176 / 2, 176 / 2 + 5)
        .setFont("InterNumeric")
        .drawString(nowStr, 176 / 2, 176 - 30);
    } else {
      bigTime(nowStr.split(":")[0], nowStr.split(":")[1]);
    }
  }
  if (currentTimeout) clearTimeout(currentTimeout);
  currentTimeout = setTimeout(draw, 60000 - (Date.now() % 60000));
}
function drawInfo() {
  infoShown = true;
  const now = new Date();
  const monthName = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ][now.getMonth()];
  const dayOfMonth = now.getDate().toString();
  const battery = E.getBattery();
  const datestamp =
    now.getFullYear() +
    "-" +
    (now.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    now.getDate().toString().padStart(2, "0");
  const weatherData = JSON.parse(
    require("Storage").open("weather.json", "r").readLine() || "[]"
  );
  const currentWeather = weatherData.find((weather) => weather[0] == datestamp);
  g.clear()
    .setColor(1, 1, 1)
    .fillRect(0, 0, 176, 16)
    .setColor(0.5, 1, 0.5)
    .fillRect(0, 0, 176 * (battery / 100), 16)
    .setColor(0, 0, 0)
    .setFont("4x5", 3)
    .setFontAlign(0, -1)
    .drawString(battery, 176 / 2, 1);
  g.setFont("4x5", 6)
    .setFontAlign(-1, -1)
    .setColor(1, 1, 1)
    .drawString(`${monthName} ${dayOfMonth}`, 0, 20);
  if (currentWeather) {
    const low = Math.round(currentWeather[2]);
    const high = Math.round(currentWeather[3]);
    let y = 60;
    g.setFont("4x5", 3).drawString(`${low} TO ${high}.`, 0, y);
    for (const line of g.wrapString(currentWeather[1].toUpperCase(), 176)) {
      y += 18;
      g.drawString(line, 0, y);
    }
  }
}
Bangle.on("swipe", (x, y) => {
  if (x != 0) return;
  if (infoShown) draw();
  else drawInfo();
});
Bangle.setUI("clock");
Bangle.loadWidgets();
require("widget_utils").hide();
draw();
