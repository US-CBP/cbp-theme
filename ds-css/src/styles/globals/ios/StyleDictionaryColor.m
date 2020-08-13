
//
// StyleDictionaryColor.m
//
// Do not edit directly
// Generated on Tue, 28 Jul 2020 20:26:50 GMT
//

#import "StyleDictionaryColor.h"


@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.945f green:0.953f blue:0.965f alpha:1.000f],
[UIColor colorWithRed:0.875f green:0.882f blue:0.886f alpha:1.000f],
[UIColor colorWithRed:0.663f green:0.682f blue:0.694f alpha:1.000f],
[UIColor colorWithRed:0.443f green:0.463f blue:0.478f alpha:1.000f],
[UIColor colorWithRed:0.337f green:0.361f blue:0.396f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.180f blue:0.184f alpha:1.000f],
[UIColor colorWithRed:0.110f green:0.114f blue:0.122f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:1.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.765f green:0.922f blue:0.980f alpha:1.000f],
[UIColor colorWithRed:0.349f green:0.725f blue:0.871f alpha:1.000f],
[UIColor colorWithRed:0.051f green:0.494f blue:0.635f alpha:1.000f],
[UIColor colorWithRed:0.027f green:0.392f blue:0.553f alpha:1.000f],
[UIColor colorWithRed:0.027f green:0.294f blue:0.412f alpha:1.000f],
[UIColor colorWithRed:0.494f green:0.984f blue:0.882f alpha:1.000f],
[UIColor colorWithRed:0.114f green:0.761f blue:0.682f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.518f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.059f green:0.392f blue:0.376f alpha:1.000f],
[UIColor colorWithRed:0.043f green:0.294f blue:0.247f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
