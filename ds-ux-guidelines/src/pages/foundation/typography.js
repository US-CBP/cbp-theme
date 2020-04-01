import React from "react"
import Layout from "../../ds-components/layout/layout"
import ContentHeader from "../../ds-components/content-header/contentHeader"
import SEO from "../../ds-components/seo"

const code =
`
  p {
    font-feature-settings: "liga";
    -webkit-font-feature-settings: "liga";
    -moz-font-feature-settings: "liga";
    text-rendering: optimizeLegibility;
  }
`


const TypographyPage = () => (
  <Layout>
    <SEO title="CBP Design System | Typography" />
    <ContentHeader title="Typography" contentType="foundation" />

    <article>
      <section>
        <h2 id="toTop" className="cbp-heading-2">
          Why is Typography important in the CBP Design System?
        </h2>

        <br />

        <p className="cbp-body">
          At CBP, all of our applications and websites serve a singular purpose,
          "communication." Strip away all of the images and user interface
          elements and what you’re left with is raw content. Having a well
          thought-out and managed typography system drives retention and
          understanding of information, and helps our users focus on the
          informed decisions that keep our country safe.
          <br />
          <br />
          This isn’t simply what typeface we would like to use, but also the
          hierarchy, treatments, spacial relationships, and other refinements
          which augment legibility. The typographic settings we create have
          consequences for every component and page we build. At its core, the
          CBP Design System values consistency, accessibility, and legibility
          above all other style considerations.
        </p>
      </section>

      <br />

      <section>
        <h2 className="cbp-heading-2">Nuggets of Knowledge</h2>
        <div className="content">
          <ul>
            <li>
              Roboto and Roboto Mono are the only fonts allowed for use in CBP
              products.
            </li>

            <li>
              Other Fonts in the Font Stack do not constitute a replacement for
              Roboto.
            </li>

            <li>The root value (rem) for CBP applications is 14px.</li>

            <li>
              There should only be <code>h1</code> element on the page and it
              should match the "title" listed in
              <code>head</code>.
            </li>

            <li>
              Typography classes ending in "light" are suggested for use on dark
              colored backgrounds.
            </li>

            <li>
              Typography classes ending in "dark" are suggested for use on light
              colored backgrounds.
            </li>

            <li>
              Headings should not skip levels and stay in descending order.
            </li>

            <li>
              Always use the proper semantic tags for typographic elements.
            </li>

            <li>
              Masthead classes are available as a substitution for{" "}
              <code>cbp-heading-1</code> in situations where you need something
              bigger, but still must have an
              <code>h1</code> tag.
            </li>

            <li>
              Do not use the <code>justified</code> alignment.
            </li>

            <li>Identical heading elements should be styled identically.</li>

            <li>
              Page content should be laid out and coded in logical reading
              order.
            </li>
          </ul>
        </div>
      </section>

      <br />

      <section>
        <h2 className="cbp-heading-2">Type Family</h2>

        <br />
        <br />

        <h3 className="cbp-heading-3">Roboto</h3>

        <br />

        {/* @TODO: Insert Image Here (Current one is a placeholder) */}
        <img
          style={{ maxHeight: "100px", width: "auto" }}
          src="https://imgs3.fontbrain.com/imgs/3e/1a/f3ef546b9e6ecef9f3ba197bf7d2/sa-720x400-333333@2x.png"
          alt="Roboto Typeface"
        ></img>

        <br />
        <br />

        <p className="cbp-body">
          The official typeface for CBP applications is <strong>Roboto</strong>.
          We use this font exclusively in our products. Other typefaces should
          not be used in CBP applications with the small exception of Roboto
          Mono in certain, specific contexts.
        </p>

        <br />
        <br />

        <p className="cbp-subhead-text">
          <em>
            See the Google&trade; Specifications for Roboto here:{" "}
            <a href="https://fonts.google.com/specimen/Roboto">
              https://fonts.google.com/specimen/Roboto
            </a>
          </em>
        </p>
        <p className="cbp-subhead-text">
          <em>
            See the Google&trade; Specifications for Roboto Mono here:{" "}
            <a href="https://fonts.google.com/specimen/Roboto+Mono">
              https://fonts.google.com/specimen/Roboto+Mono
            </a>
          </em>
        </p>
        <p className="cbp-subhead-text">
          <em>
            License information for Roboto (as of time of writing):{" "}
            <a href="http://www.apache.org/licenses/LICENSE-2.0">
              http://www.apache.org/licenses/LICENSE-2.0
            </a>
          </em>
        </p>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">
          Download Instructions + Installing on your machine
        </h3>

        <br />

        <div className="cbp-body">
          For our internal CBP customers we provide an enterprise CDN (content
          delivery network) mechanism for calling our font files. This allows
          our end users to easily cache these files and prevents the need to
          call them repetitively when loading the page. Please visit our
          internal Confluence site or contact the Common Framework Team to
          receive assistance with calling assets from our servers (sorry we
          can't put this link on the open web). Internal CBP applications should
          never be directly referencing the Google&trade; directory when calling
          font files.
          <br />
          <br />
          For local installation, please download the following folder of
          .ttf(truetype) formatted files and install them on your machine (you
          may require assistance from your IT dept. in some instances to install
          local files).
          <br />
          <br />
          {/* @TODO: Delete after content is received */}
          <strong style={{ color: "red" }}>
            [**Download link here**] [**special callout styling of some sort**]
          </strong>
          <br />
          <br />
          Because Google&trade; is constantly revising and improving these files
          you can visit the Google&trade; Fonts website to follow the
          instructions for downloading the most up-to-date font files. This will
          keep your local files up-to-date. We will periodically update the
          files hosted on our CDN and the folder above to make sure we are
          taking advantage of new efficiencies.
          <strong> Remember to download the complete font families.</strong>
          <br />
          <br />A note for CBP Design System users who are self-hosting font
          files. Please remember to only provide the .woff (IE 9+ compatibility)
          and .woff2 (all modern browsers) file types when hosting. Remove any
          reference to extraneous filetypes like .eot, .svg, etc. as this can
          affect how the font is rendered on the page
          <em> (we're looking at you .eot 0_0). </em>
          <br />
          <br />
          {/* @TODO: Delete after content is received */}
          <strong style={{ color: "red" }}>[**Note styling**]</strong>
          <br />
          <br />
          {/* @TODO: Insert Image Here (Current one is a placeholder) */}
          <figure>
            <img
              style={{ maxHeight: "200px", width: "auto" }}
              src="https://miro.medium.com/max/1606/0*QjPmbeDjpK4ywY7h.png"
              alt="browser compatibility chart for font types"
            ></img>
            <figcaption className="cbp-subhead-text">
              <strong>
                Typography and Browser Compatibility:{" "}
                <a href="https://blog.prototypr.io/typography-and-cross-browser-compatibility-fc1fa3b8fa9a">
                  source
                </a>
              </strong>
            </figcaption>
          </figure>
          <br />
          <br />
          <p className="cbp-subhead-text">
            <em>
              Roboto Family:{" "}
              <a href="https://fonts.google.com/specimen/Roboto?selection.family=Roboto">
                https://fonts.google.com/specimen/Roboto?selection.family=Roboto
              </a>
            </em>
          </p>
          <p className="cbp-subhead-text">
            <em>
              Roboto Mono Family:{" "}
              <a href="https://fonts.google.com/specimen/Roboto+Mono">
                https://fonts.google.com/specimen/Roboto+Mono
              </a>
            </em>
          </p>
        </div>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">Font Fallback Stack</h3>

        <br />

        <p className="cbp-body">
          The CBP Design System Fallback stack is ( font-family: roboto,
          calibri, tahoma, sans-serif; ). This stack exists to allow the browser
          to correct for scenarios where the Roboto font file doesn't load
          properly, encounters "FOUT" loading issues (explained in more detail
          in the Reference and Research section), or encounters a unicode symbol
          for which Roboto does not have a specification. &nbsp;
          <strong>
            This does not constitute an endorsement of using any other font in
            this stack as a replacement for Roboto.
          </strong>
        </p>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">Font Weights Included</h3>

        <br />

        <p className="cbp-body">
          For Roboto the following weights are included:
        </p>

        <br />

        <div className="wrapper">
          <div>
            <ul>
              <li className="cbp-masthead-2">Thin (100)</li>

              <li className="cbp-heading-1">Light (300)</li>

              <li className="cbp-heading-3">Regular (400)</li>
              <li className="cbp-heading-5">Medium (500)</li>
              <li className="cbp-heading-6">Bold (700)</li>
              <li className="cbp-heading-6" style={{ fontWeight: "900" }}>
                Black (900)
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="cbp-masthead-2">
                <em>Thin Italic (100 Italic)</em>
              </li>
              <li className="cbp-heading-1">
                <em>Light Italic (300 Italic)</em>
              </li>
              <li className="cbp-heading-3">
                <em>Regular Italic (400 Italic)</em>
              </li>

              <li className="cbp-heading-5">
                <em>Medium Italic (500 Italic)</em>
              </li>

              <li className="cbp-heading-6">
                <em>Bold Italic (700 Italic)</em>
              </li>

              <li className="cbp-heading-6" style={{ fontWeight: "900" }}>
                <em>Black Italic (900 Italic)</em>
              </li>
            </ul>
          </div>
        </div>

        <br />
        <br />

        <p className="cbp-body">
          For Roboto Mono the following weights are included:
        </p>

        <br />

        <div style={{ fontFamily: "Roboto Mono, monospace" }}>
          <ul>
            <li className="cbp-masthead-2">Thin (100)</li>

            <li className="cbp-heading-1">Light (300)</li>

            <li className="cbp-heading-3">Regular (400)</li>
            <li className="cbp-heading-5">Medium (500)</li>
            <li className="cbp-heading-6">Bold (700)</li>
            <li className="cbp-heading-6" style={{ fontWeight: "900" }}>
              Black (900)
            </li>
          </ul>
        </div>

        <br />

        <p className="cbp-body">
          <strong>Note: </strong>Roboto Mono should only be used in instances
          where having a standardized width in each character is paramount.
          These would include instances where you are lining up tabular figures
          like prices, serial numbers, or other examples where vertical
          alignment of figures is important.
        </p>

        <br />
        <br />

        {/* @TODO: Insert Image Here (Current one is a placeholder) */}
        <figure>
          <div className="img-frame" style={{ margin: "auto" }}>
            <img
              style={{ maxHeight: "120px", marginBottom: "1rem" }}
              src="https://i.ibb.co/QMDv9nK/Screen-Shot-2020-03-13-at-10-43-05-AM.png"
              alt="Roboto Font"
            ></img>
            <img
              style={{ maxHeight: "120px", marginBottom: "1rem" }}
              src="https://i.ibb.co/d6mSdJW/Screen-Shot-2020-03-13-at-10-43-18-AM.png"
              alt="Roboto Mono Font"
            ></img>

            <figcaption className="cbp-subhead-text">
              <strong>Roboto & Roboto Mono Font Comparison</strong>
            </figcaption>
          </div>
        </figure>
      </section>

      <br />
      <br />

      <section>
        <h2 className="cbp-heading-2">
          Modular Scale{" "}
          <a
            href="#toTop"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>
        </h2>

        <br />

        <p className="cbp-body">
          Modular scales bring order, harmony, and meaning to typography. They
          reinforce a visual cadence in text sizing that allows the reader to
          quickly understand information structure and improves legibility.
          Instead of simply increasing size by an even interval (+2px) between
          each step we apply a ratio (1.125). This creates more distinct
          typography classes and creates a clearly identifiable hierarchy.
          Because the vast majority of CBP applications are "productive" in
          nature (see Reference & Research section for more information) the CBP
          Design System utilizes a ratio on the lower end of the spectrum, Major
          Second (1.125).
        </p>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">Units of Measurement</h3>

        <br />

        <img
          src="https://www.elmastudio.de/wp-content/uploads/2012/07/css-rem-01.jpg"
          style={{ maxHeight: "200px", padding: "1rem" }}
          alt="Chart showing difference between REM and EM CSS values"
        ></img>

        <br />

        <p className="cbp-body">
          Our root base font size is 14px (CSS Pixels) and is set in the
          core.css file. All font classes sizes are expressed in "REM" values
          (Root EM - fun fact the EM in this instance refers to the width of the
          capital M in its font). Native device ecosystems like iOS and Android
          use different units of measurement for typography, we will continue to
          update documentation in the future.
        </p>

        <br />
        <br />

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [** according to their respective styles. explanatory language should
          be styled the same across the scale **]
        </strong>

        <br />
        <br />
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">Special Heading Classes</h3>

        <br />

        <p className="cbp-body">
          These are used when you have need to use a larger class of text than
          the normal heading classes can provide. If they would normally replace
          the page title in the content area they should be aligned to the h1
          semantic tag (see more in Reference & Research).
        </p>

        <div className="content">
          <ul>
            <li>
              Classes ending in "light" are suggested for use with lighter
              backgrounds, "dark" for use with darker colored backgrounds (see
              Reference & Research for more information).
            </li>
            <li>
              Font-Smoothing: anti-aliased should only be applied to "light"
              heading classes. (experiment with dark class that is universale
              instead two version of each type class)
            </li>
          </ul>
        </div>

        <br />

        <table className="table is-fullwidth">
          <caption
            style={{
              textAlign: "left",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            CBP Design System Type Scale- Special Heading Classes
          </caption>

          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Selector Name</th>
              <th scope="col">Size</th>
              <th scope="col">Font Weight</th>
              <th scope="col">Line Height</th>
              <th scope="col">Aliasing</th>
              <th scope="col">Letter Spacing</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="cbp-masthead-1">Masthead 1</td>
              <td>
                <code>.cbp-masthead-1</code>
              </td>
              <td>36px</td>
              <td>100</td>
              <td>44px</td>
              <td>TBD</td>
              <td>0.12 (TBD)</td>
            </tr>

            <tr>
              <td className="cbp-masthead-2">Masthead 2</td>
              <td>
                <code>.cbp-masthead-2</code>
              </td>
              <td>32px</td>
              <td>100</td>
              <td>40px</td>
              <td>TBD</td>
              <td>0.12 (TBD)</td>
            </tr>
          </tbody>
        </table>

        <br />
        <br />

        <h3 className="cbp-heading-3">Heading Classes</h3>

        <br />

        <p className="cbp-body">
          These are used in conjunction with semantic heading tags (ie. h1).
          Classes ending in "light" for lighter backgrounds, "dark" for darker
          colored backgrounds (see Reference & Research for more information).
        </p>

        <br />

        <table className="table is-fullwidth">
          <caption
            style={{
              textAlign: "left",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            CBP Design System Type Scale- Heading Classes
          </caption>

          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Selector Name</th>
              <th scope="col">Size</th>
              <th scope="col">Font Weight</th>
              <th scope="col">Line Height</th>
              <th scope="col">Aliasing</th>
              <th scope="col">Letter Spacing</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="cbp-heading-1">Heading 1</td>
              <td>
                <code>.cbp-heading-1</code>
              </td>
              <td>28px</td>
              <td>300</td>
              <td>40px</td>
              <td>TBD</td>
              <td>0.12 (TBD)</td>
            </tr>

            <tr>
              <td className="cbp-heading-2">Heading 2</td>
              <td>
                <code>.cbp-heading-2</code>
              </td>
              <td>25px</td>
              <td>400</td>
              <td>32px</td>
              <td>TBD</td>
              <td>0.12 (TBD)</td>
            </tr>

            <tr>
              <td className="cbp-heading-3">Heading 3</td>
              <td>
                <code>.cbp-heading-3</code>
              </td>
              <td>22px</td>
              <td>400</td>
              <td>28px</td>
              <td>TBD</td>
              <td>0.12 (TBD)</td>
            </tr>

            <tr>
              <td className="cbp-heading-4">Heading 4</td>
              <td>
                <code>.cbp-heading-2</code>
              </td>
              <td>20px</td>
              <td>500</td>
              <td>28px</td>
              <td>TBD</td>
              <td>0.12 (TBD)</td>
            </tr>

            <tr>
              <td className="cbp-heading-5">Heading 5</td>
              <td>
                <code>.cbp-heading-5</code>
              </td>
              <td>20px</td>
              <td>500</td>
              <td>24px</td>
              <td>TBD</td>
              <td>0.12 (TBD)</td>
            </tr>

            <tr>
              <td className="cbp-heading-6">Heading 6</td>
              <td>
                <code>.cbp-heading-6</code>
              </td>
              <td>16px</td>
              <td>700</td>
              <td>20px</td>
              <td>TBD</td>
              <td>0.12 (TBD)</td>
            </tr>
          </tbody>
        </table>

        <br />
        <br />

        <h3 className="cbp-heading-3">Body Copy Classes</h3>

        <br />

        <p className="cbp-body">
          These are the default text classes for paragraphs of text and are
          directly linked to the semantic "p" tag. Classes ending in "light" for
          lighter backgrounds, "dark" for darker colored backgrounds (see
          Reference & Research for more information).
        </p>

        <br />

        <table className="table is-fullwidth">
          <caption
            style={{
              textAlign: "left",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            CBP Design System Type Scale- Body Copy Classes
          </caption>

          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Selector Name</th>
              <th scope="col">Size</th>
              <th scope="col">Font Weight</th>
              <th scope="col">Line Height</th>
              <th scope="col">Aliasing</th>
              <th scope="col">Letter Spacing</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="cbp-body">Body (p)</td>
              <td>
                <code>.cbp-body</code>
              </td>
              <td>14px</td>
              <td>400</td>
              <td>20px</td>
              <td>TBD</td>
              <td>0.12 (TBD)</td>
            </tr>
          </tbody>
        </table>

        <br />
        <br />

        <h3 className="cbp-heading-3">Supporting Text Classes</h3>

        <br />

        <p className="cbp-body">
          These are text classes with special functions. Each supporting class
          may have a different semantic tag associated with it. This section may
          grow over time to accommodate special text classes that are added.
        </p>

        <br />

        <table className="table is-fullwidth">
          <caption
            style={{
              textAlign: "left",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            CBP Design System Type Scale- Supporting Text Classes
          </caption>

          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Selector Name</th>
              <th scope="col">Size</th>
              <th scope="col">Font Weight</th>
              <th scope="col">Line Height</th>
              <th scope="col">Aliasing</th>
              <th scope="col">Letter Spacing</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="cbp-button-text">Button Text</td>
              <td>
                <code>.cbp-button-text</code>
              </td>
              <td>14px</td>
              <td>500</td>
              <td>normal</td>
              <td>TBD</td>
              <td>0.12 (TBD)</td>
            </tr>

            <tr>
              <td className="cbp-subhead-text">Subhead</td>
              <td>
                <code>.cbp-subhead-text</code>
              </td>
              <td>12px</td>
              <td>500</td>
              <td>20px</td>
              <td>TBD</td>
              <td>0.12 (TBD)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">OpenType Features</h3>

        <br />

        <p className="cbp-body">
          Does Roboto support Opentype features? Unfortunately no. Roboto is not
          currently available in an Opentype format. When and if this changes,
          we will adjust the guidance here.
        </p>
      </section>

      <br />
      <br />

      <section>
        <h2 className="cbp-heading-2">
          Where we came from.
          <a
            href="#toTop"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>
        </h2>

        <br />

        <p className="cbp-body">
          When the original CBP Theme 1.X was created there was a conscious
          choice to use a widely accepted typeface in selecting Roboto from
          GoogleTM Fonts. It is well-tested, even if not fully featured. The
          type scale is mostly consistent with one noticeable blip when moving
          from Heading 2 to Heading 1. There were also some great strides in
          improving performance removing extraneous file types and moving the
          font files to a CDN to allow caching in later iterations. While this
          was a great start there are some significant issues however. There is
          little to no variability in font weight (light, regular, bold) in the
          different heading levels, and with the combined even and small step
          difference between headings, hierarchy can be difficult to
          distinguish. There some noticeable oversights in not optimizing line
          height, line length, and other micro-typography settings to enhance
          legibility.
          <br />
          <br />
          The existing type-scale follows a more traditional diatonic format
          (think Microsoft word or email editors), which normally moves up the
          scale in a “step-like fashion”. Starting with adding 1px between
          steps, then 2px, and so forth. Always with even steps. Ours has some
          noticeable differences at the ends of the scale. +3 at the beginning
          and +6 at the top create a disturbance in that natural progression.
        </p>

        <br />

        <p className="cbp-subhead-text">
          <em>
            Theme 1.x is located here:
            <a href="https://us-cbp.github.io/cbp-style-guide/docs/index.html">
              {" "}
              https://us-cbp.github.io/cbp-style-guide/docs/index.html.
            </a>
          </em>
        </p>
      </section>

      <br />

      <section>
        <h2 className="cbp-heading-2">
          Building a Bridge to the CBP Design System.
          <a
            href="#toTop"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>
        </h2>

        <br />

        <p className="cbp-body">
          It is a certainty that there will be a length of time where both the
          CBP Theme 1.X and the CBP Design System will be in use across the
          enterprise concurrently. In order to create some synergy between them,
          and not create a visual schism between different applications until
          they can update to the Design System, we have made design decisions to
          make this transition as smooth as possible while bringing more modern
          techniques into the fold. The proposed typography changes, while
          having a lot in common with the CBP Theme 1.X, will be a significant
          move forward for the enterprise and constitute a system-breaking
          change. This was a big part of the decision we made to create a new
          Design System rather than continue to iterate in place.
        </p>
      </section>

      <br />

      <section>
        <h2 className="cbp-heading-2">
          Roboto. If it ain't broke, don't fix it.
          <a
            href="#toTop"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>
        </h2>

        <br />

        <p className="cbp-body">
          Roboto has proven to work well with our systems provided the
          application utilizing it follows guidelines. To provide a bridge to
          the CBP Theme 1.X we will continue to utilize the Roboto font family.
          What needs revision as part of the design system is what weights,
          sizing, and other previously overlooked settings will need to be
          prescribed in order to make an efficient, hierarchical system. Near
          the end of the theme 1.X life cycle we introduced the Roboto Mono
          weight for tabulation, eliminated superfluous type files, and moved
          our font files to a CDN solution. To maintain consistency for our IE
          users we will continue to offer the .woff file type, but will focus on
          the .woff2 as it is widely accepted in modern browsers.
        </p>
      </section>

      <br />

      <section>
        <h2 className="cbp-heading-2">
          Crafting a balanced system.
          <a
            href="#toTop"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>
        </h2>

        <br />
        <br />

        <img
          src="https://betterwebtype.com/assets/img/triangle/triangle-paragraph-explained.jpg"
          style={{ maxHeight: "200px", position: "static", right: "60px" }}
        ></img>

        <br />
        <br />

        <p className="cbp-body">
          In his book, "A Better Web Typography", Matej Latin proposes that for
          optimal legibility, the “holy trinity” of font size, line-height, and
          line length all need to be in “balance.” If any of the 3 have too much
          dominance then your users may have issues reading any text over 2 or 3
          lines. This where the issues of modular scale, vertical rhythm, and
          horizontal rhythm all connect.
        </p>

        <br />

        <p className="cbp-subhead-text">
          <em>
            Matej Latin's "A Better Web Typography":{" "}
            <a href="https://betterwebtype.com/">https://betterwebtype.com/</a>
          </em>
        </p>

        <br />

        <p className="cbp-subhead-text">
          <em>
            *CBP does not officially endorse this product. It simply played a
            role in the background research conducted.
          </em>
        </p>
      </section>

      <br />

      <section>
        <h2 className="cbp-heading-2">
          A modular approach.
          <a
            href="#toTop"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>
        </h2>

        <br />

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**image of diatonic scale + musical scale**]
        </strong>

        <br />
        <br />

        <p className="cbp-body">
          Modular scales are expressed as ratios between one step and the next.
          This fixes the relationship between levels of typographical hierarchy
          and its adjacent steps up and down creating distinctive appearances
          between levels that are not next to each other. This aids our users in
          understanding content structure better than fixing that hierarchical
          relation to an even interval like diatonic systems. We see these types
          of relationships throughout nature but for the sake of this argument
          are more closely linked to the types of scales you might find in sheet
          music.
        </p>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">Productive vs. Expressive</h3>

        <br />

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**image of expressive vs. productive sites**]
        </strong>

        <br />
        <br />

        <p className="cbp-body">
          This particular concept has a lot to do with whether or not your type
          system adapts to the function of the page it is living on. In dense
          applications you want a smaller type scale and settings that reflect
          the hierarchy needed to make that flow work (productive). In more
          informationa l sites like blogs a larger ratio exists between type
          steps (Expressive).
          <br />
          <br />
          In productive sites the relationship between elements on a page
          becomes a lot more important because it impacts the intended
          work-flow. Therefore having wild gaps in type steps may cause too
          great a disruption when re-flowing the page between breakpoints and
          across devices.
          <br />
          <br />
          In expressive sites the pages usually have a lot more text content and
          may rely more heavily on size relationships to create hierarchy and
          pull special emphasis to certain type areas. Having smaller text
          across the board in an editorial style site can actually hurt
          legibility because the hierarchy may not be immediately discernible.
          <br />
          <br />
          In a system that may need to exist across these boundaries do we
          maintain two different sets of type scales and special type classes
          for each side of the coin? Or do we maintain a consistent set of
          standards regardless of site purpose? Usually the simplest answer is
          best. For now we present a single set of typographic choices with a
          the addition of two "Masthead" type classes to help account for the
          instances in which we need larger typographic choices.
        </p>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">Choosing a scale.</h3>
        <br />
        <p className="cbp-body">
          There are 8 main scales that typographic systems employ. These range
          from 1.067 (Minor Second) through 1.618 (the Golden Ratio). Three of
          these systems are suitable for use in productive systems like CBP
          develops. The rest have much more severe changes between hierarchical
          levels and are only really suitable for expressive type systems. This
          limits are selection to testing on Minor Second (ratio of 1.067),
          Major Second (ratio of 1.125), and Minor Third (ratio of 1.2).
        </p>
        <br />
        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**image of scale comparisons**]
        </strong>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">Choosing a base font size.</h3>
        <br />

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**image of arms length comparisons maybe**]
        </strong>

        <br />
        <br />

        <p className="cbp-body">
          There have been a lot of studies in recent years about what the
          optimal base copy size should be. Most browsers and the big names in
          tech like Google&trade; pretty much unanimously decreed 16px as the
          best body copy size (for mobile). This is all relative to the distance
          from the viewport to your eyes. Much like how the "standard" size for
          body copy in books is around 12pt. That choice is related to the
          average distance a book is legible by a person with average eyesight
          at arm's length. This same principle applies to products like
          billboards which must be legible at a great distance and often at high
          speeds. In this case this means that text must be much bigger by
          comparison in order to remain legible.
          <br />
          <br />
          In an enterprise like CBP where the number of devices a digital
          product can appear on continues to grow beyond traditional desktop
          computers into mobile devices, wearables, and large wall- mounted
          displays we have to craft a system that remains legible in different
          sorts of scenarios.
          <br />
          <br />
          Is the industry standard 16px right for our needs? In the case of
          these studies they want to remain relevant in a world that is
          increasingly mobile-first so the recommendation of 16px is directly
          related to viewing content on mobile handheld devices and the
          distances generally associated with holding them. But these studies
          are also more centered on expressive type applications and sites.
          Productive systems (which are the vast majority of CBP systems) are
          much more space- conscious, and much more sensitive to wild swings in
          responsive behavior when reflowing content up and down the viewport
          width range.
          <br />
          <br />
          This gives a little flexibility when choosing a base font size that
          fits our particular needs as an enterprise. During our initial
          research, we tested a range of base font sizes from 13px (the CBP
          Theme 1.X base font size), through the industry standard 16px to see
          how this might affect a typical application design. Remember we want
          to build bridges to systems that were originally built with the CBP
          Theme. What we found was that our old 13px system just didn't hold up
          legibility wise, and 15px and 16px size effectively broke layouts and
          did not reduce as well on smaller breakpoints. That made our decision
          easy because only 1 option was left, 14px. A fitting compromise since
          it's not that far off from the existing 13px setting and gets us
          closer to the industry standard 16px. See below for some of our
          experimentation.
          <br />
          <br />
          {/* @TODO: Delete after content is received */}
          <strong style={{ color: "red" }}>
            [**type scale experiments with individual notes**]
          </strong>
        </p>
        <br />
      </section>

      <section>
        <h5 className="cbp-heading-5">CBP Theme existing Base: 13px</h5>
        <br />
        <p className="cbp-body">
          Obviously this base value is included because it is the current base
          value in the CBP Theme. Because we want to craft a bridge to existing
          users of the CBP Theme we want to explore whether this base value with
          a scale is viable in the new design system.
          <br />
          <br />
          <strong> 1.067 Minor Second Scale: </strong> The scale here just
          doesn’t work. There’s not enough variation in sizing between headers
          for this to be effective.
          <br />
          <br />
          <strong> 1.125 Major Second Scale: </strong> This scale is a little
          better but still too small. The upper end of the scale <code>h1</code>{" "}
          is too large of a delta from the existing theme. (4px)
          <br />
          <br />
          <strong> 1.200 Minor Third Scale: </strong> Whoa. What a difference a
          move up the scale makes. This blows past our upper part of the scale.
          This also doesn’t work for our productive scale.
          <br />
          <br />
          <em>
            {" "}
            <strong> Conclusion: This base value won’t work. </strong>
          </em>
        </p>
      </section>

      <br />

      <section>
        <h5 className="cbp-heading-5">
          Adjusting the base ever so slightly: 14px
        </h5>
        <br />
        <p className="cbp-body">
          13px seemed to be a bust overall. Applying a scale to it just didn’t
          end up with a similar enough set of endpoints to keep the system in
          working order.
          <br />
          <br />
          <strong> 1.067 Minor Second Scale: </strong> This won’t work. Too
          small.
          <br />
          <br />
          <strong> 1.125 Major Second Scale: </strong> This one might be a
          contender. You lose 2px on the upper end of scale (<code>h1</code>).
          But this aligns pretty closely with what’s in the scale already.
          <br />
          <br />
          <strong> 1.200 Minor Third Scale: </strong> Oops. This just won’t work
          for productive sites. But might work for our expressive scale if major
          second works out as our productive scale.
          <br />
          <br />
          <em>
            {" "}
            <strong>
              {" "}
              Conclusion: Major Second with 14px base is a something to evaluate
              more closely for our productive scale. If it works then minor
              third may be a good option for our expressive scale as well
              matched pair.
            </strong>
          </em>
        </p>
      </section>

      <br />

      <section>
        <h5 className="cbp-heading-5">
          Getting closer to the industry default: 15px
        </h5>
        <br />
        <p className="cbp-body">
          Fun fact, the original version of the CBP Theme had 15px as its base
          value before it was changed to 13px to accommodate extra application
          density.
          <br />
          <br />
          <strong> 1.067 Minor Second Scale: </strong> This won’t work. Too
          small. Still.
          <br />
          <br />
          <strong> 1.125 Major Second Scale: </strong> This scale perfectly
          aligns with our <code>h1</code> from the CBP Theme, but there is the
          trade off of having the base value 2px larger. Still this warrants
          further exploration.
          <br />
          <br />
          <strong> 1.200 Minor Third Scale: </strong> Not gonna work for our
          productive scale obviously, but there may be some value for it to be
          used for expressive sites.
          <br />
          <br />
          <em>
            {" "}
            <strong>
              {" "}
              Conclusion: Major Second with 15px base is a something to evaluate
              more closely for our productive scale. If it works then minor
              third may be a good option for our expressive scale as well
              matched pair.
            </strong>
          </em>
        </p>
      </section>

      <br />

      <section>
        <h5 className="cbp-heading-5">Industry Default: 16px</h5>
        <br />
        <p className="cbp-body">
          This base value is included because it’s basically the default for
          most browsers and most design systems. And for good reason. There is a
          lot of research out there that says this is the optimal base value for
          legibility. But those studies are also biased towards enterprise
          systems that are more expressive.
          <br />
          <br />
          <strong> 1.067 Minor Second Scale: </strong> This won’t work. Too
          small. Shrug.
          <br />
          <br />
          <strong> 1.125 Major Second Scale: </strong> The upper end of this
          scale is within tolerances of our existing theme, but 16px body is
          just too large for our client’s systems to accommodate.
          <br />
          <br />
          <strong> 1.200 Minor Third Scale: </strong> Not gonna work for our
          productive scale obviously, but there may be some value for it to be
          used for expressive sites.
          <br />
          <br />
          <em>
            {" "}
            <strong> Conclusion: This base value won’t work.</strong>
          </em>
        </p>
      </section>

      <br />

      <section>
        <h5 className="cbp-heading-5">
          <strong>The stronger candidate: 14px - 1.125 (Major Second)</strong>
        </h5>
        <br />
        <p className="cbp-body">
          Because we need buy in from development teams, the less disruption we
          bring in the more likely we will be successful. While the 15px scale
          flowed better, the nature of the applications we create would
          inevitably clash with the system we create. Therefore the system with
          the highest probability of success has to be the 14px/major second
          scale. It forms a bridge to our predecessor theme and has a much more
          economical use of space that will not impede the current design trends
          across our suite of applications.
        </p>
      </section>

      <br />

      <section>
        <h2 className="cbp-heading-2">Vertical Rhythm</h2>
        <br />
        <p className="cbp-body">
          Human beings operate on identifying patterns. The "Principle of
          Repetition" brings familiarity to different items in a layout. It
          gives the layout structure. When we mix this with typography we
          enhance overall legibility because the user’s eye is allowed to flow
          smoothly, it is not interrupted by unexpected and jarring
          relationships between items in the layout.
          <br />
          <br />
          This is mostly manifested in what is referred to as the “Baseline
          Grid.” This grid is different from the various other terms referred to
          as grid in web design in that it specifically refers to a set of
          “invisible” lines that go down the page to which all layout elements
          are aligned. Because communication of information is at the heart of
          all websites and applications, this grid is tightly tied to our
          typography settings. Specifically to the line-height of body copy
          (because it is the base unit in our typographical system).
          <br />
          <br />
          To get started, we first need to figure out what our line-height will
          be for our body copy. Earlier we established that our body copy will
          be 14px. It’s a good industry standard practice to use a 4px baseline
          grid meaning all spacing will be a multiple or factor of 4 (almost all
          device viewport widths are in multiples of 4 for some reason). 20px
          for the Body Copy line-height seems to be a good fit. This is legible
          and gives a good starting point for our spacing system (for more
          information on the spacing system please see its section under
          foundations).
          <br />
          <br />
          {/* @TODO: Delete after content is received */}
          <strong style={{ color: "red" }}>
            [**The Baseline Grid image line height body copy + good rhythm bad
            rhythm image**]
          </strong>
        </p>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">Line Height Exploration</h3>
        <br />
        <p className="cbp-body">
          Line-height in digital design is the space which one line of text
          occupies. In print design this line goes from the line of which
          lower-case letters rest to the baseline of the next line of text. In
          digital design however, this line falls directly between lines of
          text. Earlier we arrived at a line- height of 20px for our body copy.
          Now we need to set line-height values for our other type classes.
          <br />
          <br />
          Headings should rarely have many lines of text (if you do then you
          should reconsider this copy). So in order to keep them from appearing
          as if they are drifting apart with their increased size, you need to
          decrease line height to around 1-1.2 times font size (it’s subjective
          we will have evaluate two values for each heading optically). A
          heading of 24px would result in line height of 24-29. We have also
          established our 4px baseline grid so we know that our line-height
          values will have to be rounded up the nearest multiple of 4. In this
          case 24px or 32px.
          <br />
          <br />
          {/* @TODO: Delete after content is received */}
          <strong style={{ color: "red" }}>
            [**image of heading table and differences in line height
            understanding between web and print instances**]
            <br />
            <br />
            [**images for line height exploration**]
          </strong>
        </p>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">
          How spacing affects hierarchy in typography.
        </h3>
        <br />
        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**image showing bad vs good spacing relationships**]
        </strong>

        <br />
        <br />

        <p className="cbp-bpdy">
          The “Law of Proximity” states that when objects are close to each
          other they tend to be perceived together as part of a group. Applying
          the RIGHT spacing value between different elements is important
          because it creates, or breaks a contextual bond. The closer they are
          together the more likely they are interrelated, and conversely the
          further they are apart the less they are connected.
          <br />
          <br />
          With this in mind, we need to create a hierarchy that is able to
          communicate a few things with our typography. Show that one text box
          is a child of another (ie a header and its supporting paragraph).
          Communicate that two text boxes are siblings of each other (two
          headers of equal weight but are placed together sometimes to form a
          sort of list). And also so that the user can tell that two text boxes
          are not immediately related to each other like the spacing between a
          preceding paragraph and the header of the next section. This does not
          replace line height within the text box.
        </p>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">Text Spacing Hierarchy</h3>
        <br />
        <p className="cbp-body">
          While line height sets the vertical relationship between lines of text
          within the same text box, between text blocks spacing should be set
          using the CBP Design System's spacing variables. See the Spacing,
          Grid, Layout section of foundations for more information.
        </p>
        <div className="content">
          <ol>
            <li>
              <strong>Parent Header- </strong>The highest level of text in the
              hierarchy (usually <code>h1</code>) The spacing value usually
              usually will grow the larger the text is in relation to its
              subordinate text.
            </li>
            <li>
              <strong>Supporting Header- </strong> In this example an{" "}
              <code>h2</code> which supports the <code>h1</code> text block.
            </li>
            <li>
              <strong>Space Between Text sections- </strong>This normally the
              spacing between the preceding paragraph and the subsequent header
              section.
            </li>
            <li>
              <strong>Sibling Header- </strong>in order to keep a more close
              relationship from one header to another that directly follow each
              other
            </li>
            <li>
              <strong>Supporting Paragraph Text</strong>
            </li>
          </ol>
        </div>

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>[**image of text hierarchy**]</strong>
      </section>

      <br />

      <section>
        <h2 className="cbp-heading-2">Horizontal Rhythm</h2>
        <br />
        <p className="cbp-body">
          While vertical rhythm techniques focus on hierarchy, horizontal rhythm
          is all about legibility. How far apart is each individua l character
          is from its neighbors, line length, and alignment all impact user
          retention of information.
  </p>

        <br />
        <br />

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>[**Image Here (maybe)**]</strong>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">Line Length</h3>
        <br />
        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**image of line length good and bad**]
  </strong>

        <br />
        <br />

        <p className="cbp-body">
          When it comes to large blocks of text there have been several studies
          showing that people definitely have a limit to how wide a block of
          text should be. It's partly to do with how our eyes work mechanically,
          but also just how we scan content. There have been many studies on
          this subject where a general rule of between 45-85 characters fits the
          typical users needs. Any longer and it can be tiring on our eyes. Any
          shorter and reading comprehension can suffer because sentences no
          longer flow naturally. If lines are too long, readers tend to
          accidentally read the same length multiple times (also known as
          "doubling"). Essentially this has to do with our body copy classes as
          this should be the only instances where we are dealing with long
          blocks of text and multiple paragraphs. Headings should be limited in
          length by their very nature.
  </p>

        <br />

        <p className="cbp-body">
          We can control control line length in two ways; the container width
          and the max-width property. When we think of responsive layouts, text
          boxes are aligned to a number of grid columns. In a situation where a
          block of paragraph text is in the context of a large screen, assigning
          col-12 (essentially full screen) would not be a great idea. The line
          length would just be too long. Choosing a smaller amount of columns
          like 4 or 5 would be much more reasonable and would result in a much
          better measure. When the viewport gets to a smaller form factor like
          phones, the text box should be 4-col (full screen) by default as
          anything less would just be too short and would result in the user not
          having a great experience. For our body copy classes we have built in
          a safety mechanism with assigning a max-width of 75em. Why em? Because
          line length essentially has nothing to do with our root settings and
          everything to do with the exact type class we're working with.
  </p>

        <br />

        <p className="cbp-subhead-text">
          <em>
            Learn more about the CBP Design System's grid settings under the
      Spacing, grid, layout section in foundations.{" "}
            <strong style={{ color: "red" }}>[**link**]</strong>
          </em>
        </p>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">
          Columns, Paragraphs, and Logical Reading Order
  </h3>
        <br />
        <br />

        <h4 className="cbp-heading-4">Logical Reading Order</h4>
        <br />

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**image of what logical reading order / maybe eye F patterns**]
  </strong>

        <br />
        <br />

        <p className="cbp-body">
          People naturally read content in a certain pattern in western
          civilizations. We start at the top-left of the page and read
          left-to-right down the page. When designing your layouts keep in mind
          how your user’s eyes will flow down the page and consume your content.
          When considering when and if to break large amounts of text up into
          columns you should keep in mind that your layouts don’t exist in a
          static viewport size. Pages essentially can scroll infinitely.
    <br />
          <br />
          We recommend you go through each of the major breakpoints (see more in
          the Spacing, Grid, and Layout section of foundations) and address the
          following questions:
  </p>

        <div className="content">
          <ul>
            <li>
              Would it be frustrating for the user read a single long column of
              text and have to scroll a long ways back up the page to get to the
              next relevant area of the page?
      </li>
            <li>Does the order of your content make sense?</li>
            <li>Are you keeping line length principles in mind?</li>
          </ul>
        </div>

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**image of logical reading order**]
  </strong>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">Letter Spacing</h3>
        <br />

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**image explaining why this is important**]
  </strong>

        <br />
        <br />

        <p className="cbp-body">
          The spaces between the letters are just as important as the words
          themselves. While reading, the spacing betweenindividual letters (aka
          kerning) and words is super important. If the kerning is too tight,
          letters may overlap and generally legibility is hindered. Too far
          apart and words start to blend together. The Font-kerning property
          applies certain amounts of space between individual character
          combinations. For example, when capital V and A are next to each
          other. In general we keep this property set to “normal” which means it
          applies tighter kerning at larger sizes and not on smaller sizes, but
          they also don’t have a consensus about where these boundaries are
          across browsers. In general we try to control these settings with the
          letter-spacing property. Letter- spacing (also known as tracking)
          applies space between characters uniformly. For body copy we keep this
          set to normal, as this will allow ligatures to appear. As the sizing
          of our heading classes grows however, negative letter-spacing may be
          added to keep characters from drifting from each other.
  </p>
      </section>

      <br />

      <section>
        <h3 className="cbp-heading-3">Alignment</h3>
        <br />

        <p className="cbp-body">
          Alignment refers to which vertical axis type is aligned to. Alignment
          allows a user’s eye to have a reference to return to as they finish
          each line of text. In general there are 4 alignment types.
  </p>
      </section>

      <br />

      <section>
        <h4 className="cbp-heading-4">Left-Aligned (Rag Right)</h4>'
  <br />
        <p className="cbp-body">
          This is pretty standard stuff. Fits how western style cultures read.
          The vast majority of what we do should feature this style alignment.
  </p>
        <br />
        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**example of left aligned text**]
  </strong>
      </section>

      <br />

      <section>
        <h4 className="cbp-heading-4">Center Aligned</h4>
        <br />
        <p className="cbp-body">
          This should have very limited applications. Should be a special use
          case.
  </p>
        <br />
        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**example of center aligned text**]
  </strong>
      </section>

      <br />

      <section>
        <h4 className="cbp-heading-4">Right Aligned (Rag Left)</h4>
        <br />
        <p className="cbp-body">
          This should probably be avoided if not only used in a very special use
          case.
  </p>
        <br />
        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**example of right aligned text**]
  </strong>
      </section>

      <br />

      <section>
        <h4 className="cbp-heading-4">Justified (DO NOT USE)</h4>
        <br />
        <p className="cbp-body">
          Oh dear. Just never, ever do this. On top of looking awful, it is very
          inaccessible. Justified text can be difficult to read for people with
    certain disabilities like dyslexia. <br />
          <strong>DO NOT USE JUSTIFIED.</strong>
        </p>
        <br />
        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**example of justified text**]
  </strong>
      </section>

      <br />

      {/*PERFORMANCE*/}
      <section>
        <h2 className="cbp-heading-2">
          Performance
    <a
            href="#toTop"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>
        </h2>
        <br />
        <p className="cbp-body">
          Application load times are an important consideration for CBP. While
          we may not have to worry about things like customer conversion rates
          (when users just get tired of waiting for the page to load and
          bounce), we do have to worry about how poor optimization leads to
          latency in how CBP conducts business. Not to mention how this
          frustrates our users trying to do their jobs. To learn more about our
          approach to performance, please see the Performance section of
          foundations.
  </p>
      </section>

      <br />

      <section>
        <section>
          <h3 className="cbp-heading-3">File Type Support & Self Hosting</h3>
          <br />
          <p className="cbp-body">
            One "lesson learned" from our previous effort with the CBP Theme, is
            that in not centrally hosting our font files, we often forced the
            page to have to load multiple copies of the same asset. One widget
            referenced a copy of the font files, the page referenced it, then
            maybe another asset did again. This would pile on and cause our apps
            to suffer. This is not to mention that we effectively forced our
            development teams to self-host a copy. For our internal CBP
            development teams we host centralized copies of our font files so
            everything can be accessed once and allow our users to be able to
            properly cache these files.
    </p>

          <br />

          <p className="cbp-body">
            We support two font file types. The .woff filetype is provided to
            give compatibility with some older versions of browsers (at some
            point in the future this may be retired). The .woff2 filetype is
            what modern browsers use. All other filetypes are not supported or
            endorsed for use with the CBP Design System. For those who are
            self-hosting be especially wary of the .eot filetype. It is somewhat
            sticky with users who for whatever reason are still using Internet
            Explorer, if it is mentioned in the stylesheet or is simply present
            for it to reference the browser will use it. Eot files have
            notoriously poor aliasing rules and will appear fuzzy and will tend
            to fill in negative spaces in certain characters. For the sake of
            legibility avoid this file type.
    </p>
        </section>

        <br />

        <section>
          <h4 className="cbp-heading-4">File Types Provided</h4>

          <br />
          <br />

          <h5 className="cbp-heading-5">TTF - TrueType Files (provided)</h5>
          <br />
          <p className="cbp-body">
            This is a traditional desktop font file-type. We will provide these
            to developers for local development purposes. Each weight is housed
            in a separate file. Holds up to 210 characters per file.
    </p>

          <br />
          <br />

          <h5 className="cbp-heading-5">
            OTF - OpenType Files (not available for Roboto)
    </h5>
          <br />
          <p className="cbp-body">
            This is the new hotness when it comes to desktop standard fonts. All
            characters are hosted inside of a single file. Holds up to 65,536
            characters. Extensive language and feature support. Sadly Roboto is
            not yet available in this format.
    </p>

          <br />
          <br />

          <h5 className="cbp-heading-5">
            WOFF - Web Open Font Format v1 (provided)
    </h5>
          <br />
          <p className="cbp-body">
            This is basically the same thing as the TTF or OTF file types but
            allows for compression and optimized for use in browsers. We will
            include this file as part of the system because it allows support
            for deprecated browsers.
    </p>

          <br />
          <br />

          <h5 className="cbp-heading-5">
            WOFF2 - Web Open Font Format v2 (provided)
    </h5>
          <br />
          <p className="cbp-body">
            This is WOFF v1 but with 30% better compression. This is the new
            standard going forward and will be included with the system. The
            inclusion of WOFF v1 is basically an IE tax and will at some point
            be deprecated.
    </p>
        </section>
      </section>

      <br />

      <section>
        <h4 className="cbp-heading-4">Text Loading</h4>
        <br />
        <p className="cbp-body">
          There are few different approaches to handling the loading of text.
          When it comes to loading the specific font asset, ie Roboto, there are
          few different philosophies. We prefer the FOUT method. The reason is
          because with centrally hosting these font assets and the fact that
          most of our users with have them cached we really only have to worry
          about the content itself loading not the font. When it comes to
          content we prefer our applications to use skeleton states and
          progressive loading techniques.
  </p>

        <br />
        <br />

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>[**Insert Image of FOUT**]</strong>

        <br />
        <br />

        <h5 className="cbp-heading-5">FOUT: Flash of Unstyled Text.</h5>
        <br />
        <p className="cbp-body">
          Basically in the period between when a user hits a page and when the
          font file kicks in and renders. Sometimes this can be very noticeable
          and a jarring experience for users depending on how long this
          experience is. With modern caching abilities, tweaking the load order
          of file, as well as taking a comprehensive approach to loading
          (skeleton states, progressive loading, etc) this can be mitigated or
          eliminated.
  </p>

        <br />
        <br />

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>[**Insert Image of FOIT**]</strong>

        <br />
        <br />

        <h5 className="cbp-heading-5">FOIT: Flash of Invisible Text</h5>
        <br />
        <p className="cbp-body">
          This is an approach to dealing with FOUT by telling the browser not to
          display text at all until the font file is rendered. The issue is if
          for any reason the font file doesn’t load, the text will NEVER load.
          This runs antithetical to having fall-back fonts. Probably an approach
          to be avoided.
  </p>

        <br />
        <br />

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>[**Insert Image of FOFT**]</strong>

        <br />
        <br />

        <h5 className="cbp-heading-5">FOFT: Flash of Faux Text</h5>
        <br />
        <p className="cbp-body">
          This refers to loading fonts in a particular sequence. Starting with
          Body text, then headings, etc. Until they load a web safe font like
          Georgia is rendered. This messes with the default browser settings and
          has been known to at times to crash browsers. Best to just take a
          better approach to page loading and deal with FOUT.
  </p>

        <br />
        <br />

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**Insert Image of Progressive Loading**]
  </strong>

        <br />
        <br />

        <h5 className="cbp-heading-5">Progressive Loading</h5>
        <br />
        <p className="cbp-body">
          Instead of waiting to render the page until the whole thing loads. Go
          one by one down the page, or segment and prioritize elements above the
          fold.
  </p>

        <br />
        <br />

        {/* @TODO: Delete after content is received */}
        <strong style={{ color: "red" }}>
          [**Insert Image of Skeleton UI**]
  </strong>

        <br />
        <br />

        <h5 className="cbp-heading-5">Skeleton UI</h5>
        <br />
        <p className="cbp-body">
          This is where a dummy placeholder box is placed to let the user know
          that content is being loaded but is taking longer than anticipated.
  </p>
      </section>

      <br />

      <section>
        <section>
          <h2 className="cbp-heading-2">Micro-Typography</h2>
          <br />
          <p className="cbp-body">
            As people tend to say, “the devil is in the details.” The following
            topics may come across as trivial to some, but when careful thought
            is given to these subjects, we can create much better designed
            experiences for our users.
    </p>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">Ligatures</h3>
          <br />
          {/* @TODO: Delete after content is received */}
          <strong style={{ color: "red" }}>
            [**image examples of ligatures**]
    </strong>

          <br />

          <p className="cbp-body">
            Ligatures began in the illuminated manuscripts days. By connecting
            certain common letter combinations together this helped those monks
            save time in copying their books. These letter combinations were
            also tricky for them because they would often run into each other
            causing legibility issues. By standardizing how these letters could
            run together they ended up saving time and improving overall
            legibility by keeping horizontal rhythm consistent. Common ligatures
            are ones like ff, fi, fl, ffi, ffl, and th. Enabled by default on
            most browsers on smaller text sizes (this is defined differently by
            each browser unfortunately).
      <code>Text-rendering: optimizeLegibility;</code>
            will enable ligatures and kerning but can add to load time (we
            believe this is negligible. If you set letter spacing at all in your
            text though, ligatures will be stripped out (this is why body copy
            is set to normal). Ligatures aren’t as necessary for headings
            because there shouldn't be long blocks of text.
      <br />
            <br />
            Discretionary ligatures are non standard and don’t significantly
            contribute to legibility, but offer a more stylistic approach. ch,
            ck , ct, st. Avoid using these.
      <br />
            <br />
            Contextual ligatures come with script style typefaces to help
            combine letters to make the appearance of a single pen stroke. We
            don’t use script style so these should also be avoided.
      <br />
            <br />
            Enabling common ligatures across browsers: this class is found in
            the CBP DS Core CSS file.
      <br />
            <br />
            <br />
            <div className="code-snippet">
              <h5 className="cbp-heading-5">Ligature Code</h5>
              <br />
              <pre>
                <code className="language-css">
                  { code }
                  {/* {`p {`}
                  <br />
                  &emsp;&emsp;{`font-feature-settings: "liga";`}
                  <br />
                  &emsp;&emsp;{`-webkit-font-feature-settings: "liga";`}
                  <br />
                  &emsp;&emsp;{'-moz-font-feature-settings: "liga";'}
                  <br />
                  &emsp;&emsp;{"text-rendering: optimizeLegibility;"}
                  <br />
                  {"}"} */}
                </code>
                </pre>
            </div>
          </p>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">Small Caps</h3>
          <br />
          <p className="cbp-body">
            Small caps are smaller versions of capital letters so that they
            merge better inside of body text. These are great for acronyms and
            abbreviations. REGULAR ALL CAPS text inside of a block of text can
            cause disruption to overall horizontal rhythm as well as give the
            user a false indication that this text might be interactive.
      <br />
            <br />
            "Fake small caps" (created by css) which just reduce the font size
            (including stroke width) is not a good solution because it
            interrupts flow. If your font does not have genuine small caps
            included, do not turn on this feature.
      <br />
            <br />
            This results in the need for a special type class for small caps.
            This class should be applied to acronyms and abbreviations (whether
      or not it has periods between letters) by enclosing the text in a{" "}
            <code>&lt;span></code> (if inside of a larger block of text) and
      applying the following class (<code>.small-cap</code>). This class
            is found in the CBP DS Core CSS file.
    </p>

          <br />
          <br />
          {/* @TODO: Delete after content is received */}
          <strong style={{ color: "red" }}>
            [**image of small caps and example of fake small caps**]
    </strong>

          <br />
          <br />
          <br />
          <div className="code-snippet">
            <h5 className="cbp-heading-5">Small Caps Code</h5>
            <br />
            <pre className="language-css">
              <code className="language-css">
                {`p {`}
                <br />
                &emsp;&emsp;{`//change only lowercase to small caps`}
                <br />
                &emsp;&emsp;{`font-variant-caps: small-caps;`}
                <br />
                &emsp;&emsp;{`font-feature-settings: "smcp";`}
                <br />
                <br />
                &emsp;&emsp;{`//change all letters into small caps`}
                <br />
                &emsp;&emsp;{`font-variant-caps: all-small-caps;`}
                <br />
                &emsp;&emsp;{`font-feature-settings: "c2sc", "smcp";`}
                <br />
                {"}"}
              </code>
              </pre>
          </div>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">Punctuation</h3>
          <br />
          {/* @TODO: Delete after content is received */}
          <strong style={{ color: "red" }}>
            [**table of punctuation name, html tag, use case, hotkeys**]
    </strong>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">
            The Character Viewer on your Computer
    </h3>
          <br />
          <p className="cbp-body">
            This window shows all “glyphs” available in the particular font you
            have selected on your desktop. It it for use on your PC, use HTML
            codes for calling these glyphs in your code.
    </p>

          <br />

          <section>
            <h5 className="cbp-heading-5">
              How to open the Character Viewer on your Mac:{" "}
            </h5>

            <div className="content">
              <ol>
                <li>System Preferences → Keyboard</li>
                <li>
                  Check the box “Show Keyboard, Emoji & Symbol Viewers in menu
                  bar”
          </li>
                <li>
                  Click the keyboard icon next to the clock in your menu bar and
                  select “Show Emoji & Symbols”
          </li>
              </ol>
            </div>
          </section>

          <section>
            <h5 className="cbp-heading-5">
              How to open the Character Viewer on your Windows PC:{" "}
            </h5>

            <div className="content">
              <ol>
                <li>
                  Click the Start button and type “character map” into the
                  search box
          </li>
                <li>In the list of results, click “Character Map”</li>
              </ol>
            </div>
          </section>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">Dashes</h3>
          {/* @TODO: Show Examples */}
          <strong style={{ color: "red" }}>[Provide samples]</strong>
          <br />
          <p className="cbp-body">
            The differences between the minus, hyphen, en dash, and em dash may
            not seem like much, but using the correct one can be important for
            screen readers to correctly interpret what’s on the screen even
            though sighted user may not notice much of a difference.
    </p>

          <br />

          <section>
            <h5 className="cbp-heading-5">– em dash (&emdash)</h5>
            <br />
            <p className="cbp-body">
              The main use of the em dash is to indicate the source of a quote
              or narrative placed in front of the speaker’s name. Em dashes can
              also be used in place of parentheses, or in place of a colon where
              a comma may be too little of a pause, but a period may be too
              much. This character matches the width of the capital “M” in the
              font. Ideally, the em dash should be followed by a “thin space.”
        <br />
              <br />(<strong>MAC:</strong> OPTION + - ) (
        <strong>WINDOWS:</strong> ALT + 0151)
      </p>
          </section>

          <br />

          <section>
            <h5 className="cbp-heading-5">— en dash (&endash)</h5>
            <br />
            <p className="cbp-body">
              En Dashes are exactly half of the width of an em dash. Their main
              purpose is to replace the words “to” or “through” when used to
              indicate ranges of values or of time. For example instead of 6 to
              9pm you put 6–9pm, or instead of Los Angeles to New York (Los
              Angeles-New York). There should not be any spaces between this
              symbol and its accompanying text.
        <br />
              <br />(<strong>MAC:</strong> OPTION + SHIFT + - ) (
        <strong>WINDOWS:</strong> ALT + 0150)
      </p>
          </section>

          <br />

          <section>
            <h5 className="cbp-heading-5">- minus (&minus)</h5>
            <br />
            <p className="cbp-body">
              The minus symbol should only for mathematical uses.
        <br />
              <br />(<strong>MAC:</strong> Use character viewer ) (
        <strong>WINDOWS:</strong> Use character viewer)
      </p>
          </section>

          <br />

          <section>
            <h5 className="cbp-heading-5">- hyphen (&minus)</h5>
            <br />
            <p className="cbp-body">
              1/4 the width of an em dash. primarily used for hyphenating words.
              five-dollar bill etc.
        <br />
              <br />(<strong>MAC:</strong> OPTION + - ) (
        <strong>WINDOWS:</strong> Use character viewer)
      </p>

            <br />

            <p className="cbp-subhead-text">
              Fun fact: the button on your keyboard next to the “0” numeral is
              neither a hyphen or a minus symbol, but a “hyphen-minus” which is
              a hold over from the typewriter. It is generally accepted as a
              hyphen, but is technically a different symbol.
      </p>
          </section>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">"Dumb" vs. "Smart" Quotes</h3>
          {/* @TODO: Add Example here */}
          <strong style={{ color: "red" }}>[Show Examples]</strong>
          <br />
          <br />
          <p className="cbp-body">
            Dumb quotes are the default mark on your keyboard (straight up and
            down marks), but for actually quoting someone you should only use
            smart quotes. Dumb quotes are for code only. Quotes should never be
            used to denote emphasis (ie. I “totally” took the trash out
            already.). Here’s an easy way to remember which is which: l/r (means
            left/right), d/s (means double/single), quo (quotation mark).
      <br />
            <br />
            & + l/r + d/s + quo + ;
      <br />
            <br />‘ ‘ ’ ’ “ “ ” ”
    </p>

          <br />

          <p className="cbp-body">
            <strong>&lsquo; Left Single Quote ({`&lsquo`}): </strong>
            Used to show the beginning of a quote within another quote ie.
      “Jessica said ‘i like oranges’ to me earlier.”{" "}
            <span className="cbp-subhead-text">
              (<strong>MAC: </strong> OPTION + ] ) (<strong>WINDOWS: </strong>{" "}
              ALT + 0145)
      </span>
          </p>

          <br />

          <p className="cbp-body">
            <strong>&rsquo; Right Single Quote ({`&rsquo`}): </strong>
            Used to show the end of a quote within another quote ie. “Jessica
            said ‘i like oranges’ to me earlier.” This is also the exact same
      character as the apostrophe so they are interchangeable.{" "}
            <span className="cbp-subhead-text">
              (<strong>MAC: </strong> OPTION + SHIFT + ] ) (
        <strong>WINDOWS: </strong> ALT + 0146)
      </span>
          </p>

          <br />

          <p className="cbp-body">
            <strong>&ldquo; Left Double Quote ({`&ldquo`}): </strong>
            Used to show the start of a quote.
      <span className="cbp-subhead-text">
              (<strong>MAC: </strong> OPTION + [ ) (<strong>WINDOWS: </strong>{" "}
              ALT + 0147)
      </span>
          </p>

          <br />

          <p className="cbp-body">
            <strong>&ldquo; Right Double Quote ({`&rdquo`}): </strong>
            Used to show the end of a quote.
      <span className="cbp-subhead-text">
              (<strong>MAC: </strong> OPTION + SHIFT + [ ) (
        <strong>WINDOWS: </strong> ALT + 0148)
      </span>
          </p>

          <br />

          <p className="cbp-body">
            Not sure if you’re using the right symbol? Does the tail on the
            symbol go straight or is it curved? Straight tails are for “dumb
            quotes” curved are for “smart quotes.”
    </p>

          <br />
          <br />

          <div className="code-snippet">
            <h5 className="cbp-heading-5">Code for Quotes</h5>
            <br />

            <deckgo-highlight-code language="css" highlight-lines="2,2">
              <code>
                {`<p>&ldquo;He left yesterday.&rdquo;</p> // Double quot. Marks`}
                <br />
                {`<p>&lsquo;He left yesterday.&rsquo;</p> // Single quot. Marks`}
              </code>
            </deckgo-highlight-code>
          </div>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">Measurement (Prime) Marks</h3>
          {/* @TODO: Add Example here */}
          <strong style={{ color: "red" }}>[Show Examples]</strong>

          <br />

          <p className="cbp-body">
            For distance measurements like feet and inches you should use "prime
            marks" which are slightly skewed versions of dumb quotes. for
            example not 6'4", but 6′4″. These are entirely different symbols
            from dumb or smart quotes and mean completely different things.
    </p>

          <section>
            <p className="cbp-body">
              <strong>′ Single Prime Mark (&prime): </strong>
              This is cap sensitive. Used to indicate a measurement in feet (US
              Imperial system) or in latitude/longitude it is used to indicate
        “hours” as in degrees/hours/minutes.{" "}
              <span className="cbp-subhead-text">
                (<strong>MAC: </strong> use character viewer ) (
          <strong>WINDOWS: </strong> ALT + 8242)
        </span>
            </p>

            <br />

            <p className="cbp-body">
              <strong>″ Double Prime Mark (&Prime): </strong>
              This is cap sensitive. Used to indicate a measurement in inches
              (US Imperial system) or in latitude/longitude it is used to
        indicate “minutes” as in degrees/hours/minutes.{" "}
              <span className="cbp-subhead-text">
                (<strong>MAC: </strong> use character viewer ) (
          <strong>WINDOWS: </strong> ALT + 8243)
        </span>
            </p>
          </section>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">Special Spaces</h3>
          {/* @TODO: Add Example here */}
          <strong style={{ color: "red" }}>[Show Examples]</strong>

          <br />

          <p className="cbp-body">
            <strong>&hairsp: </strong>Hair space - often used alongside dashes.
      <br />
            <br />
            <strong>&thinsp: </strong>Thin space - often used in combination
            with dashes width is equal to 1/5 or 1/6 of em dash.
      <br />
            <br />
            <strong>&nbsp: </strong>Non-breaking space - these are useful for
            preventing widows (when a single small word is left on a line all by
            itself. it forces a word to the next line without putting an actual
            space in there.
    </p>

          <br />
          {/* @TODO: Add Example here */}
          <strong style={{ color: "red" }}>
            [Image for different kinds of spaces]
    </strong>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">
            Miscellaneous Commonly Misued Symbols
    </h3>
          <br />
          {/* @TODO: Add Example here */}
          <strong style={{ color: "red" }}>[Provide Examples]</strong>

          <h5 className="cbp-heading-5">… (&hellip) Ellipsis</h5>
          <br />
          <p className="cbp-body">
            This is not the same as three periods, this will not be interpreted
            the same by assistive technologies. The proper use of an ellipsis is
            when omitting non-pertinent content from the middle of a paragraph
            or quote. It can be used at the end of a sentence where it is
            commonly used to indicate a speaker trailing off or when a speaker
      is interrupted. <br />
            <span className="cbp-subhead-text">
              (<strong>MAC: </strong> OPTION + ; ) (<strong>WINDOWS: </strong>
              ALT + 0133)
      </span>
          </p>

          <br />
          <br />

          <h5 className="cbp-heading-5">’ Apostrophe (&lsquo)</h5>
          <br />
          <p className="cbp-body">
            This is technically the same symbol as a single right quote. It is
            used when indicating possession or with contractions. It is also
            acceptable on occasions to use it to pluralize items which are not
            technically full words like the 2000’s. Or I need 8 A’s to make
            dean’s list this quarter. In these cases adding the “s” to the word
            would change its meaning. Using a dumb quote, or prime mark is not
      an acceptable substitute. <br />
            <span className="cbp-subhead-text">
              (<strong>MAC: </strong> OPTION + SHIFT + ] ) (
        <strong>WINDOWS: </strong>
              ALT + 0146)
      </span>
          </p>

          <br />
          <br />

          <h5 className="cbp-heading-5">✖ (&times)- Dimension</h5>
          <br />
          <p className="cbp-body">
            Use this symbol to indicate multiplication not (*).
      <br />
            <span className="cbp-subhead-text">
              (<strong>MAC: </strong> use character viewer ) (
        <strong>WINDOWS: </strong>
              ALT + 0215)
      </span>
          </p>

          <br />
          <br />

          <h5 className="cbp-heading-5">➗ (&divide)- Division</h5>
          <br />
          <p className="cbp-body">
            Use this symbol to indicate division not (/)
      <br />
            <span className="cbp-subhead-text">
              (<strong>MAC: </strong> OPTION + / ) (<strong>WINDOWS: </strong>
              ALT + 0247)
      </span>
          </p>

          <br />
          <br />

          <h5 className="cbp-heading-5">≠ ($ne)- Not Equal</h5>
          <br />
          <p className="cbp-body">
            Just like it looks.
      <br />
            <span className="cbp-subhead-text">
              (<strong>MAC: </strong> OPTION + = ) (<strong>WINDOWS: </strong>
              ALT + 8800)
      </span>
          </p>

          <br />
          <br />

          <h5 className="cbp-heading-5">© (&copy)- Copyright</h5>
          <br />
          <p className="cbp-body">
            This is for original works of literature, drama, music, art or
            intellectual property. Copyrights do not cover titles, names,
            phrases or slogans, symbols, designs, ideas, procedures, methods,
            concepts or discoveries. There should be a space separating this
            symbol from the copyrighted language and should never be
            superscript.
      <br />
            <span className="cbp-subhead-text">
              (<strong>MAC: </strong> OPTION + g ) (<strong>WINDOWS: </strong>
              ALT + 0169)
      </span>
          </p>

          <br />
          <br />

          <h5 className="cbp-heading-5">™ (&trade)- Trademark</h5>
          <br />
          <p className="cbp-body">
            Trademarks are for words, symbols, devices or names that are used to
            distinguish the goods of one manufacturer or seller from that of
            another. There should not be any extra space between the trademarked
            text and the symbol and should be always be superscript. If not
      automatically formatting correctly to superscript, use the{" "}
            <code>{`<sup>`}</code> tag.
      <br />
            <span className="cbp-subhead-text">
              (<strong>MAC: </strong> OPTION + 2 ) (<strong>WINDOWS: </strong>
              ALT + 0153)
      </span>
          </p>

          <br />
          <br />

          <h5 className="cbp-heading-5">® (&reg)- Registered Trademark</h5>
          <br />
          <p className="cbp-body">
            With a registration, a trademark is protected against another
            company’s use of the name or image. A registered trademark is a
            federal and legal registration of the mark. There should not be any
            extra space between the registered text and the symbol and should be
            always be superscript. If not automatically formatting correctly to
      superscript, use the <code>{`<sup>`}</code> tag
      <br />
            <span className="cbp-subhead-text">
              (<strong>MAC: </strong> OPTION + r ) (<strong>WINDOWS: </strong>
              ALT + 0174)
      </span>
          </p>
        </section>

        <br />
        <br />

        <h3 className="cbp-heading-3">Font-Aliasing</h3>
        <br />
        <p className="cbp-body">
          Font-aliasing helps dark headers really pop on light backgrounds. In
          our “light” heading classes we have Font-smoothing: anti-aliased
          applied to help them stand out on the page. However, on dark
          backgrounds this effect creates a sort of halo effect which is
          non-desirable. Which is why this property is not applied to our “dark”
          heading classes.
  </p>

        <br />
        {/* @TODO: Add Example here */}
        <strong style={{ color: "red" }}>[Image of Anti-Aliasing]</strong>
      </section>

      <br />

      <section>
        <h2 className="cbp-heading-2">Units of Measurement in Typography</h2>
        <br />
        {/* @TODO: Add Example here */}
        <strong style={{ color: "red" }}>[Image Explanation]</strong>
        <br />

        <p className="cbp-body">
          All of the sizing in the typographic classes of the CBP Design System
          are sized in REM (relative EMs). Any development team that needs to
          create custom typographic classes should use rem values relative to
          the root font-size of 14px.
    <br />
          <br />
          What are REM units? REM allows you to set the font-size property with
          a percentage value of font-size set to the HTML selector. If we set
          our root to 14px and size our h1 element to 3rem then the size of h1
          will be 42px (3 x 14px) etc.
    <br />
          <br />
          When is it ok to use EM units? Only when the sizing of a property is
          directly related to the element you’re working with and will not
          disturb vertical rhythm. For example the max-length property on our
          body copy class is set to 75em. This is because it is directly related
          to that particular font, at that particular size. It just so happens
          that body copy is the same REM size as the root. However, when using
          REMs for max-length with a font class at another size may have
          undesirable results.
    <br />
          <br />
          In order to maintain a consistent 4px baseline grid, all line-height
          settings should be expressed in intervals of 4px. Spacing between
          lines of text inside the same text box should be defined with the
          line-height property.
    <br />
          <br />
          In order to maintain a consistent 4px baseline grid, all line-height
          settings should be expressed in intervals of 4px. Spacing between
          lines of text inside the same text box should be defined with the
          line-height property.
    <br />
          <br />
          Spacing between text boxes should be defined using the spacing system
          prescribed in the Spacing, Grid, and Layout section of Foundations.
  </p>

        <br />

        <section>
          <h3 className="cbp-heading-3">General Sizing Units</h3>
          <br />
          <br />
          <h5 className="cbp-heading-5">Pixels- px (aka CSS Pixels)</h5>
          <br />
          <p className="cbp-body">
            This no longer refers to the physical pixels in the device’s screen,
            but rather is the space equal to 1/96th of 1 inch. This means that
            no matter how pixel-dense your device’s screen is an object will
            appear the same relative size optically.
    </p>

          <br />
          <br />
          <h5 className="cbp-heading-5">EMs -em</h5>
          <br />
          <p className="cbp-body">
            This is an implicit, flexible unit that the browser converts into
            pixels by multiplying the em value by the value of its parent
            element. This is not recommended to be used for assigning text
            sizing because of its inheritance issues.
    </p>

          <br />
          <br />
          <h5 className="cbp-heading-5">REMs - rem (Relative EMs)</h5>
          <br />
          <p className="cbp-body">
            This is an explicit, flexible unit that the browser converts into
            pixels by multiplying the rem value by the value assigned to HTML.
      This is the preferred method for assigning text sizing.{" "}
          </p>

          <br />
          <br />
          <h5 className="cbp-heading-5">Points - pt (iOS ecosystem)</h5>
          <br />
          <p className="cbp-body">
            An iOS pt is equal to 1 pixel on a 163 ppi screen. It’s density
            independent just like the sp on android. They usually convert out
            evenly as the true resolution is hidden.
      <br />
            <br />
            <strong>1sp = 1pt = 1rem</strong>
          </p>
          <br />
          <br />
          <br />

          <h5 className="cbp-heading-5">
            Density Independent Pixels -dp (Android ecosystem)
    </h5>
          <br />
          <p className="cbp-body">
            The density- independent pixel is equivalent to one physical pixel
            on a 160 dpi screen, which is the baseline density assumed by the
            system for a “medium” density screen. The conversion of dp units to
            screen pixels is simple: px = dp * (dpi / 160). For example, on a
            240 dpi screen, 1 dp equals 1.5 physical pixels. Android has a
            separate unit for prescribing text sizing, sp. Please use that unit
            for native Android development.
    </p>

          <br />
          <br />
          <br />
          <h5 className="cbp-heading-5">
            Scalable Independent Pixels - sp (Android Ecosystem)
    </h5>
          <br />
          <p className="cbp-body">
            SP is the same thing as dp but used for font sizing on android,
            while the dp is used for everything but fonts.
    </p>

          <br />
          <br />
          <br />
          <h5 className="cbp-heading-5">
            Viewport Height / Viewport Width - vh/vw (Fully fluid layouts only)
    </h5>
          <br />
          <p className="cbp-body">
            These settings are fluid type layouts (which should be a very rare
            occurrence within the CBP enterprise). The sizing unit is based off
            of view-port height and view-port width respectively.
      <br />
            <br />
            <strong>
              1vh = 1% of view-port height 1vw = 1% of view-port width
      </strong>
            <br />
            <br />
            This is not widely supported yet in browsers, and is not great for
            productive type applications.
    </p>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">Font Relative Lengths</h3>
          <br />
          <br />
          <h5 className="cbp-heading-5">ex (Height of Font’s x-height)</h5>
          <br />
          <p className="cbp-body">
            We use this to apply letter-spacing to small caps because the
            characters height in small caps are aligned to the x-height setting.
            X-height refers to the height of the lower-case letter “x”.
    </p>

          <br />
          <br />

          <h5 className="cbp-heading-5">
            cap (height of font’s capital letters)
    </h5>
          <br />
          <p className="cbp-body">
            This is used to set letter-spacing of UPPERCASE text. The preference
            of the CBP Design System is to use small-caps for acronyms and
            abbreviations so follow the guidance for small caps where
            applicable.
    </p>

          <br />
          <br />

          <h5 className="cbp-heading-5">ch (width of font’s 0 character)</h5>
          <br />
          <p className="cbp-body">
            This is used to set letter-spacing for monotype fonts like Roboto
            Mono. Characters in monotype are “fixed-width” and occupy an equal
            amount of space no matter which character. The zero (0) character is
            the mostly evenly designed and therefore makes a good reference
            point in this scenario.
    </p>
        </section>
      </section>

      <br />

      <section>
        {/* @TODO: Add Collapsible sections for WCAG Details */}
        <h2 className="cbp-heading-2">
          Accessibility Concerns with Typography
  </h2>
        <br />
        <p className="cbp-body">
          Typography is the heart of any design system. At CBP we follow the DHS
          Trusted Tester Guidelines which aligns to the WCAG 2.0 AA
          requirements. We try to meet AAA rules whenever possible. To get a
          comprehensive view of how we approach accessibility in the CBP Design
          System please see that section in the foundations area. You should be
          aware of the following concepts when working with typography in the
          CBP Design System:
  </p>

        <br />

        <section>
          <h3 className="cbp-heading-3">
            Using Semantic Elements to identify blocks of text.
    </h3>
          <br />
          <p className="cbp-body">
            No matter which elements you are adding to your pages, the correct
            corresponding semantic HTML element should always be utilized.
            Properly tagging text elements on the page will allow assistive
            technologies to correctly interpret all the information on the page.
    </p>

          <br />

          <p className="cbp-subhead-text">
            <strong>WCAG Details</strong> <br />
            <br />
            1.3.1 Info and Relationships Level A
      <br />
            Information, structure, and relationships conveyed through
            presentation can be programmatically determined or are available in
            text.
      <br />
            <br />
            1.3.2 Meaningful Sequence Level A <br />
            When the sequence in which content is presented affects its meaning,
            a correct reading sequence can be programmatically determined.
    </p>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">
            Maintaining Proper Heading Structure
    </h3>
          <br />
          <p className="cbp-body">
            The headings on your page should be semantically tagged and appear
            in descending order. Theoretically, there should only be a single H1
            element on the page (the first item present in your page’s main
            content UI region). Headings should not skip a level in descending
            order (h1 > h2 > h3 > h4 > h5 >h6). Sibling heading elements should
            use the same level semantic tag. The heading styling classes are
            named to be synonymous with the semantic heading structure. For
            example h1 should be paired with heading1, h2 with heading2, etc.
            This is with the notable exception of the masthead classes which are
            designed to stand in for heading 1 when you have a need to style
            your page’s title more flamboyantly. The reason we do not style the
            semantic tags directly is because we have a need to create more than
            one version of a heading class depending on its contrasting
            background color.
    </p>

          <br />

          <p className="cbp-subhead-text">
            <strong>WCAG Details</strong> <br />
            <br />
            1.3.1 Info and Relationships Level A
      <br />
            Information, structure, and relationships conveyed through
            presentation can be programmatically determined or are available in
            text.
      <br />
            <br />
            1.3.2 Meaningful Sequence Level A <br />
            When the sequence in which content is presented affects its meaning,
            a correct reading sequence can be programmatically determined.
    </p>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">Consistency of Presentation</h3>
          <br />
          <p className="cbp-body">
            This is basically when you are styling two items of equal weight in
            your content. For example, you have two text elements (h3 for
            example) on the page that are siblings. These h3 elements must be
            styled identically. Doing so means using the same font-weight,
            color, and other styling attributes.
    </p>

          <br />

          <p className="cbp-subhead-text">
            <strong>WCAG Details</strong> <br />
            <br />
            1.3.1 Info and Relationships Level A
      <br />
            Information, structure, and relationships conveyed through
            presentation can be programmatically determined or are available in
            text.
      <br />
            <br />
            1.3.2 Meaningful Sequence Level A <br />
            When the sequence in which content is presented affects its meaning,
            a correct reading sequence can be programmatically determined.
    </p>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">Line Height, Line Width</h3>
          <br />
          <p className="cbp-body">
            WCAG 2.0 accessibility rules state that there should be a least 1.5x
            line height when one paragraph immediately follows another. In this
            case, our line height for body copy is 20px and therefore the
            spacing between paragraphs must be at least 32px (rounded up from
            30px to match our baseline grid). We also implement a 75em max-width
            restriction on body copy to comply with maximum character
            requirements. NOTE: as stated earlier, justified text is just bad,
            don’t do it.
    </p>

          <br />

          <div className="code-snippet">
            <h5 className="cbp-heading-5">P + P</h5>
            <br />

            <deckgo-highlight-code language="css" highlight-lines="2,2">
              <code>
                {`p + p {`}
                <br />
                &emsp;&emsp;{`text-indent: 1.6rem; //32 divided by 20`}
                <br />
                {`}`}
              </code>
            </deckgo-highlight-code>
          </div>

          <br />

          <p className="cbp-subhead-text">
            <strong>WCAG Details</strong> <br />
            <br />
            1.4.8 Visual Presentation Level AAA
      <br />
            For the visual presentation of blocks of text, a mechanism is
            available to achieve the following:
      <br />
            <div className="content">
              <ol>
                <li>
                  Foreground and background colors can be selected by the user.
                  (not doing)
          </li>
                <li>
                  Width is no more than 80 characters or glyphs (40 if CJK).
          </li>
                <li>
                  Text is not justified (aligned to both the left and the right
                  margins).
          </li>
                <li>
                  Line spacing (leading) is at least space-and-a-half within
                  paragraphs, and paragraph spacing is at least 1.5 times larger
                  than the line spacing.
          </li>
                <li>
                  Text can be resized without assistive technology up to 200
                  percent in a way that does not require the user to scroll
            horizontally to read a line of text{" "}
                  <a
                    href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#fullscreenwindowdef"
                    target="__blank"
                  >
                    on a full-screen window.
            </a>
                </li>
              </ol>
            </div>
          </p>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">Color and Contrast</h3>
          <br />
          <p className="cbp-body">
            Color when it applies to text should be supplementary when it has
            specific meaning. For example if you have a link within a paragraph,
            simply making it blue is not sufficient. You need another visual cue
            that explains what meaning that color is trying to represent. Making
            that text into a heavier weight like bold and italicizing it would
            be sufficient however (as long as this approach is consistent across
            the enterprise). In order to keep text legible, text should meet
            minimum contrast ratios with the color around it. Consider using the
            ANDI browser extension to test the text on your page to ensure it
            meets minimum contrast values.
    </p>

          <br />

          <p className="cbp-subhead-text">
            <strong>WCAG Details</strong> <br />
            <br />
            1.4.1 Use of Color Level A
      <br />
            Color is not used as the only visual means of conveying information,
            indicating an action, prompting a response, or distinguishing a
            visual element.
      <br />
            <br />
            1.4.3 Contrast (Minimum) Level AA
      <br />
            The visual presentation of text and images of text has a contrast
            ratio of at least 4.5:1, except for the following: Hide full
            description
      <div className="content">
              <ul>
                <li>
                  <strong>Large Text: </strong> Large-scale text and images of
                  large-scale text have a contrast ratio of at least 3:1;
          </li>
                <li>
                  <strong>Incidental: </strong>Text or images of text that are
                  part of an inactive user interface component, that are pure
                  decoration, that are not visible to anyone, or that are part
                  of a picture that contains significant other visual content,
                  have no contrast requirement.
          </li>
                <li>
                  <strong>Logotypes: </strong>Text that is part of a logo or
                  brand name has no contrast requirement.
          </li>
              </ul>
            </div>
          </p>

          <br />
          <p className="cbp-body">
            The ANDI extension can be found here:{" "}
            <a
              href="https://www.ssa.gov/accessibility/andi/help/install.html"
              target="__blank"
            >
              https://www.ssa.gov/accessibility/andi/help/install.html
      </a>
          </p>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">Resizing of Text</h3>
          <br />
          <p className="cbp-body">
            The construction of our sites and applications should not interfere
            with a user's ability to use the native functionality of the browser
            to zoom up to 200%.
    </p>

          <br />

          <p className="cbp-subhead-text">
            <strong>WCAG Details</strong> <br />
            <br />
            1.4.4 Resize text Level AA
      <br />
            Except for captions and images of text, text can be resized without
            assistive technology up to 200% without loss of content or
            functionality.
    </p>
        </section>

        <br />

        <section>
          <h3 className="cbp-heading-3">
            Images of Text
      <a
              href="#toTop"
              className="cbp-heading-6"
              style={{ position: "relative", float: "right", right: "3rem" }}
            >
              Back to Top <i className="fas fa-arrow-up"></i>
            </a>
          </h3>
          <br />
          <p className="cbp-body">
            Having embedded images on your page with important text needs to be
            understandable for the end user. You should provide complete alt
            text descriptions on these images. The alt text should give an
            equitable explanation of the content illustrated in the image. Also,
            consider other means of presenting this information rather than
            having it embedded on an image, if possible. If you are displaying a
            logo, alt text for the image should describe that it is a logo and
            the text contained within.
    </p>

          <br />

          <p className="cbp-subhead-text">
            <strong>WCAG Details</strong> <br />
            <br />
            1.4.5 Images of Text Level AA
      <br />
            If the technologies being used can achieve the visual presentation,
            text is used to convey information rather than images of text except
            for the following:
      <div className="content">
              <ul>
                <li>
                  <strong>Customizable: </strong>The image of text can be
                  visually customized to the user's requirements
          </li>
                <li>
                  <strong>Essential: </strong>A particular presentation of text
                  is essential to the information being conveyed.
          </li>
              </ul>
            </div>
          </p>
        </section>
      </section>

      <br />

      <section>
        <h2 className="cbp-heading-2">Note</h2>
        <br />
        <p className="cbp-body">
          <em>
            Just because the Design System is built with Accessibility in mind
            does not mean that your site will automatically be compliant with
            DHS Trusted Tester rules. Diligence is required to make sure that
            these concepts are front of mind when you are building with the CBP
            Design System. This will ensure that your products remain
            accessible.
      <br />
            <br />
            Learn more about accessibility at DHS by visiting the following
            resources:
      <br />
            <br />
            To learn more about the <strong>
              DHS Trusted Tester program{" "}
            </strong>{" "}
            click here:{" "}
            <a href="https://www.dhs.gov/trusted-tester" target="__blank">
              https://www.dhs.gov/trusted-tester
      </a>
            <br />
            To learn more about how to earn a{" "}
            <strong>DHS Trusted Tester certification </strong>
            click here:{" "}
            <a href="https://training.section508testing.net/" target="__blank">
              https://training.section508testing.net/
      </a>
            <br />
            To learn more about <strong>WCAG guidelines </strong> click here:{" "}
            <a
              href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0"
              target="__blank"
            >
              https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0
      </a>
          </em>
        </p>
      </section>


    </article>
  </Layout>
)

export default TypographyPage
