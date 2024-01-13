///<reference path="../../typescript/types/main.d.ts" />

const _clockFont = {
  0: require("heatshrink").decompress(
    atob(
      "rFYwUBqoAGqAQDioNHChYABgoUMqg+HFplACo5RIFQ0/////gsNFQQTBAAYsMFIgAD+AJBQBUDCgoAB4BCJIAIqGLQZCIKo5ZFQJEPCpJZBIQxWBIBBCDb4xWBChJCCLAyBJQopWRLAYVGKxRYDNwhsBChZYCNwlAKxhYCNwlAKxhYCCohsNNwxsONwYVEChpuCQgSCPQgtQQRyECCoSYPCoyCOTQoVVTB6aFCr3wJQ4VCYhPABJDGBCpMAGpAVKG4MAIQ4VCYg4VBUZHAirwIUoNQCpEFCpYKHCpYKJCv4KEPCYVhaBAV/QfTQWeLoVLgIVgUhIVKioVKoCOICoMABQ38gEACo8ACq1VCo4LBgE/BI9VCoILH4A1JCpXwIA4VMABH8gIVBR5AAIUYIVXaJAAIeAIVXYxAAIYgQVWTSCuDCqPwCoiaPTAaERQQYVCNx0ACoiEONgKCDNx5sFNx/ANggVCNxhWFNwZCKKw5uCIRRWHNwRCKgBWGIRhABKwxCDFhHAKw5CDFg4qBIBBCDFgweBIBAsECwg/BQJDIEBwIAFFRYsDAAoUMLIQAEQBIWKChA="
    )
  ),
  1: require("heatshrink").decompress(
    atob(
      "rFYwUBqoAfFIgmPoBAFFSYABioUMqAVUB4MP/4AC4EFChdUCoIUDCpxrBFQgVOFQwVNNYMDCqQqBn4VRNY4VNNY4VNFRAVLNZAVMNZAVLNZIVLNZIVLFRQVJNZQVKNZQVJNZYVJIAJrJCpKBBChQVJNZQVKNZQVgNhaDJK6iZBCqbFBLBbxJYqawNCpBYMCpBYMCpBYMCpJYLCpJYLCpJYD+YVQLAZEHCpRYB/gVSLAPACqRYBgAVSLAIVUoAVUqkECqYWBCv4V/Cv4V/Cv4V/Cv4V/Cv4V/Cv4V/CtsAAA8VCpVVCrwULIRBWLAB4A="
    )
  ),
  2: require("heatshrink").decompress(
    atob(
      "rFYwUBqoAIoEABZITJAAQjKChIWPqBUHgoVLNZIqNh//AAXwFhgUGCwZZJqgVBCgoABBIMVQBM/Co/8IRIqJFgRCHIAJVGLIqBIIBBCDLA1AgYUJIQRYGIBYAB4BYFKwJAKLBAVBChZYCNgwVMLAJuENhpuHoBsMNwQVENhpuCCoaCOCoSaDQRwVGqBsOTQIVZQR4VXbgdAQRwVGFaqZPColQgAsF/hJHCojFBFgsAUI6DEqoVBFgfwDgwVHIQIPD4AVOFgoVJ+AVFFggDBCpwsCgZ4BiBtH+EFCoqGCnkAoAVH4AVGZIUAgK2GCpQsCAALFHgEVCowsDfBAVJFgJWIeAgAHKxCYHFgpWH4AVKLAJWHQRBADKw5sKIARWHNhdQKxHwCpRWKNhRWKNhKXJKwJsJKwIqHKxZAJKxSXJKxaXLKxKXKKykAKxaXfAAItHIBQADFwqXJIAIADTYqXLAAZCFS5IVLKxJGGS5oVNChgVGqBANCv4V/Cv4V/Cun/Cq0VCv/ACokAAB4VDqgVQQYdVCqtACh0FCYQ"
    )
  ),
  3: require("heatshrink").decompress(
    atob(
      "rFYwUBqoAFoARFBw4AFqAoHgoUKqg/JioqMgf/AAXwIZgMBh4UDCwgsIFQIpECwpZIQAM/Co//IRIqJFgaBIFRP//hYHIAIUJIQRYGoBAKAAPALAyWHLAwVFKwIULLAStGCphYBKyQVCQghWNCpCtKQggVDNhwVHKxwVBYwdQCtRXBNp4VFTJwVETIKEOCotAFhwVFIQJvE4BfHCopCCB4X8AoIyGCo1QB4fwCpLbDIQZvCIAJIFAAMACopvCIQMAgLOHCo5CBgZWBgtACooJBCgpvDmACBK4wVJIQIADCop2BCo5vCAASvF4EBCo4sETAxgBCpB/HKwYVTKwKYGCphJBChAVJcQJsJCpJWBFaZXCNqZYBIRIVKbZIVLLIKaICpRCBCqnANxAVL+BuICsJuBCtKEBCqqaHqEAAASaICo9UCocPCp9ACoZFHCo4UECpLcFKogFCCpgUDh54BLYIVLCgiOBgoVMPwZ9C4BXNNISSDCqANE+CvKCoQiHFgLbKMZAAJCqqkBIIU/CvX8fgKZCSA4Vd+EBCoVQaQ4VNTR7aDWCMACoqENNgKYCTQRuN+CCDQgRCN4AVFNwJCMgCCDLAZCLIAJsDLAZCLIAJsELAYsJQIJAFLAYsJFQJAGIQb1HKoJAHFggWFH4JAIFggABLYQ+BFRQsEAAwqKQwYAGChYWIH5ThGFJYA="
    )
  ),
  4: require("heatshrink").decompress(
    atob(
      "rFYwUBqoAeoArGgoULqhCICpdQCpEVICQVOgf/AAoVMgEPCo3ANxRsBn4VSNgIUGCsRsICphsICppsHCpaCJCpZsJCpZsJCphsICpaCJCpRsKCpgUICpSCKCpSCKCpRsKCpZsJCpKCLCpJsLCpJsLCr6CLCpBsMCpQUKCpCCG+YVNNg3DCppsGCqqeGCoyCG/gVNNgwVPBwvwCpqCG4AVNNgwVNd48ACqf8CpEVQRYVNNg3wCpxsGCpqCHCpiCIiCDLNhArIgEBCpBsBCpMAIYKCICppsHCpRZBNgwLCDwpvFCowALCoYUQCv4V/Cv4V/Cv4V/CqE/CqdAgAAHCY4JBioVUqtVqAVRgIVBFhIVIIAIAIqgVIChQV/Ctz6BAA4VVChbNJCpgsHIBgAMA="
    )
  ),
  5: require("heatshrink").decompress(
    atob(
      "rFYwUBqoACoAULCIgACqgrNgoVFqAVNFgxAMCq8ACo0//4AK/gVGgAV/Cq4ULCudUCv4VtgYV/qAV/Cq8PCv4VGgAAHgIVEoAVkioVTFQoVPCgoVBn4VFZgaABgEFCpoFE+BBICon8WoxCHgAVFYgwsBQYoVFbRJYFCpv/4BYFCpxCBCqZCBLAiSFABIVWNwgVP4AVFK5puBQglAFhwVHdgyEICodUfQLdOWAgsBIZgVGN4JDNCoxDE4AaIYwpDDgYLBI5AVHIYUMCqJCCAAIEBRQwVHCga7BoAVNTQQABBQIVH4AVEqBSDgEFGIIVLKgYPBFwYVLH4SpCVwIVIK4Y/CVgIAB+CZNBo4cFCoztEAAYsBCgwVFEQ4AICogUPCoKXCFSH8CrJBQCoaZBCp/wgIVDaIwVNoDuCABnAgoVYqCEPYgSERQQIVDNx6YELCCCECoRYNNghuCLBhWGLARCL+BWFIQQsL4BWFIQaFJIAJWFIQZvJ4BAHIQZZHKoJAHbwYWGCgKBHFgoABLYQFCFRJZDAA4qKIYgAEQBAWLFJgARA="
    )
  ),
  6: require("heatshrink").decompress(
    atob(
      "rFYwUBqoAIoEABhQAIEwUVCiFUgE8gEFCqFQgH/FgIVQoED//wFiMAh///hvRgE////4BvPNgIUBFgRCONgQACN55sCAARvPNgRCEN5hWBNgQACN5pWFN55WFN55WFN4jDOIQxYJYYgAF4AVJNg5YDCpJsIIJhsINpbDHYwhWT4DyJqBWINgLbJoBWINlhWKYZRWKYahsJKxRsBKyZsKgBXJNhJWBAAJsRK4QsINhIWENiBvDTYxsKLQiGFCoIUKFgaCFNhJZFIQiCKWYqFEQRbfJNhhCECqaFBQSJYDNwQVSNwSYONwYVU+CECTB4VO/gIICoaYHgCiHTQYLHXgMAFgwVL4AVBO4wVEIBAABBQ4VKgtQCqbnBJg4KBeBBiKCpJ4LFb4KNQagVJYpIVLeIQVIMRKEBBI4VLIQIqHUhYAJCodACqsPCp/wgIVXqBkHCr3AgoVCYw4AIfYIVBqgVReAKwRTAIVEQh3wVwSaCNxyCDNyPACoxYNQQaEDLBhsFNwRYMNgpuCLBkAKwhYDIRRABKwhYDIRXAKwxCDQpMAKwxCDFhBrBKwxCDLI5VBIBBCDIYwHBIBAsEAAJpDAAKBGFg4AGChTfCAAxVG"
    )
  ),
  7: require("heatshrink").decompress(
    atob(
      "rFYwUBqtVqAWPioTBAANACp8FCoZCQH4VVqgVW/4AN/gVVgAV/Cv4V/Cv4V/Cv4VggIVT+AVFAA0DCpdVCo8PCo3AColACp8FCodQCo0/Co0ACogAFOhMAioVSVwgAHqCCHCplATBoVHQQ4VMQRCYFNg6YpQRQVVQSgVLgCYrQQ4VLqCYqQRCYjQQ6YLQQKYICpiYUQQ6YMoAVVTCiCJTESCICpVQTFaCHTFYVLQQKYqQRCYLoCYJCpaYUQSgVXIA6YLCq5tHTBYVBFg6YLTIIsHTBbbBFgyCBCpZCCFgiYMFhCCMFhAVPFgqYMFhCYMFhCCNFgyYOFgyYOFg0wQRwsGCqQsCQR4sFNiAAPA"
    )
  ),
  8: require("heatshrink").decompress(
    atob(
      "rFYwUBqoAFqARFgoOGAAtUFA8VCpdACo47HFQ0D/4AC4BDMFQIUECwYsKEQIUFAAJZKQAMPCo/wIRJABCg4sCIRBVHFgqBIn4VJ/hYHKwIUJIQRYGoBAKTgRYGoCBILBZWLLAZsGChZYCNwgVWNhhuCQglQCqqCMQgQVETBoVCWAgV7/gVFbRgVPgDNGCpj/BgAIGCpfwCoJgFCqqDM4EBoD6FCpsFqAVoBgIeICoYiHNo4VMV5EACorTGbY8AioVDqgNG+DEGCo45FAAxfBCgYABMowAGZoIVFaYwAGgAVGNwJCKKwKCELAZCK4BsFFZxsBFY1ATQxXNQZyZFV5zFGeI5CILAlQVxhCCColAKxiFCNwhWNLAYVL+AzGCoiCBBg4eHQgYVHagK3HCoiCGXoMABI4VCTA4VKTQQVHXgLOHCohNIMI4VV+AVg4EBoBhGCpiDICpbFJCpbxJCpZCBIAzFMABIVvqgVQZ4IVCaIwVeUQIVCqqmHCpIUCCqDkBCodAYw4VHgIVEQh3AColQNx0AVwQVDLBiCFTQRYMNgqECLBkAKwhuCIRZABCoxYBIRXAKwpYDQpQLBCgpCDFhAqBIAxCDLI5VBIA6FDIYwUCIBAsETwY+BAALYEFhIAGChSGDAApVJIY4/OIhAMIA=="
    )
  ),
  9: require("heatshrink").decompress(
    atob(
      "rFYwUBqoAFqARFgoOGAAtUFA8VCpY+IHY4/H/4ACIZoMBgYUDCwgqLCgoWDLJFAgE/Co/wLJI/HFgpAIh4VJFgJCGIAIUJ//8IQ5ALAAPAIQrXBIBRCIKwKBIIQrIECoIULQoQVEoBWMLARuEKxpYDCohWMLAaCEChpYCQgQVSNwVQNhxuCCrFAQRyECTQQVWTByaFVx4VkgC4HCoj+IgB3HCpXACoK5HCpQUBIREAitUBREFqAVTBSaOLCq5tHCqpXNCpKDKGxTFNCozbJMRfwCoMPCpNACoxCCBA38gIVCEIwAJ+AVYqB5HCpMFCqfACoTRICpyEHAA7wCWBIAHVwIVDQh7EDCoRuOTAaECIR3ACohuBIRqCDNwabNNghCDFhaCFIQYsLQQqFDgCGKQQpCECxSCFN4qdJgCCFLJpsHb5psIIQabINhBBDKxBsJQgTZJNhBWMNhJWKNhJWg4BWTNgLDKKxDZMNiYVBNiaYKYZRtJKxaZCIQxWLYoRCG+BWKLATGGNhZCDFgpsLIQZvENhiFDN4hsMIRBWNN45WNIQgsBKx5vFCoIUON4hsPN4psQN4hsQFghsQN4hWK"
    )
  ),
};
function clockFont(number, x, y) {
  g.drawImage(_clockFont[number], x - 44, y - 44);
}
Graphics.prototype.setFontinflate = function () {
  return this.setFontCustom(
    E.toString(
      require("heatshrink").decompress(
        atob(
          "AH4A/AAMD+AKIh/4BREf/gKIn/+BSn/BVQ2Jj4KKMRJ4KgfgaH4A/ADEOBRN+V5LQJh4KJv4KIgf/BREf/7mI///4AJGg4fJn//+AJGgIfBwBUH//8KhH/8BUI/50ID7x0/OixUID4JUHL4T/ID5IKBD5EAOhAABOg4A/ACTxBXg7mBAAK9GcwIABPwrmCAASUEYwIADVQgfDEIwJEZYgqFFghKDAAZOCGoo3ENQIAFOARAFIQl/BQxCCBI//wBLHJoQKKgYKI8BhHAAPwBRRsHNwQKVQQ6ECBSqYHBQ2AT4n+BQT3DNIQKD+DsFBQbgCBRbBCBQfABSggKGxRMKMRQ3DAoQKEV7gKKfkBbCAA3wBRPggYKJQ4QAG4AKJwCIDBQ9/BQ6eBTQ/+BQKEH/gKBNw7LCLA7sCJo7VCIQ4JCIQxACe4iXDBQYsFFQYhFD4hOFJQQAEMoJfCAH4ARPwgAEg7KCNY5/GRogKIYoOABQ6WBBQ6iCBQ7PCBQ6sBBREfBSjkCBQ5WBMRDuCBI0BBIKDHBQSZHNgX4Hga0CNgQFCHYXgBQpbCGIR3C+AkCAAWABQX4DwQAC8AbDAAvwBRP4BRP8RoQKR/wK/BQJiJBRX8TIQKHXQSOHWwoKEeIQAGbgLCFAAXAcQgAEfohAFBQMAFRAABLIoUDBYvwBIgA/AH4Akv4JIgbqCAAzmBaoYFBwDODZgc/CAcf//4ewgFCB4IECGAP//xACBQYqBAAIaD/glDAAI3BBQglBAAPAgIKEEoIKIBIRNBHYQKBB4QAB+AKEIAYKBAoQKBOIIAC/AKEJYYKBCAQKBJYYKGJYYGBBQR4BBIYKBEwXwJYgKFKAQAC/wKC8BWEBQnABRRhEBQJSCwBhEBQphEBQnAMIgKFBIgKE8YKJAAwKH+YKJ8IKJ4IKJwIKJTgQKG/wKJ/gKDRQoKK/AKJaYYKG8AKDYIvABQX8BQuABQbiFgAKI/wKEAYQFCBRP4BQf4gJWEBQkAJYgKFfIeABQYaBTQRABgAnCBQJjCIAIKFDQXgBQIyCAoQqDAAIyBBQUPDIIKEIwIAGHoIbDAAi3BBI8Ag5RCAA0BNgIA/AFUHBRN/X4YAFeASHBSQjWBcATmBWYcHewazBZIYKBXQTJBGAYbBDgTfBcwYKEAYK/DBQXAgIKFGIInBIoIKPEAXgIoQKG+AKKAYQKG/AKNMQIMBE4ZFC+BFBBQ5FCwAKC/gKC4AkB4BeCBQgDBNIf8UYIdBAYIuCBSX4UAX+BQS9CBUH8a4QKZwBTCBSPABRPhAwRMGAAaDCBQ4AC/yvCBSLFDBSTiBBTv4g4KUOIRcG+AKKSQRcG8AKJ4CzCGAJREBQLjBEoIKEwEAWAXwKIkAgAnC8BGEBQIcC4A7EBQIcCAgI7DAoIcBDQQ7DAoIGBB4QwCJYIsCAgQlEAAo3BGoQAGh5gBAH4AqmB3JbIQAGagQJGbYS0CAAi5CUg7PCaoS4FAAQKFZwQKHFQQABJooqCBQwqEfghVDBQ51BBRE/BRI1EBQg1FBQg1FTQhrEBQprEEApAFBQhAFBQgJFBQZAGBQZAGBQaBFUghLGBQZLD/glCBQRLD8A7CBQTiEBQRWF/gKFUQfwBQphDSgI2CMIoKEggKE+BxE4BsHDYQKJ+B3HAAP4BRP8BRTZGBRv+BX4KBMRIKK/iZJBRX4YAivFcwbFGgAGEKQP4bYMALAeAI4LOBfomAgAKCBIIAFBQP4BQ4rCBSQgB/gKSPwIgIBRR+BOwIAHMwQA/ADcEAgcHMYZ/BZgd/Agn//wEBgKlDAgLnDR4P/eIn/4D3FFQIABE4IFCBQLLBAAK3BAoQaBGoIABGQLyBXgQKKBIRNCBQXwJYZICDYXwKAQKG/AKKMIYKQ/gKFwAKDO4YKYMQX8RoYKF/wKGAwQKG4AKVHoX+F4XvBRODBROBBQR/CBQa9C8AKgZgQ2G+AVC/gKQa4YKDwC2FBQ3/XQYKGAAX4BRzjCBTHwBQYDCBQbQCBQ3gBQbfFBRT1DwB1Ceo2ARYQACCIYKGgAKCgDCCBQYRCgDRCZ4QKCAYMABQf8DgQKCPIf4DgQOBgBuD+AcCAYRYD4AGBj4DCJoYFBAAhCCEwQAFG4ImCAAosBBI4A/AEcDVoKOJ8AKGXQSZGcwiXHYoofFFgwfEeIQACbIY3Gj4KE/wqIIQoJF/+AOgQKJGopYEGopYEGowKDv4KG+BAIBQR2FPIhAHBQShEBQpLHR4QKKKw4KCKw4KCBI4KBZowxC/wKF8BdC/ytF4ARC/xsFwAKKHoQKGT4f+QQoKPKAX9FYwKC+BBGBQaGBBQ/gMQRpCBQ34HoQKD4CZFBSv8BQWABSjTGBRRQC/z0GBQT/H+C6B/EAn4KFPgPwBQ4zB4EAHQQAC8ASBYIIKFCQIACBRTfFagIACIoLqFBRrNCVwQKEcYSNCBQiPEOgIAEQgZhBAAhYDKwhCFBIo3DGowABTYKXBAA5VFAH4Ash6zGVYaTIYIKJJWhC1DBRWAA4uAgYKGdIPgBQTrEAwP4dgQKDAwQKHD4LzBh4KFv4GB/wKFI4QKHEwQKBEgQKCCAQKHn4KJBIQKGGoYKGGoZXBEoQKBGoYKERwIaCPAQKENYQKHBIf/+AKDIAivBBQZAEHoIKDIAgGBBQZAEdoIKCIAv+BQgUE/gKDIAvwBQZAF8AKDIAqJBWgZAFBRBABBRBABBRBABBRBABBRCpBBQ41CZYo1EBQ41CBQ5rBBRA1CBQw1DBQ34BQaWFMAQKHFQYKFFQkAYQgqEBQoqEBQoqEgEDFRAKEFQsAgKAGAAbsEBQ6rDAAjGBJQqPEJQpYDD5AA/ACcDOREAv6zGWoipDg/we4ghDDYaeB/4QCYwSaBv7VEeQQbBZQSgCEwXwcAYmCXQIbBewbhCGIQKFGIn8F4QKDEwYKEMYIKDHQRHCHgf/BQoxEBQnwBQmPBQgxEAAgKK/AKKGIgKP/gKKTAQKn/wKGwAKCYgTYEYIIKDU4TuBA4IKCCIIKDFAIKCAwIcB/AKmJAY2GIJX/wZiDK4h4ORxYKYYpb8VBRP4g4KZIwn4gYFDGAnwdwRnBBR/gW4QKBGAgKBZoJcBBQnABQg7EwDJCIwwKBGQQ7E/8AgAnCHYoKBDgQwFBQIRCAYIwDBQUfB4SECEoIAFGAQlBAApCBGoQAGj4fHAH4AfOgJpIYwKqDAAi2CSozXD+AKFdoYhGWoTSDVIgKDwAKEcIQ3HIAQKMMgoJDJopWDBQxWDAAP4BRl+MIoKCA4PABQ5pB8AKFQgJpB+CtBBQoZCBQxTC/iNEAwJICBQ3+GQQKK/wKGGQX+VwgKLE4YKO8AHB/gGCBQaHCBQ+AL4IKHZIX8cIQKG/w6DBQpFEBSn4IIoKIagvwNobJFBQZUDAAR/CAA/ABROABSkAHorTDBRP8BRP4gBpFMIYKJ4EARQpLDBRMAVYxADAAJAIBRHgBQShFIAQABWAQ1FAAKPFGoZ5GNYIACNwpgBAARYEUIIAED5A3FD4gsENQYAEn4pGAH4AlngDCjgJEUoKMBAYLbDRwTtBgamFaIIGBAYKcEV4IGBAYLnEfoIGBAYKoEv4GCBRQDB/7mGBRbpGAwYKQOYIKeGxxMKMQ4GDBRCOIUhS2DXQzMDaAzmDAYLmEfAb8GgF+AYU+BIgAp"
        )
      )
    ),
    46,
    atob("IiZJOERFSERJQklHIw=="),
    88 | 65536
  );
};
Graphics.prototype.setFont4x5Numeric = function () {
  this.setFontCustom(
    atob("CAZMA/H4PgvXoK1+DhPg7W4P1uCEPg/X4O1+BQA"),
    46,
    atob("AgQEAgQEBAQEBAQEAg"),
    5
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
  g.setFont("inflate")
    .setFontAlign(0, -1)
    .setColor(1, 1, 1)
    .clear()
    .drawString(remaining, 176 / 2, 20)
    .setFont("4x5Numeric", 5)
    .drawString(now, (176 + 5) / 2, 176 - 40);
}
function countDown() {
  const remainingTime = 60 - Math.floor((new Date().getTime() % 60000) / 1000);
  Bangle.setLCDPower(1);
  g.setFont("inflate")
    .setFontAlign(0, 0)
    .setColor(1, 1, 1)
    .clear()
    .drawString(remainingTime + 1, 176 / 2, 176 / 2);
  if (remainingTime > 1) setTimeout(countDown, 1000 - (Date.now() % 1000));
  else
    setTimeout(() => {
      g.setFont("inflate")
        .setFontAlign(0, 0)
        .setColor(1, 1, 1)
        .clear()
        .drawString("1", 176 / 2, 176 / 2);
    }, 1000 - (Date.now() % 1000));
}
function bigTime(h, m) {
  "jit";
  const hPad = h.toString().padStart(2, "0");

  g.setColor(83 / 255, 100 / 255, 1);
  g.clear();
  clockFont(hPad[0], 176 / 2 - 33, 176 / 2 - 39);

  g.setColor(1, 1, 1);
  clockFont(hPad[1], 176 / 2 + 33, 176 / 2 - 39);

  clockFont(m[0], 176 / 2 - 33, 176 / 2 + 39);

  g.setColor(83 / 255, 100 / 255, 1);
  clockFont(m[1], 176 / 2 + 33, 176 / 2 + 39);
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
    return timeDifference <= 5;
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
    // classData = [
    //   {
    //     name: "Math",
    //     room: "117",
    //     start: ((Math.floor(now.getTime() / 60000) - offset) % (60 * 24)) + 1,
    //     end: ((Math.floor(now.getTime() / 60000) - offset) % (60 * 24)) + 4,
    //   },
    // ];
    // classData = [];
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
      // 1. class name, 25 high
      // 2. padding, 10 high
      // 3. room, 25 high
      // 4. padding, 10 high
      // 5. countdown, 50 high
      // total; 120 high
      g.setColor(1, 1, 1)
        .setFont("4x5", 5)
        .setFontAlign(0, -1)
        .clear()
        .drawString(classes[1].name.toUpperCase(), 176 / 2 + 2, 28)
        .drawString(classes[1].room.toUpperCase(), 176 / 2 + 2, 63)
        .fillCircle(176 / 2, 123, 25)
        .setColor(0, 0, 0)
        .setFontAlign(0, 0)
        .setFont("4x5Numeric", 5)
        .drawString(classes[1].start - minuteOfDay, 176 / 2 + 2, 123);
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
Bangle.loadWidgets();
Bangle.setUI("clock");
require("widget_utils").hide();
draw();
