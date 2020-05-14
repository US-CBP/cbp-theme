import React from "react"
import Layout from "../../ds-components/layout/layout"
import ContentHeader from "../../ds-components/content-header/contentHeader"
import SEO from "../../ds-components/seo"
import CodeSnippet from "../../ds-components/codeSnippet/codeSnippet"
import { Tabs, TabList, Tab, TabPanel } from "react-tabs"

const IconographyPage = () => (
  <Layout>
    <SEO title="Iconography" />
    <ContentHeader title="Iconography" contentType="foundation" />

    <Tabs style={{ overflowY: "auto" }}>
      <div className="tabs is-boxed margin--tab">
        <TabList>
          <Tab selectedClassName="is-active">
            <a href="#">Basics</a>
          </Tab>
          <Tab selectedClassName="is-active">
            <a href="#">Reference & Research</a>
          </Tab>
        </TabList>
      </div>

      <article className="spacing-wrapper">
        <TabPanel>
          <section id="Basics">
            <h2 className="cbp-heading-2">Introduction</h2>
            <p className="cbp-body">
              Iconography is an important communication tool we use to quickly
              understand content or what is expected of us. When used correctly
              and efficiently, these symbols allow our products to build off
              commonly used visual metaphors to help us attach special emphasis
              to important information and bring delight to our users.
            </p>

            <h2 className="cbp-heading-2">Nuggets of Knowledge</h2>
            <div className="content">
              <ul>
                <li>
                  Icons should assist our users in navigating content faster,
                  not slow them down. If your icon is introducing confusion or
                  cluttering the page, consider other options.
                </li>
                <li>
                  Don't use too many icons, it's distracting and you may end up
                  making your content harder to understand and retain.
                </li>
                <li>
                  When trying to think of an icon to use, take 5 seconds. If you
                  cannot think of an appropriate icon immediately, then perhaps
                  you are better off using only a label and not an icon.
                </li>
                <li>
                  Using custom icons outside of those provided by the CBP Design
                  System should be a rare use case as they add cognitive load
                  every time one is introduced. Iconography builds familiarity
                  and quick understanding by repeated exposure to your users,
                  both on CBP applications and through their broader use in
                  society.
                </li>
                <li>
                  Icons when paired with text should inherit the font-size of
                  the text they are paired with. For instance if an icon is
                  paired with some body copy, it should also be size 14px.
                </li>
                <li>
                  Icons when paired with text should be centered aligned
                  vertically with the text.
                </li>
                <li>
                  Icons when paired with text should inherit the color of the
                  accompanying text, including color changes associated with
                  changes in interactive states.
                </li>
                <li>
                  Icons should be used in accordance with the common
                  understanding of their meaning.
                </li>
                <li>
                  When used alone, icons should not be sized less than 20px, and
                  never smaller than 14px.
                </li>
                <li>
                  Interactive icons should have an interactive "touch safe" area
                  of no less than 48px by 48px, and no less than 8px of space
                  between these icons.
                </li>
                <li>
                  System icons are always a solid, monochromatic color. Do not
                  apply gradients or convert icons to stroke only. If an icon is
                  interactive, the color applied should match its current
                  interactive state.
                </li>
                <li>
                  Altering system icons is only acceptable if you are changing
                  the core meaning of the icon, and most importantly a more
                  appropriate icon does not already exist in the library.
                  Redundant, and inconsistent iconography hurts the whole
                  enterprise ecosystem, not just your application.
                </li>
                <li>
                  When developing native applications, you should use the CBP
                  Design System icons inside the application unless the
                  application is calling a native function of the device. In
                  this instance use the native device's default iconography
                  where appropriate.
                </li>
                <li>
                  In the case of icons being used to convey meaning and not just
                  decorative (semantically), you need to apply any relevant Aria
                  labels, title, and alternative text describing its purpose and
                  current interactive state if applicable.
                  {/* @TODO: Add link to relevant section in Reference and Research Section */}
                </li>
              </ul>
            </div>

            <h2 className="cbp-heading-2">Font Awesome</h2>
            <p className="cbp-body">
              The CBP Design System uses the Font Awesome 5 library of icons.
              Specifically we only use the free tier solid and brand offerings.
              See installation instructions on the Reference & Research tab for
              more information on using Font Awesome and these custom icons in
              your application.
              {/* @TODO:anchor link to r and r section */}
            </p>

            <h2 className="cbp-heading-2">System Icons</h2>
            <p className="cbp-body">
              Font Awesome has a lot of icons to choose from. Below you will
              find the most commonly used icons and their intended use cases.
              This list is organized by the icon's individual affordance level.
              An affordance in this context is the perception people have with
              an object and how that thing is to be used.
            </p>
            <p className="cbp-body">
              This is by no means a comprehensive list. These are just the most
              commonly used icons listed here for your convenience with some
              added UX guidance on how these icons are used across the CBP
              enterprise. Should you encounter a need not fulfilled here, before
              you venture into the territory of creating a custom icon, please
              consult the Font Awesome site here to view a complete listing of
              their offerings. Make sure to have the free filter selected as the
              CBP Design System only uses the free tier of their offering. The
              below list will be updated from time to time to incorporate new
              guidance, custom icons not included in the Font Awesome.
              {/* @TODO: anchor link to r and r section */}
            </p>

            {/* @TODO: search functionality should be going against icon name, description, and any attached labels. i dont think it needs to be fuzzy as labels should catch all of the alternative names. needs a clear function to return to all icons. */}

            <h3 className="cbp-heading-3">High (Explicit) Affordance Icons</h3>
            <p className="cbp-body">
              These are icons with very tight relationships to a particular
              meaning or visual metaphor. They should be used for very narrow
              use cases and not substituted for other icons. Most of the time,
              these icons may be used without supporting text. We still
              encourage you to complete user testing to confirm that your users
              understand what this symbol means in the individual context of
              your product.
            </p>

            <div className="table">
              <table className="is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Icon</th>
                    <th scope="col">Description</th>
                    <th scope="col">Style</th>
                    <th scope="col">Unicode</th>
                    <th scope="col">Class Name</th>
                    <th scope="col">SVG</th>
                    <th scope="col">Labels</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Bars</td>
                    <td>
                      <i class="fas fa-bars"></i>
                    </td>
                    <td>
                      Bars is the Font Awesome equivalent of the "hamburger"
                      menu icon. This icon is used by the "universal header at
                      smaller sizes. There should not be more than one instance
                      of this icon on the page. Do not use the "align-justify"
                      icon as a substitute or alternate.
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f0c9</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-bars"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>navigation, menu</td>
                  </tr>

                  <tr>
                    <td>Bell</td>
                    <td>
                      <i class="fas fa-bell"></i>
                    </td>
                    <td>
                      The bell icon is a well known stand in for the concept of
                      notifications. Do not use this icon to represent alarms,
                      alerts, or other types of warnings.
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f0f3</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-bell"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>notification</td>
                  </tr>

                  <tr>
                    <td>Caret-Down</td>
                    <td>
                      <i class="fas fa-caret-down"></i>
                    </td>
                    <td>
                      This icon is used to indicate that content that is
                      normally hidden is now revealed at a smaller scale. Larger
                      scale reveals should use the chevron icon set. Should be
                      used in conjunction with the other caret icons. This icon
                      is preferable to the icon "caret-square-down."
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f0d7</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-caret-down"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>open, close, reveal, hide</td>
                  </tr>

                  <tr>
                    <td>Caret-Right</td>
                    <td>
                      <i class="fas fa-caret-right"></i>
                    </td>
                    <td>
                      This icon is used to indicate that content that is hidden
                      when used at a smaller scale. Larger scale reveals should
                      use the chevron icon set. Should be used in conjunction
                      with the other caret icons. This icon is preferable to the
                      icon "caret-square-right."
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f0da</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-caret-right"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>open, close, reveal, hide</td>
                  </tr>

                  <tr>
                    <td>Check</td>
                    <td>
                      <i class="fas fa-check"></i>
                    </td>
                    <td>
                      Check is used to give the user an indication that
                      something is accepted, done, or complete. Is also used in
                      conjunction with check boxes.
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f00c</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-check"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>complete, done, accepted</td>
                  </tr>

                  <tr>
                    <td>Chevron-Down</td>
                    <td>
                      <i class="fas fa-chevron-down"></i>
                    </td>
                    <td>
                      The down facing chevron is used to indicate that content
                      that is normally hidden is now revealed. Most commonly
                      used in the accordion component. This icon set represents
                      a higher level of content hierarchy than the caret set. Do
                      not substitute for the icon "angle-down."
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f078</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-chevron-down"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>complete, done, accepted</td>
                  </tr>

                  <tr>
                    <td>Chevron-Right</td>
                    <td>
                      <i class="fas fa-chevron-right"></i>
                    </td>
                    <td>
                      The right facing chevron is used to indicate that content
                      is hidden. Most commonly used in the accordion component.
                      This icon set represents a higher level of content
                      hierarchy than the caret set. Do not substitute for the
                      icon "angle-right."
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f054</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-chevron-right"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>complete, done, accepted</td>
                  </tr>

                  <tr>
                    <td>Clock</td>
                    <td>
                      <i class="fas fa-clock"></i>
                    </td>
                    <td>
                      The clock icon falls in the realm of the skeuomorphic
                      (albeit abstracted). It means what it looks like, time.
                      Not to be substituted with calendar, that icon is reserved
                      for use when talking about dates.
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f017</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-clock"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>time</td>
                  </tr>

                  <tr>
                    <td>Clone</td>
                    <td>
                      <i class="fas fa-clone"></i>
                    </td>
                    <td>
                      This icon is used to indicate that you are making a copy
                      of the content or it is a copy of content. This is
                      preferable to the "copy" icon.
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f24d</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-clone"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>copy, done</td>
                  </tr>

                  <tr>
                    <td>Cog</td>
                    <td>
                      <i class="fas fa-cog"></i>
                    </td>
                    <td>
                      This icon represents settings or personal preferences.
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f013</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-cog"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>settings, preference</td>
                  </tr>

                  <tr>
                    <td>Comment</td>
                    <td>
                      <i class="fas fa-comment"></i>
                    </td>
                    <td>
                      This icon is used with the universal feedback service that
                      is featured in the universal header. As such, it is
                      reserved for this use exclusively. If you want to indicate
                      a literal comment try using the "comment-alt" icon, or the
                      "quote-right" or "quote-left" icons for special callouts
                      for direct quotations.
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f075</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-comment"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>feedback</td>
                  </tr>

                  <tr>
                    <td>Credit Card</td>
                    <td>
                      <i class="far fa-credit-card"></i>
                    </td>
                    <td>
                      This icon is used when you're referencing a payment method
                      (credit card). The regular style (far) is more legible as
                      a credit card than the solid style (fas) so that is
                      preferable.
                    </td>
                    <td>Regular Style (far)</td>
                    <td>f09d</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="far fa-credit-card"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>payment, credit card</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="cbp-heading-3">Medium Affordance Icons</h3>
            <p className="cbp-body">
              These are icons with mixed relationships to a smaller range of
              meanings or visual metaphors. There is room here for subjectivity
              on when to use what icon for what purpose. It is important to
              maintain consistency within your application or product suite that
              a particular icon is used in the same way. User testing should be
              conducted to see if supporting text is or is not required for your
              user base to understand its purpose.
            </p>

            <div className="table">
              <table className="is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Icon</th>
                    <th scope="col">Description</th>
                    <th scope="col">Style</th>
                    <th scope="col">Unicode</th>
                    <th scope="col">Class Name</th>
                    <th scope="col">SVG</th>
                    <th scope="col">Labels</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Address Book</td>
                    <td>
                      <i class="fas fa-address-book"></i>
                    </td>
                    <td>
                      This icon is used to indicate a collection of contact
                      information, not a single listing. For a single listing
                      use the icon "Address-card."
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f2b9</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-address-book"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>Address, Address Book, Contacts</td>
                  </tr>

                  <tr>
                    <td>Address Card</td>
                    <td>
                      <i class="fas fa-address-card"></i>
                    </td>
                    <td>
                      This icon is used to indicate a single contact, not a
                      collection of contacts. For a collection of contacts use
                      the icon "Address Book."
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f2bb</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-address-card"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>N/A</td>
                  </tr>

                  <tr>
                    <td>Adjust</td>
                    <td>
                      <i class="fas fa-adjust"></i>
                    </td>
                    <td>
                      This icon is used to indicate that a process has started
                      but has not yet been completed. For example a stage in a
                      multi step form. If this stage has not been started yet at
                      all the icon "circle" (far style) is a good indicator. If
                      some information has been entered "adjust" would be
                      appropriate. If complete, then the icon "check-circle"
                      might be appropriate.
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f2b9</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-adjust"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>incomplete</td>
                  </tr>

                  <tr>
                    <td>Align-Center</td>
                    <td>
                      <i class="fas fa-align-center"></i>
                    </td>
                    <td>
                      Align-center is used in word processing to indicated that
                      text should be aligned "center."
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f037</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-align-center"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>Align, center</td>
                  </tr>

                  <tr>
                    <td>Align-Left</td>
                    <td>
                      <i class="fas fa-align-left"></i>
                    </td>
                    <td>
                      Align-left is used in word processing to indicated that
                      text should be aligned "left" or as it is sometimes
                      referred to as "rag right."
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f036</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-align-left"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>align, left</td>
                  </tr>

                  <tr>
                    <td>Align-Right</td>
                    <td>
                      <i class="fas fa-align-right"></i>
                    </td>
                    <td>
                      Align-left is used in word processing to indicated that
                      text should be aligned "left" or as it is sometimes
                      referred to as "rag left."
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f038</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-align-right"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>Align, right</td>
                  </tr>

                  <tr>
                    <td>Archive</td>
                    <td>
                      <i class="fas fa-archive"></i>
                    </td>
                    <td>
                      Align-left is used in word processing to indicated that
                      text should be aligned "left" or as it is sometimes
                      referred to as "rag left."
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f038</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-archive"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>Align, right</td>
                  </tr>

                  <tr>
                    <td>Backward</td>
                    <td>
                      <i class="fas fa-backward"></i>
                    </td>
                    <td>
                      The backward icon is pretty much exclusively used in the
                      context of a video player to indicate playing the video in
                      reverse.
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f04a</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-backward"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>video, backward</td>
                  </tr>

                  <tr>
                    <td>Camera</td>
                    <td>
                      <i class="fas fa-camera"></i>
                    </td>
                    <td>
                      This icon is used to indicate a function where the user
                      would choose a photo, or open a camera application.
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f030</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-camera"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>photo, camera</td>
                  </tr>

                  <tr>
                    <td>Envelope</td>
                    <td>
                      <i class="fas fa-envelope"></i>
                    </td>
                    <td>
                      The envelope icon is one of those skeuomorphic icons. It
                      looks like a letter and therefore is readily associated
                      with messages. This icon is good for use as a label for
                      email addresses or as an indicator of an unopened
                      messaged. For an opened message, consider
                      "envelope-open-text."
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f0e0</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-envelope"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>message, mail, email</td>
                  </tr>

                  <tr>
                    <td>Exclamation</td>
                    <td>
                      <i class="fas fa-exclamation"></i>
                    </td>
                    <td>
                      This icon is an indication of a warning, alert, etc. Its
                      purpose is to pull special attention from the user to
                      indicate that there is something that requires their
                      attention. This icon is part of a set of 3 with
                      "exclamation-circle" and "exclamation-triangle." It is the
                      lowest level in the hierarchy compared to its peers.
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f12a</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-exclamation"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>warning, attention, alert, alarm</td>
                  </tr>

                  <tr>
                    <td>Exclamation-Circle</td>
                    <td>
                      <i class="fas fa-exclamation-circle"></i>
                    </td>
                    <td>
                      This icon is an indication of a warning, alert, etc. Its
                      purpose is to pull special attention from the user to
                      indicate that there is something that requires their
                      attention. This icon is part of a set of 3 with
                      "exclamation" and "exclamation-triangle." It is the middle
                      level in the hierarchy compared to its peers.
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f06a</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-exclamation-circle"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>warning, attention, alert, alarm</td>
                  </tr>

                  <tr>
                    <td>Exclamation-Triangle</td>
                    <td>
                      <i class="fas fa-exclamation-triangle"></i>
                    </td>
                    <td>
                      This icon is an indication of a warning, alert, etc. Its
                      purpose is to pull special attention from the user to
                      indicate that there is something that requires their
                      attention. This icon is part of a set of 3 with
                      "exclamation" and "exclamation-circle." It is the highest
                      level in the hierarchy compared to its peers.
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f071</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-exclamation-triangle"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>warning, attention, alert, alarm</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="cbp-heading-3">Low (Implicit) Affordance Icons</h3>
            <p className="cbp-body">
              These are icons with very subjective relationships to a particular
              meaning or visual metaphor. They almost always will require
              supporting text for your user to understand their meaning.
            </p>

            <div className="table">
              <table className="is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Icon</th>
                    <th scope="col">Description</th>
                    <th scope="col">Style</th>
                    <th scope="col">Unicode</th>
                    <th scope="col">Class Name</th>
                    <th scope="col">SVG</th>
                    <th scope="col">Labels</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Archive</td>
                    <td>
                      <i class="fas fa-archive"></i>
                    </td>
                    <td>
                      Align-left is used in word processing to indicated that
                      text should be aligned "left" or as it is sometimes
                      referred to as "rag left."
                    </td>
                    <td>Solid Style (fas)</td>
                    <td>f038</td>
                    <td>
                      <CodeSnippet
                        code={`<i class="fas fa-archive"></i>`}
                        language="language-html"
                      />
                    </td>
                    <td>Download SVG</td>
                    <td>Align, Right</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </TabPanel>

        <TabPanel>
          <section id="Research-References">
            <h2 className="cbp-heading-2">Why Iconography is Important</h2>
            <p className="cbp-body">
              Icons are intimately connected to typography. Obviously they
              cannot replace the written word, we don't use a pictographic
              language like the ancient Egyptians after all. Icons can however
              act as a way to effectively communicate a concept, object, or
              action in a very economic amount of space. Icons themselves are a
              form of illustration that through time builds upon repeated
              exposure to create a common meaning. Icons should be immediately
              understood by your users. If they are not intuitively understood
              then they are no longer adding value but hurting the overall
              usability of your product. When used correctly icons can enhance
              your product by allowing your users to quickly scan the page and
              boost retention and legibility of your content.
            </p>

            <h2 className="cbp-heading-2">Affordances</h2>
            <p className="cbp-body">
              n the past, interfaces for digital products used designs that very
              closely related to the physical world. Buttons looked like real,
              physical buttons with complex gradients and pressed states that
              mimicked the action of pressing an actual button. This
              skeuomorphism (digital designs that mimic the real world) provided
              a bridge the physical world that people were accustomed with
              interacting with to the digital world. Over the years, people have
              become comfortable with these concepts, and simplified, abstract
              versions of these interface elements work just as good or better.
              This familiarity is what we refer to as an affordance. The user
              because of prior, repeated exposure intuitively knows what a
              particular element's purpose is and what is expected of them to
              interact with it.
            </p>
            <p className="cbp-body">
              With iconography these associations can have very fixed, explicit
              relationships, or very loose, implicit relationships. For example
              the save icon, also known as a floppy disk, pretty much has one,
              explicit meaning. Save. If a user sees this symbol they know
              almost immediately what its purpose is. They need little to no
              guidance to understand what is expected of them when they see it.
              And for this reason it should only be used in this context. This
              tight matrix with its meaning also allows for it to stand alone
              with no supporting text and still have the user understand what to
              do.
            </p>
            <p className="cbp-body">
              Other icons however may have several implicit, or not obvious,
              meanings depending on its context. They may, or may not, require
              further explanation to the user. This is where user testing is so
              important. As developers and designers we must understand while we
              can certainly empathize with our users, we are not necessarily our
              users. When trying to use a non-explicit icon without supporting
              text, you should be doing testing to see if your users can
              actually understand what that icon means on its own or if the user
              gets lost or confused. Icons should help users navigate faster not
              slow them down.
            </p>

            <h2 className="cbp-heading-2">
              Product Icons vs. Illustrations vs. System Icons
            </h2>
            <p className="cbp-body">
              Pictorial elements like icons and illustrations can provide your
              layouts with landmarks that delight users and reinforce the
              narrative you are trying to convey. There are three main
              categories that are pertinent here: Product Icons, System Icons,
              and Illustrations.
            </p>

            <h3 className="cbp-heading-3">Illustrations</h3>
            <p className="cbp-body">
              Illustrations serve a couple of use cases. They can be purely
              decorative, or more importantly, they use imagery to explain
              complex ideas, visualizations, or narratives. Illustrations
              represent content rather than just complementing it.
            </p>

            <h3 className="cbp-heading-3">Product Icons</h3>
            <p className="cbp-body">
              Product icons are the elements that serve as branding for a
              particular system, application, or service. This is most evidently
              shown in home screen icons for native apps on mobile devices.
              Their purpose is to help a user quickly select a tool from a group
              of tools or to reinforce connection to the brand that tool
              represents. For example this product icon may be used on both the
              home screen of a mobile device but also may show up in another
              application as a way creating a quick visual connection to that
              brand, and possibly serve as a landmark link to that application,
              system, or service. Do not use common system icons as product
              icons.
            </p>

            <h3 className="cbp-heading-3">System Icons</h3>
            <p className="cbp-body">
              Unlike product icons and illustrations, system icons are intended
              to be more concise, simple, and to the point in regards to their
              meaning. They are designed for reuse across not just a single
              product, but across the enterprise. They derive value in this
              repeated exposure, so our user base builds their connection to
              this imagery over time. System icons are functional in nature and
              help break down information on the page to make it more scannable,
              and reinforce overall hierarchy. These icons should bring clarity
              to the function they are highlighting, keeping their design simple
              helps reinforce this. If the icon applied does not bring clarity
              to the function it is describing, it likely should be removed in
              favor of text label.
            </p>
            <p className="cbp-body">
              When we use the term icon in this documentation we are referring
              specifically to system icons. We will add guidance for product
              icons and illustrations at a later date.
            </p>

            <h2 className="cbp-heading-2">When to use an icon</h2>
            <p className="cbp-body">
              Choosing when to use an icon can be a tricky and subjective
              decision. Sometimes there is an urge to overuse them in an effort
              to create layouts that are more visually appealing. What ends up
              happening however, is instead of enhancing the content on the
              page, you end up creating a "Where's Waldo" painting. Products
              should be very judicious in their use of iconography.
            </p>

            <h3 className="cbp-heading-3">
              Icons will never be able to compete with a label
            </h3>
            <p className="cbp-body">
              Labels will always be more effective than icons. People just don't
              have the bandwidth to remember tons of different icons and their
              particular meaning inside your product. Remember that people use
              digital products other than yours, and are exposed to very similar
              looking elements that may have disparate meanings. Because very
              few icons are used universally, not just across our enterprise but
              across digital products in general, a label will always offer more
              clarity.
            </p>
            <p className="cbp-body">
              Why use an icon at all if labels are more effective? Icons offer a
              few key pieces of value. In some instances icons can help bridge
              language barriers. They improve the overall aesthetic of your
              product. Throughout a product, the use of an icon consistently can
              improve scan-ability and quickly give users clues to
              functionality. Most importantly they can reinforce informational
              hierarchy. They can grab a user's attention, direct them, inform
              users what information is important, and let them know in what
              order content should be consumed.
            </p>
            <p className="cbp-body">
              Using an icon in partnership with a label however, has a positive
              effect that often is greater than using either the icon or the
              label individually. The icon provides the visual landmark to help
              users quickly find a common function or idea, and the label
              provides the context so that we can be sure the user understands
              what that icon means. 9 times out of 10, when using an icon this
              will be the optimal situation that provides the best value to the
              user. Does every label need an icon though? No. Remember icons
              should be used judiciously. Use them to pull special attention to
              specific elements on the page, not to decorate.
            </p>
            <p className="cbp-body">
              When using an icon inline with a label the icon should always
              appear to the left of the label. The icon must be synonymous with
              the label in color, presentation, and match the current state of
              the label so they are associated together. For example, if the
              label is a particular color that represents a hover state, the
              icon should follow with this particular property.
            </p>

            <h3 className="cbp-heading-3">The 5 Second Rule</h3>
            <p className="cbp-body">
              When considering using an icon, take 5 seconds and think about
              what icon is most appropriate for use in the context you are
              trying to use. If you cannot immediately think of an icon thats
              appropriate then you are probably better off not using one, and a
              simple label will likely be more effective.
            </p>

            <h3 className="cbp-heading-3">Custom Use</h3>
            <p className="cbp-body">
              In some instances you may have a product that has a particular
              action or function that reappears often and may be quite
              important, but does not have a readily associated icon. This might
              be an opportunity to introduce an icon from the Font Awesome or
              CBP Design System icon libraries to help your users identify an
              important function, provided you use this icon in conjunction with
              a label.
            </p>

            <h3 className="cbp-heading-3">Using an Icon on Its Own</h3>
            <p className="cbp-body">
              There are a few icons that are as close to universal as you can
              find. The much maligned "hamburger" (three horizontal bars) icon
              that symbolizes a menu, save, play, etc. These icons may be
              stylized differently from product to product, but they generally
              have a similar appearance and are used in a consistent context.
              These "high affordance" icons can normally be used on their own
              without a label because users are very familiar with them already.
              You should still be seeking to validate that this is true from
              time to time with your user testing.
            </p>
            <p className="cbp-body">
              When building responsive products you might find that in the act
              of condensing a layout to fit on smaller form factors that
              dropping a label from its icon is a much more efficient use of
              space. Be careful when conducting user testing to make sure that
              this difference in layout is not disruptive, is still consistent
              in use and placement, and of course is still understandable by the
              end user.
            </p>
            <p className="cbp-body">
              Over time with enough exposure you might find that during user
              testing that an icon outside of this "high affordance" category
              has built up enough familiarity to live on its own. But be wary
              that the data truly bares out that the user has become familiar
              with the icon's purpose, and not just its location in the page.
              You may find that changing the icon's location may confuse users.
              This is a good indication that they have really just memorized
              that function's location and that the icon still needs a label to
              be properly understood.
            </p>

            <h3 className="cbp-heading-3">
              Keep it Simple. Keep it Consistent.
            </h3>
            <p className="cbp-body">
              Icons are often ineffective in the context of very abstract ideas,
              this is where the realm of illustration plays its role. Make sure
              that in places where you are utilizing icons that the idea or
              function they are meant to resemble is simple and easily
              understandable with little context.
            </p>
            <p className="cbp-body">
              More important than anything else though is consistent use. Don't
              use a heart icon to symbolize the act of favoriting an item in one
              place and a star in another. Remember that your users are exposed
              to a multitude of applications within our enterprise, and that
              your use of an icon is also consistent in what your user might
              encounter in another CBP application.
            </p>

            <h2 className="cbp-heading-2">Why Font Awesome?</h2>
            <p className="cbp-body">
              Our previous effort, the CBP Theme 1.X, used version 4 of Font
              Awesome. We made the decision to upgrade to version 5 because the
              of their decision to redesign their icons at a bigger size, which
              allows for more detailed and cleaner icons, as well as more icons
              to choose from in their free tier.
            </p>
            <p className="cbp-body">
              Why Font Awesome instead of other free offerings like that of
              Material Icons? One of the main tenets of the CBP Design System is
              to build bridges to the CBP Theme and we felt staying with Font
              Awesome would aid in the transition process for our development
              teams. Font Awesome also offers some useful solutions for our
              development teams currently using version 4 to easily upgrade to
              version 5 using shims. Please see documentation on their website
              here for more information.
            </p>
            <p className="cbp-body">
              That being said, we realize that Font Awesome does contain a lot
              of extraneous icons that are unnecessary for our uses and does not
              include some key icons that are useful for a government and law
              enforcement agency. In these instances a custom icon will be
              necessary to fulfill this need. From time to time, we will add
              custom icons to a repository outside of the Font Awesome library
              that will be usable by any team using the CBP Design System.
            </p>
            <p className="cbp-body">
              A note on endorsement. CBP does not officially endorse Font
              Awesome or by extension its paid PRO licensed versions of its
              products. The CBP Design System uses the Font Awesome free, open
              source license under the CC BY 4.0 license applies to all icons
              packaged as .svg and .js, the SIL OFL license applies to all icons
              packaged as web and desktop font files, and the MIT license which
              applies to all non-font and non-icon files. Any Font Awesome files
              we may host are intended for use in CBP products and applications
              and not intended to be redistributed or sold. Please see their
              page on license information here.
            </p>

            <h2 className="cbp-heading-2">Using Font Awesome Libraries</h2>
            <p className="cbp-body">
              Just like with our Roboto typeface you need to first make sure to
              reference the correct CSS style sheets location in the{" "}
              <code>{`<head>`}</code> portion of your HTML document. For
              internal CBP teams you can find the CDN location for these assets
              on our Confluence site. (sorry we cannot list internal links in an
              open forum like Github. If you are an internal team and you need
              assistance with locating these assets send us an email to
              email@cbpdesignsystem.gov. )
              {/* @TODO: Add creative service gov email here */}
            </p>

            <CodeSnippet
              code={`<head>
  <!-- Our project just needs Font Awesome Solid + Brands -->
  <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet">
  <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet">
  <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet">
</head>
<body>
  <i class="fas fa-user"></i> <!-- uses solid style -->
  <i class="fab fa-github-square"></i> <!-- uses brand style -->
</body>`}
              language="language-html"
            />

            <p className="cbp-body">
              Do not load multiple versions or copies of Font Awesome in your
              product. This will eliminate any potential conflicts and having to
              load a conflict detector which will take up extra unnecessary
              space.
            </p>
            <p className="cbp-body">
              For our teams that are not internal to CBP, there are other
              options for loading the Font Awesome library. Please see their
              documentation here for assistance.
            </p>
            <p className="cbp-subhead-text">
              <a href="https://fontawesome.com/start">
                https://fontawesome.com/start
              </a>
            </p>
            <p className="cbp-subhead-text">
              <a href="https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself">
                https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself
              </a>
            </p>
            <p className="cbp-subhead-text">
              <a href="https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers">
                https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers
              </a>
            </p>

            <h3 className="cbp-heading-3">
              Installing the desktop version of Font Awesome
            </h3>
            <p className="cbp-body">
              Font Awesome provides a desktop version of their icon font that
              you can install on your machine. This font relies on ligatures to
              call icons. For example if you have some text formatted with the
              font awesome free font in a solid weight and you type the phrase
              "arrow-circle-down" the words will automatically be replaced with
              the appropriate icon from the library. This works in most word
              processors and graphics software like Sketch™ and the various
              Adobe Creative Suite software applications.
            </p>
            <p className="cbp-body">
              <a href="#">
                Download the font here
                {/* @TODO: Download font link */}
              </a>
            </p>

            <h4 className="cbp-heading-4">
              Installing on your PC (Windows 10):
            </h4>
            <div className="content">
              <ul>
                <li>
                  Unzip the folder containing the fonts first. Fonts cannot be
                  installed if they are zipped.
                </li>
                <li>Open the folder labeled "otfs".</li>
                <li>
                  Open the application called "Font Book" on your mac. It should
                  be in your Applications folder.
                </li>
                <li>
                  Right click on the font file named "Font Awesome 5
                  Brands-Regular-400.otf" and select <strong>Install</strong>.
                </li>
                <li>
                  Right click on the font file named "Font Awesome 5
                  Free-Regular-400.otf" and select <strong>Install</strong>.
                </li>
                <li>
                  Right click on the font file named "Font Awesome 5
                  Free-Solid-400.otf" and select <strong>Install</strong>.
                </li>
                <li>
                  You may need assistance from your IT department depending on
                  what restrictions there are on your particular machine.
                </li>
                <li>
                  You may need to restart your machine for these fonts to be
                  available on your system.
                </li>
              </ul>
            </div>

            <h4 className="cbp-heading-4">
              Installing on your Mac (Font Book):
            </h4>
            <div className="content">
              <ul>
                <li>
                  Unzip the folder containing the fonts first. Fonts cannot be
                  installed if they are zipped.
                </li>
                <li>Open the folder labeled "otfs".</li>
                <li>
                  Double click on the font file named "Font Awesome 5
                  Brands-Regular-400.otf" and select{" "}
                  <strong>Install Font</strong>. Or drag the file into the "All
                  Fonts" folder inside Font Book.
                </li>
                <li>
                  Double click on the font file named "Font Awesome 5
                  Free-Regular-400.otf" nd select <strong>Install Font</strong>.
                  Or drag the file into the "All Fonts" folder inside Font Book.
                </li>
                <li>
                  Right click on the font file named "Font Awesome 5
                  Free-Solid-900.otf" nd select <strong>Install Font</strong>.
                  Or drag the file into the "All Fonts" folder inside Font Book.
                </li>
                <li>
                  You may need assistance from your IT department depending on
                  what restrictions there are on your particular machine.
                </li>
                <li>
                  You may need to restart your machine for these fonts to be
                  available on your system.
                </li>
              </ul>
            </div>

            <h4 className="cbp-heading-4">
              Inserting an icon from the Font Awesome Library
            </h4>
            <p className="cbp-body">
              The CBP Design System utilizes the webfont offering of Font
              Awesome which allows us a lot of flexibility and simplicity when
              inserting icons into our layouts. Normally, in your HTML file you
              can call Font Awesome icons inline by inserting them into an{" "}
              <code>{`<i>`}</code>tag (semantic HTML tag for icons) and the
              icon's prefix and name. We only include the free "solid" and
              "brand" weights of this webfont so those prefixes are "fas" and
              "fab" respectively.
            </p>
            <p className="cbp-subhead-text">For example:</p>
            <CodeSnippet
              code={`<i class="fas fa-camera"></i>
<i class="fab fa-font-awesome"></i>`}
              language="language-html"
            />

            <h2 className="cbp-heading-2">Icon Sizing</h2>
            <p className="cbp-body">
              Icons, just like typography, are a communication tool. They have
              to be legible. Because they are not as ubiquitous as the letters
              in our alphabet, they need to be a little larger than a standard
              letter to be understood. That being said, icons need to be legible
              at a range of sizes.
            </p>
            <p className="cbp-body">
              By default, Font Awesome icons are set to 1rem. In our case 14px.
              You can see that in general an icon that is rectangular might
              occupy space that spans to top of an ascender to the bottom of a
              descender in our Roboto font. When using an icon inline with a
              text label, the icon should inherit the sizing of that text. Icons
              should never be sized below 14px. (sorry subheads no icons for
              you). When using icons on their own, use the font-size property to
              assign sizing.
            </p>

            <h2 className="cbp-heading-2">Icon Spacing</h2>
            <p className="cbp-body">
              Icons that perform a purely decorative function and are not
              interactive should follow general spacing guidelines found on the
              Layout, Grid, and Spacing foundations page here. Obviously the
              bigger the icon is the more weight and importance it is given.
              Icons that perform an interactive function however, must meet
              minimum "touch safe" sizing restrictions. The icon itself may be
              smaller, but the interactive area must be at a minimum 48px x 48px
              and maintain a minimum distance from other interactive elements of
              8px. See the Interactivity foundations section for more
              information about "touch safe" principles.
            </p>

            <h2 className="cbp-heading-2">Decorative Icons</h2>
            <p className="cbp-body">
              When icons are not associated with an interactive function, ie you
              click them and nothing happens, we will consider them to be
              "decorative." In this sense they serve the purpose of enhancing an
              area of content to assist in building the overall hierarchy of the
              page. Sometimes this might mean using Font Awesome icons, or it
              might mean using stylized .svgs made custom for your product. Make
              sure that their use here enhances the layout and helps direct your
              users in the intended flow, not just there for the sake of
              aesthetics. There is a lot more subjectivity here about what to
              use in what context. It really depends on the context you are
              using it in. Developers should be wary though of using high
              affordance iconography though in a non-standard use case. This
              will hurt their value in the long run and may add confusion to
              your product. Also, if the icon you are using is not interactive,
              be careful to not stylize them as if they are interactive, or
              colored in a way that would give cues to a user that this element
              is interactive. This too will introduce unnecessary confusion.
              Otherwise this is an area to bring some personality to your
              product much like a custom illustration would.
            </p>

            <h2 className="cbp-heading-2">Placing an icon onto a shape</h2>
            <p className="cbp-body">
              There are several ways of boosting an icon's visual presence on
              the page usually involving increasing its size. Sometimes though
              you may want to take things a little further especially if that
              icon is interactive. Placing an icon onto a shape like a circle or
              rounded square to further accentuate its importance can be a
              viable option. In situations where you might have a few icons on
              the page and you really want to pay special attention to a
              particular icon (especially if it is used by itself with no
              label). Placing an icon onto a shape can raise its profile. Like
              with iconography in general you must be judicious in this use
              case. Having every icon on a shape dilutes its power. Be wary of
              the shape you choose as well. Certain shapes have meaning already
              attached to them. Triangles are indicators of a warning, octagons
              are associated with stop, etc. Please follow guidance found in the
              button component page here for icons that you are placing on a
              shape that are interactive.
            </p>

            <h2 className="cbp-heading-2">
              When to Create a Custom System Icon
            </h2>
            <p className="cbp-body">
              If your product has a function that is sufficiently important,
              consistently featured, but does not seem to readily have an
              appropriate icon available; it may be time to consider creating a
              custom icon.
            </p>
            <p className="cbp-body">
              In making your custom icon; do not skew, italicize, or otherwise
              alter Font Awesome Icons unless its new meaning is different than
              the standard icon and an appropriate icon for this meaning does
              not already exist in Font Awesome or the CBP Design System custom
              icon libraries.
            </p>
            <p className="cbp-body">
              Make sure you ask yourself if the icon is really necessary before
              you craft one. With each icon you introduce, you are increasing
              cognitive load on your users.
            </p>

            <h3 className="cbp-heading-3">Designing your Custom System icon</h3>
            <p className="cbp-body">
              First download this template. Icons should be exported as .svgs to
              allow them to scale better. Try not to use raster-based icon
              formats like .png, .gif, or .jpg.
            </p>
            <div className="content">
              <ul>
                <li>
                  Icons should feel balanced. This is not to say symmetrical,
                  but they should not appear awkwardly lop-sided. Sometimes
                  optical balance is more important than mathematical balance.
                  Use your best judgement when sizing different elements of your
                  icon.
                </li>
                <li>
                  Icon design should be more "fill focused." It should not
                  overly rely on stroke elements to define its form unless a
                  stroke based form would indicate a change in interactive
                  state. Filled vs. empty star icons are a good example. Stroke
                  heavy icons tend to not scale down as well.
                </li>
                <li>
                  Icons should feel crisp, clean, and concise. This will help
                  its better integrate with existing iconography and not seem
                  out of place. Icons should be efficient at moving a user
                  towards task completion and minimize the time to
                  comprehension. If they are not clear or take a while to
                  decipher what exactly the visual metaphor you are trying to
                  create is, they will hurt your product instead of enhancing
                  it.
                </li>
                <li>
                  Icons are built off of a 16px grid initially. Elements within
                  the icon should align evenly to pixels and not use percentages
                  or half tones to create its form. This will help it scale
                  efficiently without having to worry to much about aliasing
                  issues. Please use the template file when starting to build
                  your icon.
                </li>
                <li>
                  You custom icon should not attempt to replace an existing icon
                  in our libraries. Consistent use across the enterprise is of
                  paramount importance. Redundant iconography hurts the entire
                  enterprise ecosystem, not just your product.
                </li>
                <li>
                  Icons should be designed in the most abstract way possible
                  while balancing the need for recognition. Simple Icons are
                  more legible, scale better, and fit within the existing
                  iconography choices. Icons should be bold and use geometric
                  shapes whenever possible.
                </li>
                <li>
                  CBP Design System icons favor rounded corners most of the time
                  unless rounding a corner would hurt the icon's recognition.
                  This applies to both the shape and any strokes that appear on
                  the icon.
                </li>
                <li>
                  Icons should have a consistent stroke width and stroke
                  terminals. Strokes should be aligned to the interior of the
                  shape in most cases, use your best judgement. But never align
                  strokes to the center of the object as this will cause the
                  strokes to align to half pixels. The minimum stroke width on
                  iconography is 2px. When exporting your .svg remember to
                  expand your strokes.
                </li>
                <li>
                  Icons should be forward-facing and not be in 3-dimensional
                  perspective unless that is absolutely necessary for its
                  meaning.
                </li>
                <li>
                  System icons are monochromatic. They do not have gradients,
                  multiple colors, different colors for the fills and strokes,
                  or other types of treatments.
                </li>
                <li>
                  Icons do not have drop shadows or other like effects applied.
                </li>
                <li>
                  When you introduce custom iconography you should do user
                  testing from time to time to reconfirm that its introduction
                  is not distracting or confusing your users.
                </li>
              </ul>
            </div>

            <h2 className="cbp-heading-2">Perferred SVG Format</h2>
            <p className="cbp-body">
              It is preferable when you are creating your icons to use a vector
              lossless format. Meaning it will scale without any discernible
              loss of detail. In general .svg (scalable vector graphics) is the
              preferred format. It's a little different from other vector
              formats like .eps in that it actually based on an XML-based markup
              language. Normally these files are smaller and leave open the
              possibility to do a lot of editing right in the browser.
            </p>

            <h2 className="cbp-heading-2">Designing your Product Icon</h2>
            <p className="cbp-body">Guidance Coming Soon.</p>

            <h2 className="cbp-heading-2">Illustration General Principles</h2>
            <p className="cbp-body">Guidance Coming Soon.</p>

            <h2 className="cbp-heading-2">Animating Icons</h2>
            <p className="cbp-body">Guidance Coming Soon.</p>

            <h2 className="cbp-heading-2">Accessibility</h2>
            <h3 className="cbp-heading-3">
              Decorative vs. Semantic Uses of Font Awesome Icons
            </h3>
            <p className="cbp-body">
              There are two basic uses for iconography.
            </p>
            <p className="cbp-body">
              Decorative icons help give your product better visual hierarchy,
              may help explain certain concepts, and serve as visual landmarks
              on your page. They do not have interactive functions or provide
              relevant information to the user not already found on the page.
              Providing a title or alt text for these images is unnecessary.
              Redundant icons such as icons that are used in conjunction with a
              text label that do not add pertinent information would fall into
              this category. For screen reader compatibility add an empty alt
              tag to this image to have the reader skip over them.
            </p>
            <CodeSnippet
              code={`<i aria-hidden="true" class="fas fa-car" alt=""></i>
`}
              language="language-html"
            />

            <p className="cbp-body">
              Semantic icons convey information that may not be garnered simply
              by reading the accompanying text on the page, or provides
              interactive functionality. Each icon should be accompanied by
              either assistive text or aria-label. For static icons, use the
              title attribute to describe the meaning of the icon not what it
              looks like. For example, the printer icon would be "print" not
              printer. For interactive icons, use the aria-label attribute to
              describe the meaning of the icon's current state.
            </p>

            <CodeSnippet
              code={`<a href="path/to/shopping/cart" aria-label="View 3 items in your shopping cart">
  <i aria-hidden="true" class="fas fa-shopping-cart"></i>
</a>`}
              language="language-html"
            />

            <p className="cbp-body">
              In either case, it is important that the aria label:
              <code> Aria-hidden="true"</code> is attached to our{" "}
              <code>{`<i>`}</code> elements because it will keep the awkward
              situation where screen readers actually read out the Font Awesome
              name for the icon instead of its intended use. Hearing, "heart
              favorite," might be a little confusing for a user with limited or
              no vision instead of just "favorite."
            </p>
          </section>
        </TabPanel>
      </article>
    </Tabs>
  </Layout>
)

export default IconographyPage
