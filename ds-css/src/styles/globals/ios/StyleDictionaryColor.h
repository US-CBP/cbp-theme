
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Tue, 28 Jul 2020 20:26:50 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBaseGrayLightest,
ColorBaseGrayLighter,
ColorBaseGrayLight,
ColorBaseGrayBase,
ColorBaseGrayDark,
ColorBaseGrayDarker,
ColorBaseGrayDarkest,
ColorBaseRed,
ColorBaseGreen,
ColorPrimaryBlueLighter,
ColorPrimaryBlueLight,
ColorPrimaryBlueBase,
ColorPrimaryBlueDark,
ColorPrimaryBlueDarker,
ColorSecondaryMintLighter,
ColorSecondaryMintLight,
ColorSecondaryMintBase,
ColorSecondaryMintDark,
ColorSecondaryMintDarker
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
