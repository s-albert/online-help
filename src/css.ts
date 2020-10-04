import * as vscode from 'vscode';

const cssKeywords: string[] = [
  ':active',
  'additive-symbols',
  '::after',
  'align-content',
  // align-items
  // align-self
  // all
  // <an-plus-b>
  // <angle>
  // animation
  // animation-delay
  // animation-direction
  // animation-duration
  // animation-fill-mode
  // animation-iteration-count
  // animation-name
  // animation-play-state
  // animation-timing-function
  // @annotation
  // annotation()
  // attr()
  // ::backdrop
  // backface-visibility
  // background
  // background-attachment
  // background-blend-mode
  // background-clip
  // background-color
  // background-image
  // background-origin
  // background-position
  // background-repeat
  // background-size
  // <basic-shape>
  // ::before (:before)
  // <blend-mode>
  // block-size
  // blur()
  // border
  // border-block
  // border-block-color
  // border-block-end
  // border-block-end-color
  // border-block-end-style
  // border-block-end-width
  // border-block-start
  // border-block-start-color
  // border-block-start-style
  // border-block-start-width
  // border-block-style
  // border-block-width
  // border-bottom
  // border-bottom-color
  // border-bottom-left-radius
  // border-bottom-right-radius
  // border-bottom-style
  // border-bottom-width
  // border-collapse
  // border-color
  // border-end-end-radius
  // border-end-start-radius
  // border-image
  // border-image-outset
  // border-image-repeat
  // border-image-slice
  // border-image-source
  // border-image-width
  // border-inline
  // border-inline-color
  // border-inline-end
  // border-inline-end-color
  // border-inline-end-style
  // border-inline-end-width
  // border-inline-start
  // border-inline-start-color
  // border-inline-start-style
  // border-inline-start-width
  // border-inline-style
  // border-inline-width
  // border-left
  // border-left-color
  // border-left-style
  // border-left-width
  // border-radius
  // border-right
  // border-right-color
  // border-right-style
  // border-right-width
  // border-spacing
  // border-start-end-radius
  // border-start-start-radius
  // border-style
  // border-top
  // border-top-color
  // border-top-left-radius
  // border-top-right-radius
  // border-top-style
  // border-top-width
  // border-width
  // bottom
  // @bottom-center
  // box-decoration-break
  // box-shadow
  // box-sizing
  // break-after
  // break-before
  // break-inside
  // brightness()
  // calc()
  // caption-side
  // caret-color
  // ch
  // @character-variant
  // character-variant()
  // @charset
  // :checked
  // circle()
  // clamp()
  // clear
  // clip
  // clip-path
  // cm
  // <color>
  // color
  // color-adjust
  // column-count
  // column-fill
  // column-gap
  // column-rule
  // column-rule-color
  // column-rule-style
  // column-rule-width
  // column-span
  // column-width
  // columns
  // conic-gradient()
  // content
  // contrast()
  // <counter>
  // counter-increment
  // counter-reset
  // @counter-style
  // cross-fade()
  // cubic-bezier()
  // ::cue
  // cursor
  // <custom-ident>
  // :default
  // deg
  // :dir
  // direction
  // :disabled
  // display
  // <display-box>
  // <display-inside>
  // <display-internal>
  // <display-legacy>
  // <display-listitem>
  // <display-outside>
  // dpcm
  // dpi
  // dppx
  // drop-shadow()
  // element()
  // ellipse()
  // em
  // :empty
  // empty-cells
  // :enabled
  // env()
  // ex
  // fallback (@counter-style)
  // filter
  // <filter-function>
  // :first
  // :first-child
  // ::first-letter (:first-letter)
  // ::first-line (:first-line)
  // :first-of-type
  // fit-content()
  // <flex>
  // flex
  // flex-basis
  // flex-direction
  // flex-flow
  // flex-grow
  // flex-shrink
  // flex-wrap
  // float
  // :focus
  // font
  // @font-face
  // font-family
  // font-family (@font-face)
  // font-feature-settings
  // font-feature-settings (@font-face)
  // @font-feature-values
  // font-kerning
  // font-language-override
  // font-optical-sizing
  // font-size
  // font-size-adjust
  // font-stretch
  // font-stretch (@font-face)
  // font-style
  // font-style (@font-face)
  // font-synthesis
  // font-variant
  // font-variant (@font-face)
  // font-variant-alternates
  // font-variant-caps
  // font-variant-east-asian
  // font-variant-ligatures
  // font-variant-numeric
  // font-variant-position
  // font-variation-settings (@font-face)
  // font-weight
  // font-weight (@font-face)
  // format()
  // fr
  // frames()
  // <frequency>
  // :fullscreen
  // gap
  // grad
  // <gradient>
  // grayscale()
  // grid
  // grid-area
  // grid-auto-columns
  // grid-auto-flow
  // grid-auto-rows
  // grid-column
  // grid-column-end
  // grid-column-start
  // grid-row
  // grid-row-end
  // grid-row-start
  // grid-template
  // grid-template-areas
  // grid-template-columns
  // grid-template-rows
  // Hz
  // hanging-punctuation
  // height
  // height (@viewport)
  // @historical-forms
  // :hover
  // hsl()
  // hsla()
  // hue-rotate()
  // hyphens
  // <ident>
  // <image>
  // image()
  // image-orientation
  // image-rendering
  // image-set()
  // @import
  // in
  // :in-range
  // :indeterminate
  // inherit
  // initial
  // inline-size
  // inset
  // inset()
  // inset-block
  // inset-block-end
  // inset-block-start
  // inset-inline
  // inset-inline-end
  // inset-inline-start
  // <integer>
  // :invalid
  // invert()
  // isolation
  // justify-content
  // justify-items
  // justify-self
  // kHz
  // @keyframes
  // :lang
  // :last-child
  // :last-of-type
  // leader()
  // :left
  // left
  // @left-bottom
  // <length>
  // letter-spacing
  // line-break
  // line-height
  // linear-gradient()
  // :link
  // list-style
  // list-style-image
  // list-style-position
  // list-style-type
  // local()
  // margin
  // margin-block
  // margin-block-end
  // margin-block-start
  // margin-bottom
  // margin-inline
  // margin-inline-end
  // margin-inline-start
  // margin-left
  // margin-right
  // margin-top
  // mask
  // mask-clip
  // mask-composite
  // mask-image
  // mask-mode
  // mask-origin
  // mask-position
  // mask-repeat
  // mask-size
  // mask-type
  // matrix()
  // matrix3d()
  // max()
  // max-height
  // max-height (@viewport)
  // max-width
  // max-width (@viewport)
  // max-zoom (@viewport)
  // @media
  // min()
  // min-block-size
  // min-height
  // min-height (@viewport)
  // min-inline-size
  // min-width
  // min-width (@viewport)
  // min-zoom (@viewport)
  // minmax()
  // mix-blend-mode
  // mm
  // ms
  // @namespace
  // negative (@counter-style)
  // :not
  // :nth-child
  // :nth-last-child
  // :nth-last-of-type
  // :nth-of-type
  // <number>
  // object-fit
  // object-position
  // :only-child
  // :only-of-type
  // opacity
  // opacity()
  // :optional
  // order
  // orientation (@viewport)
  // @ornaments
  // ornaments()
  // orphans
  // :out-of-range
  // outline
  // outline-color
  // outline-offset
  // outline-style
  // outline-width
  // overflow
  // overflow-wrap
  // overflow-x
  // overflow-y
  // pad (@counter-style)
  // padding
  // padding-block
  // padding-block-end
  // padding-block-start
  // padding-bottom
  // padding-inline
  // padding-inline-end
  // padding-inline-start
  // padding-left
  // padding-right
  // padding-top
  // @page
  // page-break-after
  // page-break-before
  // page-break-inside
  // pc
  // <percentage>
  // perspective
  // perspective()
  // perspective-origin
  // place-content
  // place-items
  // ::placeholder
  // pointer-events
  // polygon()
  // <position>
  // position
  // prefix (@counter-style)
  // pt
  // px
  // Q
  // quotes
  // rad
  // radial-gradient()
  // range (@counter-style)
  // <ratio>
  // :read-only
  // :read-write
  // rect()
  // rem
  // repeat()
  // repeating-linear-gradient()
  // repeating-radial-gradient()
  // :required
  // resize
  // <resolution>
  // revert
  // rgb()
  // rgba()
  // :right
  // right
  // @right-bottom
  // :root
  // rotate
  // rotate()
  // rotate3d()
  // rotateX()
  // rotateY()
  // rotateZ()
  // row-gap
  // s
  // saturate()
  // scale
  // scale()
  // scale3d()
  // scaleX()
  // scaleY()
  // scaleZ()
  // :scope
  // scroll-behavior
  // scroll-margin
  // scroll-margin-block
  // scroll-margin-block-end
  // scroll-margin-block-start
  // scroll-margin-bottom
  // scroll-margin-inline
  // scroll-margin-inline-end
  // scroll-margin-inline-start
  // scroll-margin-left
  // scroll-margin-right
  // scroll-margin-top
  // scroll-padding
  // scroll-padding-block
  // scroll-padding-block-end
  // scroll-padding-block-start
  // scroll-padding-bottom
  // scroll-padding-inline
  // scroll-padding-inline-end
  // scroll-padding-inline-start
  // scroll-padding-left
  // scroll-padding-right
  // scroll-padding-top
  // scroll-snap-align
  // scroll-snap-stop
  // scroll-snap-type
  // scrollbar-color
  // scrollbar-width
  // ::selection
  // sepia()
  // <shape>
  // shape-image-threshold
  // shape-margin
  // shape-outside
  // skew()
  // skewX()
  // skewY()
  // ::slotted
  // speak-as (@counter-style)
  // src (@font-face)
  // steps()
  // <string>
  // @styleset
  // styleset()
  // @stylistic
  // stylistic()
  // suffix (@counter-style)
  // @supports
  // @swash
  // swash()
  // symbols (@counter-style)
  // symbols()
  // system (@counter-style)
  // tab-size
  // table-layout
  // :target
  // target-counter()
  // target-counters()
  // target-text()
  // text-align
  // text-align-last
  // text-combine-upright
  // text-decoration
  // text-decoration-color
  // text-decoration-line
  // text-decoration-style
  // text-emphasis
  // text-emphasis-color
  // text-emphasis-position
  // text-emphasis-style
  // text-indent
  // text-justify
  // text-orientation
  // text-overflow
  // text-rendering
  // text-shadow
  // text-transform
  // text-underline-position
  // <time>
  // <timing-function>
  // top
  // @top-center
  // touch-action
  // transform
  // transform-box
  // <transform-function>
  // transform-origin
  // transform-style
  // transition
  // transition-delay
  // transition-duration
  // transition-property
  // transition-timing-function
  // translate
  // translate()
  // translate3d()
  // translateX()
  // translateY()
  // translateZ()
  // turn
  // unicode-bidi
  // unicode-range (@font-face)
  // unset
  // <url>
  // url()
  // user-zoom (@viewport)
  // :valid
  // var()
  // vertical-align
  // vh
  // @viewport
  // visibility
  // :visited
  // vmax
  // vmin
  // vw
  // white-space
  // widows
  // width
  // width (@viewport)
  // will-change
  // word-break
  // word-spacing
  // word-wrap
  // writing-mode
  // x
  // z-index
  // zoom (@viewport)
];

export class Css {
  static openLink(): boolean {
    if (vscode.workspace.getConfiguration().get('online-help.enableCss', true)) {
      const activeTextEditor = vscode.window.activeTextEditor;
      if (activeTextEditor && activeTextEditor.document.languageId === 'css') {
        const selection = activeTextEditor.selection;
        if (selection && !selection.isEmpty) {
          const text = activeTextEditor.document.getText(selection).trim();
          if (cssKeywords.indexOf(text) >= -1) {
            const keyword = text.toLowerCase();
            vscode.env.openExternal(vscode.Uri.parse(`https://developer.mozilla.org/de/docs/Web/CSS/${keyword}`));
            return true;
          } else {
            return false;
          }
        }
      }
    } else {
      return false;
    }
  }
}
