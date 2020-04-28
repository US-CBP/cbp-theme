import React from "react"
import Layout from "../../ds-components/layout/layout"
import ContentHeader from "../../ds-components/content-header/contentHeader"
import SEO from "../../ds-components/seo"
import gridSmall from "../../images/layout-grid-small.jpg"
import gridMed from "../../images/layout-grid-medium.jpg"
import gridLg from "../../images/layout-grid-large.jpg"
import gridXL from "../../images/layout-grid-xl.jpg"
import spacingSystem from "../../images/layout-spacing-system.jpg"
import CodeSnippet from "../../ds-components/codeSnippet/codeSnippet"

const LayoutPage = () => (
  <Layout>
    <SEO title="CBP Design System | Layouts" />
    <ContentHeader title="Layouts" contentType="foundation" />

    <article className="spacing-wrapper">
      <section id="Basics">
        <h2 className="cbp-heading-2">Creating Hierarchy with Positioning</h2>
        <p className="cbp-body">
          Spacing, Grid, and Layout define how we arrange elements on the page
          in a way that is easy to understand, is representative of the
          hierarchy of the information, and has a consistent rhythm.
        </p>

        <h2 className="cbp-heading-2">Nuggets of Knowledge</h2>
        <div className="content">
          <ul>
            <li>
              Use the spacing variables prescribed in the design system. There
              are always exceptions to the rule, but modifications should be
              avoided if at all possible. Remember that modifying the grid
              settings can have a compounding mathematical effect that can cause
              a cascading set of failures across the design system.
            </li>
            <li>
              Containers on your page should be aligned to the CBP Layout Grid
              except in very specific circumstances (described in this guide).
            </li>
            <li>
              Elements on the page should be aligned to the layout grid, does
              not mean that their dimensions must be defined by it.
            </li>
            <li>
              The minimum space between separate containers on the page is
              $spacing-regular (20px), except when crossing columns, in which
              case the gutter will define that spacing.
            </li>
            <li>
              You should test your layouts against each of the 4 main break
              points and prescribe changes in layout to match each if necessary.
            </li>
            <li>
              CBP Applications and sites are responsive. Functionality that is
              accessible on the desktop should also be available on other
              devices accessing the service.
            </li>
            <li>
              Do not adjust the CBP Layout Grid settings, including most notably
              gutter and margin sizing.
            </li>
            <li>
              The body element in your HTML file should have the class
              .cbp-layout-grid applied.
            </li>
            <li>
              Please only use the spacing variables prescribed in the design
              system. There are always exceptions to the rule, but this should
              be avoided if at all possible.
            </li>
            <li>
              Containers on your page should be aligned to the CBP Layout Grid
              except in very narrow circumstances (described in this guide).
            </li>
            <li>
              Just because elements on the page should be aligned to the layout
              grid does not mean that their dimensions must be defined by it
              too.
            </li>
            <li>
              The minimum space between separate containers on the page is
              $spacing-regular (20px), except when crossing columns in which
              case the gutter will define that spacing.
            </li>
            <li>
              You should test your layouts against each of the 4 main break
              points and prescribe changes in layout to match each if necessary.
            </li>
            <li>
              CBP Applications and sites are responsive. Functionality that is
              accessible on the desktop should also be available on other
              devices accessing the service.
            </li>
            <li>
              Do not adjust the CBP Layout Grid settings, including most notably
              gutter and margin sizing.
            </li>
          </ul>
        </div>

        <h2 className="cbp-heading-2">The Layout Grid</h2>
        <p className="cbp-body">
          The word grid is a bit overused when it comes to development. In this
          specific instance the "Layout Grid" we are referring to is the
          skeleton on which different elements are placed to give the overall
          page structure. It's made up of 3 main parts: Columns, Gutters, and
          Margins. The CBP Design System supports 4 major breakpoints: small,
          medium, large, and extra-large. Major breakpoints are the viewport
          width points that are aligned to the most common device resolutions
          (logical resolution not device screen resolution). From one breakpoint
          to another the grid may change the number of columns or the values
          associated with gutter or margin width. From a horizontal alignment
          perspective, your content should align to this grid. An exception to
          this may include fluid dashboards where dividing up the page via
          percentages is more effective. Regardless of which method is used, the
          grid margin must be preserved. In general, you will notice that the
          size of the gutters and margins stays static while the columns grow
          and shrink to fit the remainder of the viewport width at each major
          breakpoint.
        </p>
        <p className="cbp-body">
          <strong>NOTE: </strong>At a later point native mobile versions of the
          CBP Design System will swap these pixel values for that ecosystem's
          particular unit of measurement. For iOS this means pt(s) and for
          Android, dp(s).
        </p>

        <h3 className="cbp-heading-3">Major Breakpoints</h3>
        <h4 className="cbp-heading-4">
          Small Break Point {`<`}599px 4 column 20px margin / 16px gutter
        </h4>
        <p className="cbp-body">
          This will cover the gamut of mobile devices currently in the wild.
          Margins are slightly larger than the gutters. The vast majority of
          layout containers at this breakpoint will be 4 columns wide and
          effectively be a single column layout. It should be clear that
          multiple columns of text are unacceptable at this breakpoint to keep
          legibility in mind. Learn more about major breakpoints here.
        </p>

        <figure>
          <img src={gridSmall} style={{ height: "250px" }}></img>
        </figure>

        <h4 className="cbp-heading-4">
          Medium Break Point 600-1023px 8 column 32px margin / 28px gutter{" "}
        </h4>
        <p className="cbp-body">
          This will encapsulate most of the large mobile form factors through
          most vertical tablet range of viewports, stopping just shy of the
          default px width of most small laptops. The gutters are sized to allow
          multiple columns of text (2rem), but the 45-75 character range for
          line length should be maintained for long blocks of text. Learn more
          about major breakpoints here.
        </p>
        <figure>
          <img src={gridMed} style={{ height: "250px" }}></img>
        </figure>

        <h4 className="cbp-heading-4">
          Large Break Point 1024-1439px 12 column 32px margin / 28px gutter
        </h4>
        <p className="cbp-body">
          This will cover our landscape orientation on tablets as well as a
          range of small laptop and desktop viewports. Learn more about major
          breakpoints here.
        </p>
        <figure>
          <img src={gridLg} style={{ height: "250px" }}></img>
        </figure>

        <h4 className="cbp-heading-4">
          Extra Large Break Point {`<`}1440px 12 column 44px margins / 28px
          gutter
        </h4>
        <p className="cbp-body">
          This will cover the range of desktops and displays on the larger end
          of the spectrum. Learn more about major breakpoints here.
        </p>
        <figure>
          <img src={gridXL} style={{ height: "250px" }}></img>
        </figure>

        <h3 className="cbp-heading-3">Spacing System</h3>
        <p className="cbp-body">
          When prescribing the space between containers, or elements within
          containers, you should use the following spacing classes.{" "}
          <strong>
            All classes are based on the 4px baseline grid. You should not need
            to create custom classes.
          </strong>{" "}
          These spacing classes can be used directly on properties like padding
          and margin to help define spatial relationships. Keep in mind which
          classes you choose will inform users to what information is related to
          another element. The smaller the space, the more closely related it
          is. Classes are not responsive, meaning they do not automatically
          change from one major breakpoint to another. You should test your
          layouts at each major breakpoint to see if one variable should be
          substituted at one breakpoint for another.
        </p>

        <p className="cbp-body">
          <strong>NOTE: </strong>At a later point native mobile versions of the
          CBP Design System will swap these pixel values for that ecosystem's
          particular unit of measurement. For iOS this means pt(s) and for
          Android, dp(s).
        </p>

        <figure>
          <img src={spacingSystem} style={{ height: "400px" }}></img>
        </figure>

        <CodeSnippet
          code={`$cbp-spacing-micro: 8px
$cbp-spacing-xsmall: 12px
$cbp-spacing-small: 16px
$cbp-spacing-regular: 20px
$cbp-spacing-large: 40px
$cbp-spacing-xlarge: 80px`}
          language={"language-scss"}
        />

        <h3 className="cbp-heading-3">Spacing Component Classes</h3>
        <p className="cbp-body">
          In order to speed up development time, the CBP Design System utilizes
          classes that allow you to quickly apply spacing to elements that align
          to the main spacing philosophies. There are basically 5 main spacing
          philosophies:
        </p>

        <div className="content">
          <ul>
            <li>Square Inset</li>
            <li>Squish Inset</li>
            <li>Stretch Inset</li>
            <li>Stack</li>
            <li>Inline</li>
          </ul>
        </div>

        <h4 className="cbp-heading-4">
          Square Inset (Relationship of parent container to contained child
          elements)
        </h4>
        <p className="cbp-body">
          This spacing style applies a constant px value around the interior of
          the component container to align elements to. These classes apply
          spacing variables evenly to the padding property.
        </p>

        <iframe
          height="288"
          style={{ width: "100%", paddingBottom: "2rem" }}
          scrolling="no"
          title="Layouts- Square Inset"
          src="https://codepen.io/KtowneCreative/embed/jObBYQr?height=288&theme-id=light&default-tab=css,result"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          loading="lazy"
        >
          See the Pen{" "}
          <a href="https://codepen.io/KtowneCreative/pen/jObBYQr">
            Layouts- Square Inset
          </a>{" "}
          by Creative Services (
          <a href="https://codepen.io/KtowneCreative">@KtowneCreative</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>

        <h4 className="cbp-heading-4">
          Squish Inset (relationship of parent container to contained child
          elements)
        </h4>
        <p className="cbp-body">
          This style allows for asymmetrical spacing with the vertical spacing
          being smaller than the horizontal spacing. In these classes we apply a
          spacing variable to top and bottom padding, then assign the next
          variable up to the left and right padding.
        </p>

        <iframe
          height="265"
          style={{ width: "100%", paddingBottom: "2rem" }}
          scrolling="no"
          title="Layouts- Squish Inset"
          src="https://codepen.io/KtowneCreative/embed/ExVXxeY?height=265&theme-id=light&default-tab=css,result"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          loading="lazy"
        >
          See the Pen{" "}
          <a href="https://codepen.io/KtowneCreative/pen/ExVXxeY">
            Layouts- Squish Inset
          </a>{" "}
          by Creative Services (
          <a href="https://codepen.io/KtowneCreative">@KtowneCreative</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>

        <h4 className="cbp-heading-4">
          Stretch Inset (relationship of parent container to contained child
          elements)
        </h4>
        <p className="cbp-body">
          Similar to squish inset, except it is the converse of the concept, in
          this instance the vertical value is greater than the horizontal. In
          these classes we apply a spacing variable to the left and right
          padding, then apply the next level up to the top and bottom padding.
        </p>

        <iframe
          height="265"
          style={{ width: "100%", paddingBottom: "2rem" }}
          scrolling="no"
          title="Layouts- Stretch Inset"
          src="https://codepen.io/KtowneCreative/embed/BaoZKYN?height=265&theme-id=light&default-tab=css,result"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          loading="lazy"
        >
          See the Pen{" "}
          <a href="https://codepen.io/KtowneCreative/pen/BaoZKYN">
            Layouts- Stretch Inset
          </a>{" "}
          by Creative Services (
          <a href="https://codepen.io/KtowneCreative">@KtowneCreative</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>

        <h4 className="cbp-heading-4">
          Stack (vertical relationship between individual elements within a
          contain or between containers)
        </h4>
        <p className="cbp-body">
          The stack philosophy defines the vertical spacing values associated
          between elements or between containers themselves. It does not affect
          spacing on the horizontal axis. These classes only apply padding to
          the bottom of the element or container.
        </p>

        <iframe
          height="265"
          style={{ width: "100%", paddingBottom: "2rem" }}
          scrolling="no"
          title="Layouts- Stack "
          src="https://codepen.io/KtowneCreative/embed/VwvWBNj?height=265&theme-id=light&default-tab=css,result"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          loading="lazy"
        >
          See the Pen{" "}
          <a href="https://codepen.io/KtowneCreative/pen/VwvWBNj">
            Layouts- Stack{" "}
          </a>{" "}
          by Creative Services (
          <a href="https://codepen.io/KtowneCreative">@KtowneCreative</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>

        <h4 className="cbp-heading-4">
          Inline (horizontal relationship between individual elements)
        </h4>
        <p className="cbp-body">
          Inline is similar to stack except on the horizontal axis. This is an
          important concept for understanding responsive design, as this
          assigned or minimum space will dictate when elements will wrap or
          reflow. These classes apply padding only on the right.{" "}
          <strong>
            <em>THIS DOES NOT REPLACE THE GUTTER. </em>
          </strong>
          When spacing containers on the horizontal axis you should use the
          layout grid, not inline spacing to separate them.
        </p>

        <iframe
          height="265"
          style={{ width: "100%", paddingBottom: "2rem" }}
          scrolling="no"
          title="Layouts- Inline"
          src="https://codepen.io/KtowneCreative/embed/qBOjMbZ?height=265&theme-id=light&default-tab=css,result"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          loading="lazy"
        >
          See the Pen{" "}
          <a href="https://codepen.io/KtowneCreative/pen/qBOjMbZ">
            Layouts- Inline
          </a>{" "}
          by Creative Services (
          <a href="https://codepen.io/KtowneCreative">@KtowneCreative</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </section>

      <section id="Research & References">
        <h2 className="cbp-heading-2">
          A Strong Spine{" "}
          <a
            href="#Basics"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>{" "}
        </h2>
        <p className="cbp-body">
          When combined with our typographic system, our approach to layout
          (layout, grid, and spacing) creates the backbone upon which all of the
          CBP Design System is built. The arrangement of content on the page is
          just as important as the content itself. Placement, size, and spatial
          relationships give the user context clues about the order in which
          content should be consumed, and its overall affiliation with the other
          information on the page.
        </p>
        <h2 className="cbp-heading-2">Layout Grid</h2>
        <p className="cbp-body">
          With an atomic design methodology in mind, layout has varying levels
          of complexity. At the most fundamental level the "Layout Grid"
          provides the cadence that establishes our horizontal rhythm. When
          paired with the "Baseline Grid" established in our typographic system,
          we have a consistent method of aligning elements on the page. This
          simplifies design decisions and speeds up the development process.
        </p>
        <h3 className="cbp-heading-3">
          How is this different from other grids?
        </h3>
        <p className="cbp-body">
          In this specific instance the "Layout Grid" we are referring to is the
          skeleton on which different elements are placed to give the overall
          page structure. It's made up of 3 main parts: Columns, Gutters, and
          Margins. The layout grid is used to establish horizontal rhythm on the
          page. Because we can't guarantee what the viewport width our users
          will be experiencing our products with, this grid must be inherently
          flexible. This is unlike the "Baseline Grid" where we can define a
          explicit grid in 4px increments.
        </p>
        <h3 className="cbp-heading-3">
          Different Kinds of Layout Grids for Different Purposes
        </h3>
        <p className="cbp-body">
          There are few different kinds of layout grids. Fluid grids display
          their content in terms of ratios. Each element's width is expressed as
          a percentage or fraction of the overall viewport width usually
          expressed in % or FR's (fractions). To make these types of layouts
          work everything must scale, borders, type, everything. This is not
          ideal for the type of products we build at CBP. Fixed grids display
          their content at a set width and the margins flex to absorb the extra
          space. This is how most sites were built in the early days of the web,
          but doesn't fit our needs today. Hybrid or Responsive grids have
          aspects of both fixed and fluid grids. The margin and gutters are
          represented as static values and the columns resize fluidly to fill in
          the rest of the space. Responsive grids also adjust these settings
          with media queries on the viewport width to provide more appropriate
          options. This is what most modern products utilize and best serves the
          majority of the products CBP produces.
        </p>
        {/* @TODO: insert anatomy of columns, margins, gutters */}
        <p className="cbp-body">
          <span role="heading" aria-level="4">
            <strong>Columns- </strong>
          </span>
          These are the vertical bars that all content on the page is aligned
          to. Columns create horizontal hierarchy on the page by standardizing
          the starting and stopping points to which content is aligned. The
          number of columns present is dictated by what breakpoint the viewport
          falls within. The larger the viewport, the more columns present. The
          width of columns is flexible depending on the remaining available
          space after margins and gutters have been allocated.
        </p>

        <p className="cbp-body">
          <span role="heading" aria-level="4">
            <strong>Margins- </strong>
          </span>
          This is the space on the far left and right of the page that creates
          separation between page content the edge of the viewport (either
          browser window or device edge). Margins have a slightly heavier lift
          than gutters. Creating a distinction between the viewport and the
          content requires more negative space in order to help the user's eye
          properly focus.
        </p>

        <p className="cbp-body">
          <span role="heading" aria-level="4">
            <strong>Gutters- </strong>
          </span>
          This is the space between columns. There is a minimum value that is
          directly tied to the REM value. This value needs to be at a minimum
          2REM. Why? Because 1REM would effectively be the space between two
          words (provided text is not justified which it shouldn't be). So what
          if you had two columns of text directly next to each other? The user
          would read across the columns. In the case of the CBP DS the REM value
          = 14px x2=28px. This is the setting for gutters in all of the major
          breakpoints aside from "small" because at this effective size there
          should only be one column of text, eliminating the issue of columns
          running together.
        </p>

        <h2 className="cbp-heading-2">
          Major Breakpoints
          <a
            href="#Basics"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>{" "}
        </h2>

        {/* @TODO: implement image overview of breakpoints with devices in use */}

        <p className="cbp-body">
          In order for our content to adapt to the screen that our users are
          viewing it through, we must adjust how our content is laid out across
          this spectrum of widths. We assign different values to our grid
          settings to adjust for the width of the viewport via media queries (if
          viewport width is {"<"} XXpx then etc.). These boundaries created by
          the media queries are what we call major breakpoints. For the sake of
          standardization and to speed up development decisions, the CBP Design
          System contains 4 major breakpoints whose width is determined by
          common device and viewport width values. Why 4? You don't want to have
          too many major breakpoints because it creates a lot of unnecessary
          work to keep your layout working across them. You also don't want too
          few because then your layouts will break when moving across the
          spectrum of devices. The "small" breakpoint encompasses the vast
          majority of smart phones (portrait orientation). "Medium" fits most of
          our tablets (portrait orientation) and "phablets." The "large"
          breakpoint works with tablets (landscape orientation), laptops, and
          small desktop screens. Finally the "extra large" breakpoint works with
          large desktops and wall mounted displays like TVs. See the full
          details on these breakpoints in the "Basics" tab at the top of this
          page.
        </p>

        <h3 className="cbp-heading-3">Responsive Design</h3>
        {/* @TODO: add image of dos and don'ts */}
        <p className="cbp-body">
          CBP applications and websites should be able to accommodate a range of
          devices and viewport widths. As such, functionality should not be
          removed at certain breakpoints just because "it doesn't fit." If a
          piece of information seems like it doesn't matter for smaller form
          factors perhaps you should think on whether it should be present at
          any form factor. Consider your user and how they will interact with
          your product in different settings. Elements should reflow and
          sometime change their form to match the environment they are being
          displayed in, but keep equitable access to functionality
        </p>

        <h4 className="cbp-heading-4">Responsive Testing</h4>
        <p className="cbp-body">
          What this comes down to is testing. Whether you prescribe to "mobile
          first" design or not, you need to test your layouts against all 4
          major breakpoints to see where your layouts "break" and need
          adjustment. In most cases this means that a container will have to
          "reflow" to the next "row". In some cases however, this will mean that
          the element you're working with will have to change form to fit at
          that width
        </p>

        <h4 className="cbp-heading-4">Container Reflow</h4>
        <p className="cbp-body">
          In general, inside of a breakpoint containers flex in both directions
          to stay aligned to their assigned columns laterally and vertically
          stretch to fit its content. Sometimes within a break point, and
          especially between break points, content may need to switch how many
          columns are occupied. It may also have to change its overall
          arrangement to fit the new viewport size.
        </p>

        <h4 className="cbp-heading-4">Intra-Container Reflow</h4>
        <p className="cbp-body">
          Within components, whether or not something is fluid in the horizontal
          or vertical axis can be dependent on the component itself. Some
          components will actually need to refactor their form rather than
          simply adjust how many columns it occupies. For example, the
          application the header can have a variety of content inside it.
          Obviously, there are minimum spacing requirement between elements
          inside the component. As the viewport shrinks there is a point where
          there is no longer room to support the content with the minimum
          spacing required, and this particular component needs to have a fixed
          height. So what do you do? It will have to change form and become
          something that fits that form factor. This will not be able to be
          achieved by querying the viewport width and will instead have to focus
          on the exact point where content can no longer support its intended
          width. Data tables, certain visualizations, other other complicated
          components commonly are in need of alternate forms on smaller form
          factors.
        </p>

        <h2 className="cbp-heading-2">
          UI Regions
          <a
            href="#Basics"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>{" "}
        </h2>
        <p className="cbp-body">
          A layout is made up of several UI regions, with the CBP Design System
          this translates to the universal and app headers and the main body of
          the page. There may be other persistent regions based off of different
          layout archetypes. UI regions should be consistent across devices,
          while adapting to different breakpoints of different screen sizes.
        </p>
        <p className="cbp-body">
          To increase familiarity across devices, UI elements designed for
          desktop should be organized in a way that’s consistent with the mobile
          UI.
        </p>

        <h2 className="cbp-heading-2">How our Grids are Set Up</h2>
        <p className="cbp-body">
          The Layout Grid breakpoints are set up via a set of 4 media queries
          using "CSS Grids." Yes, you heard that correct, this is another type
          of grid. CSS grids is a CSS module of properties used to solve layout
          issues. Unlike "Flexbox" which works in one dimension (laterally), CSS
          Grids work in 2 dimensions (it also plays nicely with Flexbox). It's a
          lot like working with tables.
        </p>
        <p className="cbp-body">
          Because your application's layout is not necessarily something that
          can be made universal, these settings will need to be added to your
          custom css file. You can either copy these settings from the example
          below or download the sample custom css file from the downloads page.
          Or as always you can use one our "Starter Applications" to begin work
          on your project and not worry about all this rigamarole.
        </p>

        {/* @TODO: add code example of css-grid */}
        <h3 className="cbp-heading-3">CSS-Grid Code</h3>
        <CodeSnippet
          code={`html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

/* small (mobile) breakpoint you will need to add the number of rows you need */
.cbp-layout-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
  grid-template-rows: 3;
  margin: 0 20px;
}

/* put your layout classes for small breakpoint here
medium (tablet) breakpoint you will need to add the number of rows you need */
@media only screen and (min-width: 600px) {
  .cbp-layout-grid {
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 28px;
    grid-template-rows: 3;
    margin: 0 32px;
  }
}

/* put your layout classes for medium breakpoint here
large (tablet/laptop) breakpoint you will need to add the number of rows you need */
@media only screen and (min-width: 1024px) {
  .cbp-layout-grid {
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 28px;
    grid-template-rows: 3;
    margin: 0 32px;
  }
}

/* put your layout classes for large breakpoint here
xlarge (desktop) breakpoint you will need to add the number of rows you need */
@media only screen and (min-width: 1440px) {
  .cbp-layout-grid {
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 28px;
    grid-template-rows: 3;
    margin: 0 44px;
  }
}

/* put your layout classes for xlarge breakpoint here */ `}
          language="language-css"
        />

        <h3 className="cbp-heading-3">
          How to Align Containers to the Layout Grid
        </h3>
        <p className="cbp-body">
          First and foremost in your HTML file, the <code>{`<body>`}</code>
          element at the top of the page (the parent element to all of the
          content on the page found under the <code>{`<head>`}</code> element)
          should have the class <code>.cbplayout-grid</code> assigned to it.
          This will bring the layout grid onto the page.
        </p>
        <p className="cbp-body">
          Next any "containers" should have classes that use the{" "}
          <code>grid-column</code>
          property to assign the container's width and start/end points. Because
          CSS Grid only deals in whole integers you'll see an example below
          where a container has the value (grid-column: 1/5) means the container
          spans from the beginning of the first column through the end of the
          4th column (because there is no 0). There are other ways of assigning
          this but this is the simplest option.
        </p>
        <p className="cbp-body">
          Each product is different and therefore will have differing numbers of
          rows. Once you determine the number of rows you will need make sure to
          update the <code>grid-template-rows</code> property with the correct
          number of rows for that breakpoint. You assign your containers to rows
          with the <code>grid-row</code> property. Much like with columns you
          might see this expressed as (grid-row: 1/5) meaning it spans from the
          beginning of the first row through the end of the 4th row (there is no
          0).
        </p>
        <p className="cbp-body">
          Alternatively you can use <code>grid-template-areas</code> within each
          break point to build out your layout. This property allows you to
          assign each cell in the grid all at once within a break point by using
          <code>gridareas</code> (names you give each area of the page which you
          simply reference by name later on).
        </p>

        <h3 className="cbp-heading-3">Item Width and Complexity</h3>
        <p className="cbp-body">
          Setting the width of the elements within a container can be
          accomplished by either using the column width of the container or
          specifying it yourself. A good rule of thumb is that the more complex
          the arrangement of elements within a container is, the more fixed in
          nature these spatial relationships should be. Simple cards with an
          image in the top portion and a short amount of text underneath can
          probably be reliably measured in line with your column width. A more
          complicated card with many elements that have subordinate elements
          might have a more difficult time maintaining those spatial
          relationships in a more fluid type situation. In these more complex
          arrangements it likely will be better from a layout perspective to set
          a fixed width or use min-max properties to keep that flexing to a
          minimum, and simply align the container within the columns rather to
          them.
        </p>
        {/* @TODO: add helper image */}

        <h2 className="cbp-heading-2">
          When to Break the Grid
          <a
            href="#Basics"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>{" "}
        </h2>
        <p className="cbp-body">
          Sometimes to help maintain good "key lines" it may be necessary to
          adjust width on certain components to help align text inside of a
          component with text that resides outside of it. Key lines are
          invisible lines that help align elements to each other. A good example
          would be blocks of text inside the same column that are all aligned
          left. That invisible line that all three text boxes are aligned to
          would be referred to as a key line.
        </p>
        <p className="cbp-body">
          Sometimes within a column there might be an example where we have a
          loose text box placed into the page aligned left to the edge of a
          column and perhaps an element like a card underneath, also with text
          contained within. We don't want to disturb the user's eye patterns by
          breaking this key line and having the text align to the edge of the
          card instead of the text inside of the card. In this example the card
          itself would reach slightly into the gutter so that the text can inch
          over and align to the text presented outside of the card.
        </p>

        <h2 className="cbp-heading-2">Spacing Methods</h2>
        <p className="cbp-body">
          At a layer of complexity higher than the layout grid we find spacing
          methods. These allow us a more minute control over how to place
          elements within containers and the spaces between containers.
        </p>

        <h3 className="cbp-heading-3">Dimension</h3>
        <p className="cbp-body">
          This is the height and width of the element. In some layouts simply
          using the dimensions of the elements is enough to establish a spatial
          relationship. Remember that the height of an element must be in
          intervals of 4px to align to the Baseline Grid.
        </p>

        <h3 className="cbp-heading-3">Padding</h3>
        <p className="cbp-body">
          Padding is the space around and between different elements. Spacing
          variables are preset values that we apply to the padding property.
          Which variable to use is dependent on both the sizes of the element
          and its neighbors as well their relationship to each other. For
          interactive elements please read the "touch safe targets" section
          under the Color and Interactivity section in foundations.
        </p>

        <h3 className="cbp-heading-3">Alignment</h3>
        <p className="cbp-body">
          In this instance we are referring to the placement of elements within
          a layout container or component. Examples are left, right, and
          centered and may refer to either an element on its vertical or
          horizontal axis. For example you have a layout container that spans
          the whole viewport and you a variety of elements that are on the same
          row. Centering them on the vertical axis helps establish that these
          elements have a particular type of relationship to one another.
        </p>

        <h2 className="cbp-heading-2">
          Spacing System
          <a
            href="#Basics"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>{" "}
        </h2>
        <p className="cbp-body">
          From an atomic perspective, the spacing system provides the blueprint
          of the interrelationships between different elements on the page.
          Spacing is not the same as the layout grid. Just as with the
          typographic system, our paramount concern is legibility. Part of this
          concept is creating a system of spacing that builds a predictable
          sense of informational hierarchy. Which pieces of information are
          subordinate to others, and what information isn't directly related to
          each other. That's why establishing this rhythm is so important.
          Having wildly different spacing relationships would create a sort of
          chaos and make it much more difficult for the end user to distinguish
          what exactly they are supposed to be taking away from what they're
          looking at.
        </p>
        {/* @TODO: add image of good and bad spacing concepts */}

        <h3 className="cbp-heading-3">
          Ties to the Baseline Grid and Typographic System
        </h3>
        <p className="cbp-body">
          Since this is a communicative medium, spacing will borrow heavily from
          the typographic system that was established first. Most notably, the
          line-height of body copy (20px). This will form the basis that all of
          the other spacing variables will follow. Why this particular line
          height? Well body copy is the meat and potatoes when it comes the
          information on the page. The space that each of these lines of text
          occupies a sort of bell-weather status indicating the minimum value of
          an element meant to communicate to a user. It seems like a logical
          starting point for creating a system.
        </p>
        <p className="cbp-body">
          Vertically speaking, all things align to the baseline grid. Every
          single element on the page MUST be in an interval of 4px. No 1, 2, 3
          etc. Because legibility is paramount, where typography goes so too
          does everything else. Which is why all of a spacing variables must
          also be a multiple of 4px.
        </p>
        {/* @TODO: add image helper */}

        <h3 className="cbp-heading-3">
          Geometric Progression and Spacing Variables
        </h3>
        <p className="cbp-body">
          Just like how are typographic settings are tabulated with a modular
          scale you could create a spacing scale based off of a ratio. In this
          sense above our baseline we double the px in each step, and below we
          half (rounded to the nearest 4px interval).
        </p>
        <p className="cbp-body">
          Because our system is productive in nature, we need to take a slightly
          altered approach. If we take the geometric approach on the high end,
          starting at 20px we will get our large spacing values by doubling at
          each step. Two large values seem to meet our needs. On the lower end
          we use the 4px denominator to make variables at 8, 12, and 16px. This
          should create a system that should work for our needs and create more
          variety on the smaller side of the scale.
        </p>
        <p className="cbp-subhead-text">
          <em>
            To view the full list of spacing variables, click on the{" "}
            <a href="#Basics">Basics tab</a> above.
          </em>
        </p>

        <h2 className="cbp-heading-2">
          Rule of 3 "C's" (Containers, Components, Content)
          <a
            href="#Basics"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>{" "}
        </h2>

        <p className="cbp-body">
          <div role="heading" aria-level="3">
            <strong>Containers</strong>
          </div>
          These are the highest level in relational hierarchy. These elements
          hold other elements. For example, cards, drawers, panels, modals, etc.
          Inset principles are applied here.
        </p>

        <p className="cbp-body">
          <div role="heading" aria-level="3">
            <strong>Components</strong>
          </div>
          Buttons, form fields, etc. This refers to the spacing inside of these
          elements. For example the inset space around the text inside of a
          button.
        </p>

        <p className="cbp-body">
          <div role="heading" aria-level="3">
            <strong>Content</strong>
          </div>
          Content lives inside of containers. Headers, text, tables, etc. Inline
          and stack principles are applied here. This is the spacing between
          elements. IT DOES NOT REPLACE LINE HEIGHT. In the case of spacing
          between 2 paragraphs within the same text box there needs to be a
          separate setting to keep that value at 1.5x the line height value
          (this only applies to body shouldn't have multiple paragraphs within a
          header.) Another special case is the spacing as applied to list items
          (unordered or ordered). Body paragraph line height in this case is not
          usually sufficient and there will likely need to be extra space on the
          vertical ends to help separate from paragraphs when it is self
          contained.
        </p>

        <h2 className="cbp-heading-2">
          Spacing Philosophies
          <a
            href="#Basics"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>{" "}
        </h2>
        <p className="cbp-body">
          <div role="heading" aria-level="3">
            <strong>
              Square Inset (relationship of container to contained elements
            </strong>
          </div>
          This spacing style applies a constant px value around the element.{" "}
          <em>
            See the <a href="#Basics"> Basics tab </a>above to view the full
            list of available spacing classes.
          </em>
        </p>

        <p className="cbp-body">
          <div role="heading" aria-level="3">
            <strong>
              Squish Inset (relationship of container to contained elements)
            </strong>
          </div>
          This style allows for asymmetrical spacing with the vertical spacing
          being smaller than the horizontal spacing. In the example below the
          ratio is 2:1.
          <em>
            See the <a href="#Basics"> Basics tab </a>above to view the full
            list of available spacing classes.
          </em>
        </p>

        <p className="cbp-body">
          <div role="heading" aria-level="3">
            <strong>
              Stretch Inset (relationship of container to contained elements)
            </strong>
          </div>
          Same as with squish except it is the converse of the concept. The
          vertical value is greater.
          <em>
            See the <a href="#Basics"> Basics tab </a>above to view the full
            list of available spacing classes.
          </em>
        </p>

        <p className="cbp-body">
          <div role="heading" aria-level="3">
            <strong>
              Stack (vertical relationship between individual elements or
              between containers)
            </strong>
          </div>
          This refers to the spacing between individual elements in a container
          or between containers. The values chosen help create hierarchy and
          vertical rhythm. These classes add spacing only to the bottom of the
          element via the padding-bottom property.
          <em>
            See the <a href="#Basics"> Basics tab </a>above to view the full
            list of available spacing classes.
          </em>
        </p>

        <p className="cbp-body">
          <div role="heading" aria-level="3">
            <strong>
              Inline (horizontal relationship between individual elements or
              between containers)
            </strong>
          </div>
          This is the same concept as stack except on the horizontal axis.
          Important concept for understanding responsive design as this assigned
          or minimum space will dictate when elements will wrap or reflow.
          <em>
            See the <a href="#Basics"> Basics tab </a>above to view the full
            list of available spacing classes.
          </em>
        </p>

        <h2 className="cbp-heading-2">
          Object Size and Spacial Complexity
          <a
            href="#Basics"
            className="cbp-heading-6"
            style={{ position: "relative", float: "right", right: "3rem" }}
          >
            Back to Top <i className="fas fa-arrow-up"></i>
          </a>{" "}
        </h2>
        <p className="cbp-body">
          The larger an object on the page becomes, the more spacing will be
          required in order to separate it from other objects on the page. Two
          pairs objects of different sizes with the same spacing between them
          will optically look different because our eyes interpret that
          relationship differently. Roughly, the rule is the bigger the object
          is, the bigger the space it needs between other objects on the page to
          avoid tangents. Tangents are instances where two objects are so close
          to each other that they draw the eye in and disrupt layout flow.
          Sometimes this can be taken advantage of to create a dramatic focal
          point, but generally it's accidental and is to the detriment of the
          layout overall.
        </p>

        <h2 className="cbp-heading-2">Accounting for Borders</h2>
        <p className="cbp-body">
          Borders on elements make keeping the grid tidy a bit tricky. They can
          easily throw off a harmonious rhythm with a death by a thousand 1px
          cuts. We need to account for them when design components. Buttons, for
          example, have an 8px padding around the text within them. When they
          have a border (let's say 1px) that border needs to be reduced to 7px
          to account for the border so that we dont keep adding 1 off pixels all
          over the place.
        </p>
      </section>
    </article>
  </Layout>
)

export default LayoutPage
