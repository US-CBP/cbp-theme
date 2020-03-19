import React from "react"
import Layout from "../../ds-components/layout/layout"
import ContentHeader from "../../ds-components/content-header/contentHeader"
import SEO from "../../ds-components/seo"

//WIP
// import ScrollTop from "../../ds-components/layout/scrollToTop";


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

      {/* <section>
        <h2 className="cbp-heading-2 pad-bottom"> Usage </h2>

        <h5 className="cbp-heading-5">Using the 14px Base Scale</h5>
        <br />

        <h6 className="cbp-heading-6">Pros</h6>
        <br />
        <ul>
          <li>- Minimal disruption to existing site architectures.</li>
          <li>- A lot of heading values sync up with existing theme values.</li>
          <li>
            - Keeps base value on the low end of the equation to help our more
            dense applications.
          </li>
        </ul>

        <br />

        <h6 className="cbp-heading-6">Cons</h6>
        <br />
        <ul className="pad-bottom">
          <li>
            - Because the base value is on the lower side (default is 16px),
            some of our users might become dependent on zoom features.
          </li>
          <li>
            - There is still not a lot of size variation between text levels
            (Although this can be both a pro and a con to have them match up).
          </li>
        </ul>

        <h5 className="cbp-heading-5">Line Height</h5>
        <br />
        <p className="cbp-body pad-bottom">
          Human beings operate on identifying patterns. The Principle of
          Repetition brings familiarity to different items in a layout. It gives
          the layout structure. When we mix this with typography, we enhance
          overall legibility because the user's eye is allowed to flow smoothly
          and is not interrupted by unexpected and jarring relationships between
          items in the layout.
          <br />
          <br />
          This is mostly manifested in what is referred to as the "Baseline
          Grid". This grid is different from the various other terms referred to
          as grid in web design in that it specifically refers to a set of
          "invisible" lines that go down the page to which all layout elements
          are aligned. Because communication of information is at the heart of
          all websites and applications, this grid is tightly tied to our
          typography settings. Specifically to the line-height of body copy
          (because it is the base unit in our typographical system).
          <br />
          <br />
          Earlier we established that our body copy will be 14px. It's a good
          industry standard practice to use a 4px baseline grid, meaning all
          spacing will be a multiple or factor of 4.
        </p>
      </section>

      <section className="section-spacing">
        <h2 className="cbp-heading-2 pad-bottom">Specifications</h2>
        <table classNameName="table is-fullwidth">
          <caption
            style={{
              textAlign: "left",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            CBP Design System Type Scale
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

            <tr>
              <td className="cbp-body">Body</td>
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

        <table className="table is-fullwidth">
          <caption
            style={{
              textAlign: "left",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            Support Type classNamees
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
        <br />
        <br />
      </section> */}
    </article>
  </Layout>
)

export default TypographyPage