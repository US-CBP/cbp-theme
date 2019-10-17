# Style Linting Process

## Introduction

Style Linting is basically a method to bug/error test styling code like CSS, SCSS, SASS, etc..

## Method

For this build, we are leveraging tools like 'stylelint' and 'stylelint-config-recommended', which work well within Webpack4 and allow for customization.

## List of Rules

Here we have our style linting rules grouped by three different categories:

 1. Possible errors
 
 Please see below for a detailed list of all rules included in this category.

 2. Limit language features

 See the Stylelint user-guide rules.md page for all rules included in this category. 
 [Rules.md] ( https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md#limit-language-features) 

 3. Stylistic issues

  See the Stylelint user-guide rules.md page for all rules included in this category. 
 [Rules.md] ( https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md#stylistic-issues) 

### Possible Errors

All rules within this category are turned on when extending the 'stylelint-config-recommended' tool.  Using it as a foundation for our configuration.

 #### Color

```"color-no-invalid-hex":  true,```
- Disallows invalid hex colors
      
#### Font family

```"font-family-no-duplicate-names": true,```
- Disallow duplicate font family names
```"font-family-no-missing-generic-family-keyword": true,```
- Disallows missing generic families in lists of font family names

 #### Function

 ```"function-calc-no-invalid": true,```
 - Disallows an invalid expression within calc functions
 ```"function-calc-no-unspaced-operator": true,```
 - Disallows an unspaced operator within calc functions
 ```"function-linear-gradient-no-nonstandard-direction": true,```
 - Disallows direction values in linear-gradient() calls that are not valid according to the standard syntax

 #### String
 ```"string-no-newline": true,```
 - Disallows (unescaped) newlines in strings

 #### Unit
 ```"unit-no-unknown": true,```
 - Disallows unknown units

 #### Property
 ```"property-no-unknown": true,```
 - Disallows unknown properties

 #### Keyframe declaration
 ```"keyframe-declaration-no-important": true,```
 - Disallows !important within keyframe declarations

 #### Declaration block
 ```"declaration-block-no-duplicate-properties": true,```
 - Disallows duplicate properties within declaration blocks
 ```"declaration-block-no-shorthand-property-overrides": true,```
 - Disallows shorthand properties that override related longhand properties

 #### Block
 ```"block-no-empty": true,```
 - Disallows empty blocks

 #### Selector
 ```"selector-pseudo-class-no-unknown": true,```
 - Disallows unknown pseudo-class selectors
 ```"selector-pseudo-element-no-unknown": true,```
 - Disallows unknown pseudo-element selectors
 ```"selector-type-no-unknown": true,```
 - Disallows unknown type selectors

 #### Media feature
 ```"media-feature-name-no-unknown": true,```
 - Disallows unknown media feature names

 #### At-rule
 ```"at-rule-no-unknown": true,```
 - Disallows unknown at-rules

 #### Comment 
 ```"comment-no-empty" true,```
 - Disallows empty comments

 #### General / Sheet
 ```"no-descending-specificity": true,```
 - Disallows selectors of lower specificity from coming after overriding selectors of higher specificity
 ```"no-duplicate-at-import-rules": true,```
 - Disallows duplicate @import rules within a stylesheet
 ```"no-duplicate-selectors": true,```
 - Disallows duplicate selectors within a stylesheet
 ```"no-empty-source": true,```
 - Disallows empty sources
 ```"no-extra-semicolons": true,```
 - Disallow extra semicolons (Autofixable)
 ```"no-invalid-double-slash-comments": true,```
 - Disallows double-slash comments (//...) which are not supported by CSS


  

  