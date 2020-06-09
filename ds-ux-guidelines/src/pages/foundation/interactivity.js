import React from "react"
import Layout from "../../ds-components/layout/layout"
import ContentHeader from "../../ds-components/content-header/contentHeader"
import SEO from "../../ds-components/seo"
import { Tabs, TabList, Tab, TabPanel } from "react-tabs"
import Image from "../../ds-components/image"

export default () => (
  <Layout>
    <SEO title="Interactivity" />
    <ContentHeader title="Interactivity" contentType="foundation" />

    <Tabs className="tabs--scroll">
      <div className="tabs is-boxed">
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
          <section name="Basics" id="Basics">
            <h2 className="cbp-heading-2">Introduction</h2>
            <p className="cbp-body ">
              Digital products are primarily focused on communication, but they
              also expect their users to do something with this information. At
              CBP, our products enable legitimate trade and travel by presenting
              our officers with information, and then allowing them to make a
              decision on whether that person or thing has a legitimate reason
              for entering or exiting our borders.
            </p>

            <h2 className="cbp-heading-2">Nuggets of Knowledge</h2>
            <div className="content">
              <ul>
                <li>
                  Do not hide information or functionality behind a hover state.
                  Tool tips should be accessible by click or touch.
                </li>

                <li>
                  The disabled state is absolutely not the same as "off." An
                  element in the off state can still be interacted with, while
                  an item that is disabled cannot.
                </li>

                <li>
                  Disabled elements cannot have additional states applied to
                  them.
                </li>

                <li>
                  If the condition that was disabling the element has been
                  satisfied, immediately enable that element.
                </li>

                <li>
                  Visited states can only be used for links inside large blocks
                  of text.
                </li>

                <li>Uppercase text is for interactive elements only.</li>

                <li>
                  The system should give some form of visual cue within 400ms of
                  a user taking an action. This indication should inform the
                  user what the status of their action is, whether it be that
                  the system is working on fulfilling their request, or provide
                  the results of that action.
                  {/*@TODO: insert anchor link here */}
                </li>

                <li>
                  During user testing, if you discover that your users are
                  frequently navigating via search, reconsider your overall site
                  map and information architecture to make navigation more
                  intuitive.
                </li>

                <li>
                  Hover should let the user know exactly which interaction they
                  are about to select and not be ambiguous about it.
                </li>

                <li>
                  When gestures are available there should be appropriate visual
                  cues to the user that something is interactive.
                </li>

                <li>
                  The purpose in adding animation to an interactive element is
                  to give visual feedback to the user that the system has
                  received their input, not to decorate or entertain.
                </li>

                <li>
                  "Calls to Action", or interactive elements that have special
                  importance (like a submit button on a form), should be
                  visually distinct enough to let your user know they are
                  important.
                </li>
              </ul>
            </div>

            <hr />

            <h2 className="cbp-heading-2">Interactive States</h2>
            <p className="cbp-body">
              The visual cues attributed to an interactive element can (and
              should) interpret information about the current status of that
              element. The differences in visual appearance between interactive
              states have to straddle a fine line. They need to be different
              enough that two similar elements in different interactive states
              are distinguishable from each other, but aren't so different that
              the user no longer can tell they are similar elements. These
              states must be applied consistently across the Design System to
              reinforce these patterns, or we risk diluting their intended
              effects.
            </p>
            {/* @TODO: [image] graphic about states */}

            <h3 className="cbp-heading-3">Enabled State</h3>
            <p className="cbp-body">
              The enabled state lets the user know that an element is
              interactive. There are a number of ways we communicate to a user
              that an element is enabled. Color, iconography, changes in
              sentence case, and other treatments may be applied to elements to
              give visual cues.
            </p>
            {/* @TODO: [image] example of enabled elements */}

            <h3 className="cbp-heading-3">Text Buttons and Uppercase</h3>
            <p className="cbp-body">
              Text buttons (with or without a container) apply uppercase
              formatting to give a user a visual cue that this element is
              interactive. This allows buttons to exist without a container,
              when necessary, to save space or create visual hierarchy while
              still maintaining a symmetry of function. Do not use uppercase
              letters on any element that is not interactive. When dealing with
              abbreviations and acronyms (that are not interactive), please use
              small-caps instead. For more information on caps please view the
              <a href="typography"> Typography section of Foundations here.</a>
            </p>

            <h3 className="cbp-heading-3">Visited State</h3>
            <p className="cbp-body">
              Interactive links embedded in blocks of text are the oldest forms
              of interactivity on the web. In the beginning of the web that's
              all there was. Because of the history people have with this
              function, we align to those expectations. This means using (insert
              blue) color and underlining the text. No other text on the page
              should be underlined. If you are looking to add emphasis try
              changing the weight of the text to bold or using italics. If text
              is underlined, the user will expect it to be interactive. Another
              design pattern found in these types of links is the "visited"
              state. This means applying the slightly altered color of (insert
              color) to give users a hint that they have visited that link
              before. This can prevent users from the confusion of forgetting
              what they clicked on previously. When thinking about using the
              visited state, consider the following:
            </p>
            <div className="content">
              <ul>
                <li>
                  When you have multiple content links near each other the
                  visited state helps our users know what they have and have not
                  yet reviewed.
                </li>
                <li>
                  These types of links connect a user with other content, either
                  by sending them to other pages/applications, or other regions
                  on the same page.
                </li>
                <li>Elements that take action should not use this state.</li>
                <li>
                  The visited state should only be applied to links inside
                  blocks of body copy text. This should not be used as a general
                  button or other interaction.
                </li>
                <li>
                  The 8px minimum spacing between interactive elements still
                  applies, so be careful about placing these links next to each
                  other, otherwise your user is likely to click the wrong link.
                  Learn more about{" "}
                  <a href="layouts">Spacing on its Foundations page here.</a>
                </li>
              </ul>
            </div>

            <p className="cbp-body">
              If your situation does not fit these narrow use cases, then do not
              apply the visited state.
            </p>

            <h3 className="cbp-heading-3">Disabled State</h3>
            <p className="cbp-body">
              The disabled state lets the user know that the element is normally
              interactive, but currently has some form of condition applied that
              is keeping the user from interacting with it. It is good practice
              to give a reason to the user as to why the element is currently
              disabled.
            </p>
            <div className="content">
              <ul>
                <li>
                  The disabled state lets the user know that the element is
                  normally interactive, but currently has some form of condition
                  applied that is keeping the user from interacting with it. It
                  is good practice to give a reason to the user as to why the
                  element is currently disabled.
                </li>

                <li>
                  With users on cursor-enabled devices, change the cursor to
                  disabled to help reinforce its state.
                </li>

                <li>
                  Disabled elements cannot have additional states applied to
                  them.
                </li>

                <li>
                  If the condition that was disabling the element has been
                  satisfied, immediately enable that element. Do not wait for a
                  validation event like submitting a form, etc.
                </li>
              </ul>
            </div>

            <h4 className="cbp-heading-4">When to Hide and When to Disable</h4>
            <p className="cbp-body">
              Deciding on whether or not to show a disabled element or hide it
              is a tricky one. In both cases the user cannot interact with that
              element. With showing an element in a disabled state though, you
              can communicate something extra.
            </p>
            <p className="cbp-body">
              Disabled elements remind the user that the element is still there.
              There are a lot of reasons why an element might be in a disabled
              state. The user may be filling out a form and made a mistake on an
              element that is throwing an error. You might want to disable the
              submit call-to-action button to reinforce to the user that they
              have to fix that error before they can proceed. Hiding it just
              adds to the confusion.
            </p>
            <p className="cbp-body">
              In other examples, you might encounter situations where making one
              selection changes your available options elsewhere on the page.
              Disabling and not hiding this element gives the user a visual cue
              about the consequences of this action. The exception to this is
              when choosing an option enables or disables a large group of
              choices. In this instance it might be better to show/hide these
              options rather than showing them as disabled.
            </p>
            <p className="cbp-body">
              Carefully weigh the consequences of hiding elements within your
              UI. Hiding an element in your layout always the possibility of
              your user never finding it. Remember to cover your bases with
              helpful copywriting and proper visual cues to let your users know
              what choices are available, especially as you encounter
              increasingly complicated forms.
            </p>

            <h4 className="cbp-heading-4">What Can't be Disabled</h4>
            <p className="cbp-body">
              Disabled states should not be applied to application or
              enterprise-level navigation. If there is a section of an
              application that is purposefully hidden from a particular user
              (ie. because they do not have the proper access or clearance) omit
              that section. Remember the "Need to Know" principle. To learn
              more, visit the{" "}
              <a href="navigation">Navigation section of foundations here.</a>
            </p>

            <h3 className="cbp-heading-3">Hover State</h3>
            <p className="cbp-body">
              On devices that utilize a cursor, this state change helps
              reinforce that an element is interactive and that a particular
              element is ready to be interacted with. Usually this is coupled
              with a change in form for the cursor.
            </p>
            <p className="cbp-body">
              All interactive elements can have a hover state, though on touch
              devices this state will be unavailable. This treatment can be
              applied to a part, or the whole component. A good example is a
              card. Some cards only have one interaction associated with them,
              so applying a hover state to the whole card makes sense. Other
              cards may be more complicated with several different parts that
              have separate interactions. Hover should let the user know exactly
              which interaction they are about to select and not be ambiguous
              about it. Hover states can be combined with active, selected, or
              pressed states where appropriate.
            </p>
            <p className="cbp-body">
              Only one element on the page can have the hover state applied at a
              time.
            </p>
            <p className="cbp-body">
              Some elements may incorporate a change in elevation to help
              reinforce a hover state.
            </p>

            <Image imgName="interactivity-hover.png" size="700px" />

            <h4 className="cbp-heading-4">
              Using Hover to Hide Elements or Functionality
            </h4>
            <p className="cbp-body">
              As more and more of our users interact with our products on
              touch-enabled devices, information that is concealed behind a
              hover state becomes problematic. This is simply because touch
              devices do not have a hover state. They only respond when the user
              touches the screen.
            </p>
            <p className="cbp-body">
              Tool tips are a common element for hiding hints, or explanations
              to save screen real estate. The problem is our users on phones and
              tablets will have no idea it's there and have no way of accessing
              it. All interactions should be accessible by click or touch, not
              hidden behind hover. The hover state is meant to inform cursor
              users which elements they are able to interact with.
            </p>

            <h3 className="cbp-heading-3">Focused State</h3>
            <p className="cbp-body">
              This state is very similar to hover, but instead of a cursor
              selecting an element it is a keyboard or other assistive
              technology. The focused state has the same overall function as the
              hover state and the element will be styled identically, aside from
              the addition of a cursor.
            </p>
            <div className="content">
              <ul>
                <li>
                  Only one element on the page can have the focused state
                  applied.
                </li>
                <li>
                  When using the "Tab" key or other assistive technology to move
                  from one interactive element to the next, the next item to
                  receive focus must follow "logical reading order" based on the
                  particular composition of the page.
                </li>
                <li>
                  Some elements like text input fields, can receive focus from
                  click or tap interactions.
                </li>
                <li>
                  Just as with hover, the focus state cannot be used to reveal
                  hidden information or functionality.
                </li>
                <li>
                  Focus can be combined with active, selected, on/off states
                  where appropriate.
                </li>
                Because this state is so intrinsically aligned to accessibility
                concerns please view the accessibility concerns, section below
                for more information.
                {/* @TODO: include anchor link to section on focus issues */}
              </ul>
            </div>

            <h3 className="cbp-heading-3">Selected State</h3>
            <p className="cbp-body">
              This state communicates to the user that they have made a
              selection from a group of options. Selected states can be applied
              to a whole container of a component or to elements within
              depending on circumstances. Common elements that utilize this
              state are cards, lists, data tables, menus, etc.
            </p>
            <p className="cbp-body">
              Selected states can be combined with hover, focus, pressed, or
              dragged states where appropriate.
            </p>
            <p className="cbp-body">
              One or many options may be selected depending on the component.
              There should be clear visual cues as to which options are selected
              and those that are not.
            </p>
            <p className="cbp-body">
              Selecting an element may enable/hide/reveal other elements on the
              page when appropriate.
            </p>

            <Image imgName="interactivity-selected.png" size="700px" />
            <Image imgName="interactivity-selected2.png" size="700px" />

            <h3 className="cbp-heading-3">Active State</h3>
            <p className="cbp-body">
              This state lets the user know which option is currently active. It
              is common in navigational elements like tabs, to show what choice
              a user has made, or show a default option.
            </p>
            <p className="cbp-body">
              Active states can be combined with hover, focus, or pressed states
              where appropriate.
            </p>
            <p className="cbp-body">
              Within a grouping, only one element can have the active state
              applied at a time.
            </p>

            <Image imgName="interactivity-active.png" size="700px" />

            <h3 className="cbp-heading-3">Pressed State</h3>
            <p className="cbp-body">
              This state communicates that a user is currently interacting with
              an element via click, tap on a touch-enabled device, or by other
              assistive technology.
            </p>
            <div className="content">
              <ul>
                <li>
                  This state should only be applied to one element at a time as
                  the user interacts with the page.
                </li>

                <li>
                  Pressed states can be combined with hover, focus, selected,
                  active, and on/off states where appropriate.
                </li>

                <li>
                  The system should give some form of visual cue within 400ms of
                  a user taking an action. This indication should inform the
                  user what the status of their action is, whether it be that
                  the system is working on fulfilling their request, or provide
                  the results of that action. (read the section below on the
                  Doherty Threshold for more information).
                  {/* @TODO: Insert anchor link here */}
                </li>
              </ul>
            </div>
            <p className="cbp-body">
              The pressed state, much more than other states, is visually
              associated with animations once a user makes an actual choice. The
              length and complexity of this animation should be relative to its
              importance in the overall hierarchy on the page. The animation on
              clicking a check box should be rather fast and short relative to
              something like a visualization. For more information on animation
              please visit the{" "}
              <a href="animation">
                Animation/Motion section in Foundations here.
              </a>
            </p>

            <Image imgName="interactivity-pressed.png" size="700px" />

            <h3 className="cbp-heading-3">Dragged State</h3>
            <p className="cbp-body">
              This state lets the user know that the element they have "clicked
              and dragged" or dragged by touch, is currently being interacted
              with. Dragging objects is most commonly used to reorder items, or
              add items to a group or process (like upload). When used with a
              cursor-enabled device, the cursor should be expected to change
              form.
            </p>
            <div className="content">
              <ul>
                <li>
                  It is common to use certain iconography to give the user a
                  visual cue that an item can be dragged.
                </li>

                <li>
                  Only one object (or a grouping of selected objects where
                  appropriate) can be dragged at a time.
                </li>

                <li>
                  For non-cosmetic interactions (not just reordering) you should
                  be prepared to offer an alternate method of interaction to
                  meet accessibility standards. For example on upload, you could
                  drag a file to an area or click a button to enable the user to
                  search their local files. Otherwise you may lock out certain
                  users from this functionality.
                </li>
              </ul>
            </div>

            <h3 className="cbp-heading-3">On/Off States</h3>
            <p className="cbp-body">
              On/off states let the user know which option in a grouping is
              currently selected, where only one option can be selected at a
              time. Groupings like toggles or switches commonly have these
              states applied and must have at least one of the available options
              selected (on), with the first option in the group usually selected
              by default. Some groupings like radio buttons and check boxes are
              completely optional, but still only allow for one on state at a
              time.
            </p>

            <h3 className="cbp-heading-3">Error State</h3>
            <p className="cbp-body">
              This lets the user know that something about their input has
              returned an error from the system. For more guidance on error
              handling, please see the Communication section of Foundations
              here.
            </p>

            <hr />

            <h2 className="cbp-heading-2">
              Device Specific Interactions & Gestures
            </h2>
            <p className="cbp-body">
              Mobile phones and tablets, as well as some other devices, have
              brought new ways to interact with digital products. Some of these
              interactions simply replace interactions that occur with a
              keyboard and mouse, while others extend these products into the
              physical world. Because we are not interacting with these products
              in the traditional sense, either by touching or by using another
              new method, we need to make sure these interactions are reinforced
              with sound and haptics to give appropriate feedback. The speed of
              interaction should match that of the input the user is giving. For
              instance, if the user does a fast swipe to scroll on the screen,
              the page should scroll fast and go further than if the user had
              made a small, slow scroll.
            </p>
            <p className="cbp-body">
              When gestures are available there should be appropriate visual
              cues to the user that something is interactive. In some cases
              periodic user onboarding might help with this. Icons and small
              animations are great affordances to indicate a gesture is
              available.
            </p>
            <p className="cbp-body">
              Gestures should always align to the user's expectations and be
              intuitive. Pinching to select something would be weird. Instead
              stick with its more common user case, zoom.
            </p>

            <h3 className="cbp-heading-3">Touch Gestures</h3>

            <h4 className="cbp-heading-4">Tap</h4>
            <p className="cbp-body">
              The tap gesture generally replaces the click function on a mouse.
              There might be some instances where a double tap, or a press and
              hold function would also be applicable.
            </p>

            <h4 className="cbp-heading-4">Scroll and Pan</h4>
            <p className="cbp-body">
              This replaces the scroll function on your mouse or the scroll bar.
              The main exception here is that the speed of input from the user
              has much greater range than that of a traditional input method.
              Horizontal scrolling on mobile devices should be limited to maps
              and other such visualizations.
            </p>

            <h4 className="cbp-heading-4">Drag</h4>
            <p className="cbp-body">
              The drag gesture allows the user to move panels and other elements
              at varied elevations in and out of the viewable area. A long tap
              can activate this gesture to reorder/add items in a group or
              function.
            </p>

            <h4 className="cbp-heading-4">Swipe</h4>
            <p className="cbp-body">
              Swipe allows the user to move between items horizontally. Cards in
              a carousel are a great example of this.
            </p>

            <h4 className="cbp-heading-4">Slide (Single Axis Drag)</h4>
            <p className="cbp-body">
              Essentially this is a tap and drag without the need to do a long
              tap. This would apply to components like sliders.
            </p>

            <h4 className="cbp-heading-4">Pinch</h4>
            <p className="cbp-body">
              This gesture allows the user to zoom in and out of content where
              appropriate. Most commonly used with maps.
            </p>

            <h3 className="cbp-heading-3">Device Interactions</h3>

            <h4 className="cbp-heading-4">Movement</h4>
            <p className="cbp-body">
              Most mobile phones and tablets have accelerometers and onboard
              GPS. Some apps have interactions activated by "shaking" a device.
              Additionally simulated movements the user might perform utilize
              these functions to mimic real life actions like casting from a
              fishing rod or tossing an object.
            </p>

            <h4 className="cbp-heading-4">Location</h4>
            <p className="cbp-body">
              Some interactive elements might utilize the onboard GPS to track
              movement and trigger actions based on location and travel. A good
              example of this might be a user physically entering a geofenced
              area with their mobile device which triggers some sort of
              notification.
            </p>

            <h4 className="cbp-heading-4">NFC and RFID</h4>
            <p className="cbp-body">
              Onboard communication sensors allow mobile devices to interact
              with physical objects in the real world like door locks, payment
              systems, and package lockers.
            </p>

            <h4 className="cbp-heading-4">Camera</h4>
            <p className="cbp-body">
              Devices with onboard cameras may provide extra opportunities for
              interaction by allowing features like OCR (optical character
              recognition), uploading photos, and augmented reality.
            </p>

            <h4 className="cbp-heading-4">Wearables</h4>
            <p className="cbp-body">
              Smartwatches and other devices might have an array of sensors that
              measure everything from heart rate to blood sugar that can trigger
              actions.
            </p>

            <h4 className="cbp-heading-4">Voice</h4>
            <p className="cbp-body">
              Smart devices like phones, tablets, and other voice-enabled
              technology can receive input from users just by them speaking into
              the device's microphone. This might be as simple as
              text-to-speech. As complex as spoken commands given via keyword,
              or for more advanced technologies, artificial intelligence based
              speech interfaces.
            </p>
          </section>
        </TabPanel>

        <TabPanel>
          <h2 className="cbp-heading-2">Types of Interaction</h2>
          <p className="cbp-body">
            Interactivity in digital products manifests itself in many different
            ways. Essentially, anything on the page that accepts user input and
            then reacts, will fall under this category.
          </p>

          <h3 className="cbp-heading-3">Action</h3>
          <p className="cbp-body">
            This category of items are verb focused. Delete, submit, copy,
            remove, sell, buy, etc. Most often this appears as the classic
            button. When a user interacts with an element of this type the
            expectation is that the system will begin executing a task after
            receiving input immediately. The 400ms rule is very important
            because the user needs to know that their input has been received,
            so they can confidently move on to the next task at hand. Read more
            on the Doherty Threshold here.
            {/* @TODO: insert anchor link here */}
          </p>

          <h4 className="cbp-heading-4">Calls to Action</h4>
          <p className="cbp-body">
            These are special instances of action items. They usually represent
            the main action on the page and are at the top of the hierarchical
            food chain. As such, they are usually styled somewhat differently
            than other like elements on the page, so as to pull extra visual
            attention to themselves. This might be a "buy" button on e-commerce
            site, a "submit" button on a form, or a "sign-up" button on a
            newsletter. When designing your layout, take a moment and think
            about what the main action on your page is. Can you find the action
            item very quickly without scanning the entire page? If not, think
            about how you can adjust your layout to make this more prominent. Be
            careful not to make it overwhelmingly different.
          </p>

          <h4 className="cbp-heading-4">Confirmation of Action</h4>
          <p className="cbp-body">
            Some actions have consequences that are so important that we might
            want to double check with the user that they are sure they made the
            right selection. Normally, this is reserved for actions that are
            destructive in nature. Meaning that once this action is taken, it
            likely cannot be taken back. Or, in situations where that action
            might have a significant business impact. Sometimes, this manifests
            itself as a confirmation modal, or a confirmation page, depending on
            its complexity.
          </p>

          <h3 className="cbp-heading-3">Forms</h3>
          <p className="cbp-body">
            These elements collect information from our users. Form fields allow
            users to enter custom input because we cannot accurately predict all
            of the possible entries a user might enter. There may be ways to
            assist users by making auto-fill suggestions once they begin
            entering information, such as when they start entering an address.
            If you have formatting requirements or other restrictions to the
            content (like character limits) be very explicit in your
            instructions to the user. All form elements should have a very clear
            label as to what piece of information it collecting. Home street
            address and business address can mean very different things. The
            answers you get are only as good as the questions you ask.
          </p>

          <h3 className="cbp-heading-3">Selection</h3>
          <p className="cbp-body">
            These items allow users to make a choice, before selecting an
            action. Sometimes these allow a user to make a single choice from a
            grouping like with a radio button or a toggle, or allow your users
            to build groupings like with check boxes, list items, or tags. There
            needs to be a clear distinction between which items are currently
            selected and which are not. Labels and instruction should be clear
            about what the consequence of the selection is, and what is required
            before an action is able to be taken, if applicable.
          </p>

          <h3 className="cbp-heading-3">Navigation</h3>
          <p className="cbp-body">
            Any well-designed site or application is all about having
            information organized in a way that makes sense. Navigation is about
            allowing your users to intuitively move between different pages
            within your application, and within different elements on those
            pages.
          </p>
          <p className="cbp-body">
            In an enterprise like CBP there are essentially three levels of
            navigation:
          </p>
          <div className="content">
            <ul>
              <li>
                <span role="heading" aria-level="4">
                  <strong>Enterprise-wide navigation: </strong>
                </span>
                The Universal Header at the top of all of our products, allows
                our users to move between different applications and sites.
                Links within page content may also allow users to move between
                applications where appropriate.
              </li>

              <li>
                <span role="heading" aria-level="4">
                  <strong>Intra-Application navigation: </strong>
                </span>
                Located below the Universal Header, the Application Header
                allows our users to move between different parts of the same
                application or site. Links featured inside page content may also
                allow similar navigation, but should not be the primary way to
                do so.
              </li>

              <li>
                <span role="heading" aria-level="4">
                  <strong>Content navigation: </strong>
                </span>
                Moving between pages in a form, hitting the next or previous
                button on something like a data table, etc. allows our users to
                move between large sets of connected content within a single
                page of an application or site.
              </li>
            </ul>
          </div>
          <p className="cbp-subhead-text">
            For more information about Navigation, please see its page in the
            Foundations section <a href="navigation">here.</a>
          </p>

          <h3 className="cbp-heading-3">Manipulation</h3>
          <p className="cbp-body">
            These types of elements allow the user to change what content
            appears on the page or how it is formatted. It might be something
            like turning on or off content, like a switch. You might filter the
            content by making selections on different categories of content to
            show or hide. Or sorting content by a measure like dates, quantity,
            or alphabetically. These actions should be non-destructive and allow
            the user to undo or change their decision. There needs to be
            sufficient visual cues about what type of manipulation is currently
            applied, as this will hint to the user they have some ability over
            how to change it.
          </p>

          <h3 className="cbp-heading-3">Links</h3>
          <p className="cbp-body">
            Links allow us to give our users shortcuts to content housed
            elsewhere. Sometimes these lead somewhere else on the same page
            (anchor links). Sometimes these lead to other parts of the same site
            or application. Links that lead to external sites or applications
            should be demarcated with iconography (specifically the{" "}
            <a href="https://fontawesome.com/icons/external-link">
              external link icon
            </a>
            ) letting the user know we are about to send them somewhere outside
            of the application or site they are currently in. As well as opening
            this type of link in a new tab. This will allow our users to have a
            reference back to where they were without hitting the browser's back
            button and help keep them from getting lost.
          </p>

          <h3 className="cbp-heading-3">Search</h3>
          <p className="cbp-body">
            Search is a complicated matter. It can act as navigation, a
            filtering mechanism, or as an escape hatch depending on where it is
            located within the layout. Search should be as flexible as possible,
            allowing in a wide range of inputs to help users find the
            information they need without getting stuck on formatting their
            query. For example, accounting for user input errors like spelling
            or punctuation variation, looking for synonyms, or not being
            dogmatic about character formatting of the search input.
          </p>

          <h4 className="cbp-heading-4">Be Flexible (Postel's Law)</h4>
          <p className="cbp-body">
            Also known as the Robustness Principle, Postel's law is basically
            about being flexible and being the least restrictive you can be,
            without compromising the product. Be liberal in what you accept,
            conservative in what you send. In terms of search, this means not
            being so dogmatic about word order, spelling, punctuation, or other
            formatting so that the user can find what they need instead of a set
            of results that don't match with their expectations. "Fuzzy" search
            is a good example of this where users can misspell words or enter
            synonyms to find what they need. Autofill can also assist users with
            finding what they need and proactively try to eliminate user-error
            before a search is executed.
          </p>

          <h4 className="cbp-heading-4">Search Placement</h4>
          <p className="cbp-body">
            Where the search bar is located is an important cue as to what
            information is being searched against. Placing the search bar in the
            application header gives the impression to the user that results
            will encompass anything on the site or application. Placing it in
            the content area of the page hints that results will be relegated to
            that specific pages' content. Placement and visual context let the
            user have a rough idea of the data set they will be searching
            against. Think carefully about where you will place your search
            functionality when crafting your layouts.
          </p>

          <h4 className="cbp-heading-4">Safety Hatch Problem</h4>
          <p className="cbp-body">
            It is a common practice to put a search bar in your application
            header to allow users to "escape" when they get lost. If you find
            that this is being used heavily, using analytics and user testing,
            you may have an issue with your navigation and information
            architecture. Obviously, people aren't able to find the pages they
            need easily. On simple sites and applications with a few pages or
            less this escape hatch should be entirely unnecessary.
          </p>

          <h3 className="cbp-heading-3">Passive Interaction</h3>
          <p className="cbp-body">
            These types of interactions are generally not direct, conscious
            choices by the user. Normally, it's from something they have set up
            prior and now through the normal course of business they are sending
            input to the system. Wearables are a good example of this, where the
            simple act of walking, exercising, etc. sends data back to a system.
            Where appropriate, notifications or messaging should be clear about
            what input was received, and what actions the system is making on
            their behalf.
          </p>

          <hr />

          <h2 className="cbp-heading-2">
            Distinguishing Interactive Elements From the Rest of the Page
          </h2>
          <p className="cbp-body">
            There are many times where the weight of the decision created by
            clicking a button in one of our systems can have serious
            consequences. That's why having clear, intuitive design distinctions
            between elements that are informative, and those that are
            interactive is so important. A user should be readily able to
            distinguish which elements on the page are interactive, and what the
            consequences of those interactions are.
          </p>

          <h3 className="cbp-heading-3">Meaningful Application of Color</h3>
          <p className="cbp-body">
            Much like making certain typographical choices, sizing, or other
            methods of establishing a hierarchical layout, color plays an
            important role. Especially the consistent application of color.
            Within the CBP Design System there a small handful of colors that
            have "jobs." They communicate a specific idea to our users that an
            element is interactive, what its current state is, or that there is
            something wrong. Do not mix colors to match brands or create a
            unique environment just for your app. Just as with any other
            affordance, these ideas are only easily recalled by our users
            because they are repeatedly exposed to them in a consistent way. For
            our CBP enterprise users, the CBP Design System was not created to
            be "theme-able." We want all of our users to encounter the same set
            of rules for any app they may visit within the enterprise. The
            colors have been carefully chosen to meet accessibility standards,
            to match common understanding, and to allow users to quickly
            distinguish information. For more information on our color palette
            visit the <a href="colors">Colors section in Foundations here.</a>
          </p>

          <h4 className="cbp-heading-4">
            Using an Overlay of Color on Surfaces
          </h4>
          <p className="cbp-body">
            Certain components are built on top of a surface without another
            framing device (ie buttons are self contained but drop-down lists
            are not). Applying a color overlay (a semi-transparent percentage of
            the color assigned to that particular state) on top of the surface
            can help reinforce the interaction and what its current state is.
            Only one of these overlays should be applied at a time. For
            instance, on an active element only display the hover overlay not
            the active one (provided it can actually be interacted with again).
            Overlays should be adjusted percentage wise to maintain
            accessibility depending on the particular color of the surface being
            applied to.
          </p>

          <Image imgName="interactivity-colorOverlay.png" size="700px" />
          <Image imgName="interactivity-colorOverlay2.png" size="700px" />

          <h3 className="cbp-heading-3">Interactive States</h3>
          <p className="cbp-body">
            One aspect unique to interactive elements are that through user
            interaction the elements physically transform into different states.
            These states give users hints about what elements they can
            manipulate and what they can't. As well as what is likely to happen
            if the complete that transaction. Learn more about states in the
            <a href="#Basics"> basics section of this page here.</a>
            {/* @TODO: fix ID routing link */}
          </p>

          <h3 className="cbp-heading-3">Typographic Treatments</h3>
          <p className="cbp-body">
            Changing the color, weight, or styling of text can give users hints
            about what is interactive. On buttons, we change the font weight to
            medium as well as style it as All Caps. This is why All Caps should
            not be used on non-interactive content. For textual links inside
            large blocks of text, we change the color and underline the text to
            give users a hint to functionality. For more information about these
            treatments view this.
            {/* @TODO: add link here */}
          </p>

          <h3 className="cbp-heading-3">Adding Iconography</h3>
          <p className="cbp-body">
            Iconography can add a good visual anchor to pull a user's attention.
            This can be useful in establishing uniqueness. To learn more about
            Iconography,{" "}
            <a href="../iconography">see its Foundations page here.</a>
          </p>

          <h3 className="cbp-heading-3">Skeuomorphism</h3>
          <p className="cbp-body">
            Skeuomorphism is the bridge from the digital world and the physical
            world. When we apply this concept to interactive elements we attach
            meaning by styling an element like a similar, real-world object.
            Buttons that look and behave like a physical button you might find
            on a piece of electronics, dials that look like a knob you might see
            on a radio, or all of the iconographic choices we can make which
            give hints to functionality.
          </p>

          <h3 className="cbp-heading-3">Cursor Changes</h3>
          <p className="cbp-body">
            On traditional mouse and keyboard devices, changing the display of
            the cursor when you're near or interacting with an element gives
            your users hints as to what is or is about to happen. Naturally with
            touch devices these will not appear.
          </p>
          <p className="cbp-body">
            You can set what cursor type you want the user to see when you
            change the cursor CSS property (hover over the title of each bullet
            point to see the corresponding cursor):
          </p>
          <div className="content">
            <ul>
              <li>
                <span role="heading" aria-level="4" style={{ cursor: "help" }}>
                  <strong>Help: </strong>
                </span>{" "}
                You would use this when you are hovering over an element which
                leads to help content, like hints.
              </li>

              <li>
                <span role="heading" aria-level="4" style={{ cursor: "wait" }}>
                  <strong>Wait: </strong>
                </span>{" "}
                You would use this when an element is unable to be interacted
                with because it is still processing a previous task.
              </li>

              <li>
                <span
                  role="heading"
                  aria-level="4"
                  style={{ cursor: "crosshair" }}
                >
                  <strong>Crosshair: </strong>
                </span>{" "}
                You would use this when the system is allowing you to make a
                selection via a polygon.
              </li>

              <li>
                <span
                  role="heading"
                  aria-level="4"
                  style={{ cursor: "zoom-in" }}
                >
                  <strong>Zoom-In: </strong>
                </span>{" "}
                You would use this when the UI is allowing the user to zoom-in,
                such as with a map.
              </li>

              <li>
                <span
                  role="heading"
                  aria-level="4"
                  style={{ cursor: "zoom-out" }}
                >
                  <strong>Zoom-Out: </strong>
                </span>{" "}
                You would use this when the UI is allowing the user to zoom-out,
                such as with a map.
              </li>

              <li>
                <span role="heading" aria-level="4" style={{ cursor: "grab" }}>
                  <strong>Grab: </strong>
                </span>{" "}
                You would use this when the user's cursor is hovering over an
                object which can be moved as part of a drag and drop scenario.
              </li>

              <li>
                <span
                  role="heading"
                  aria-level="4"
                  style={{ cursor: "grabbing" }}
                >
                  <strong>Grabbing: </strong>
                </span>{" "}
                You would use this when the user's cursor has clicked and held
                an object which can be moved as part of a drag and drop
                scenario.
              </li>

              <li>
                <span
                  role="heading"
                  aria-level="4"
                  style={{ cursor: "pointer" }}
                >
                  <strong>Pointer: </strong>
                </span>{" "}
                You would use this when the user's cursor is hovering over an
                interactive element.
              </li>

              <li>
                <span role="heading" aria-level="4" style={{ cursor: "text" }}>
                  <strong>Text: </strong>
                </span>{" "}
                You would use this when the user's cursor is inside of a text
                field.
              </li>

              <li>
                <span
                  role="heading"
                  aria-level="4"
                  style={{ cursor: "not-allowed" }}
                >
                  <strong>Not Allowed: </strong>
                </span>{" "}
                You would use this when the user's cursor is over an interactive
                element which currently in the disabled state. NOT in an off
                state.
              </li>

              <li>
                <span
                  role="heading"
                  aria-level="4"
                  style={{ cursor: "col-resize" }}
                >
                  <strong>Column Resize: </strong>
                </span>{" "}
                You would use this when the user's cursor is hovering over a
                vertical boundary which can have its width adjusted.
              </li>

              <li>
                <span
                  role="heading"
                  aria-level="4"
                  style={{ cursor: "row-resize" }}
                >
                  <strong>Row Resize: </strong>
                </span>{" "}
                You would use this when the user's cursor is hovering over a
                horizontal boundary which can have its height adjusted.
              </li>
            </ul>
          </div>
          <p className="cbp-subhead-text">
            Read more about cursor change implementation here:{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/cursor">
              https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
            </a>
          </p>

          <h3 className="cbp-heading-3">Animation and Behavior</h3>
          <p className="cbp-body">
            Movement has the ability to give quick and informative feedback to
            our users as they interact with our products. With interactive
            elements this can simply be the transition that happens between
            state changes, or more complex to describe the importance or nature
            of the action being taken. A little goes a long way here. The
            purpose is to give visual feedback to the user that the system has
            received their input, not to decorate or entertain. To learn more
            about Motion and Animation, visit its page in Foundations here
          </p>
          {/* @TODO: add link here */}

          <h3 className="cbp-heading-3">Sound and Haptics</h3>
          <p className="cbp-body">
            On devices that rely on touch or other non-traditional inputs, we
            need to give other sensory cues to our users. There's no cursor to
            give us a hint what we're selecting and often on touch devices our
            fingers are obscuring the view of the object we're trying to touch.
            How do we give appropriate feedback to our users that the system has
            accepted their input? Using sounds and vibrations (referred to as
            haptics) we can make sure that the system is giving timely feedback
            in this kind of environment. These attributes are still subject to
            standardized formatting, making sure we are giving a consistent
            experience. Actions that are positive or neutral in nature have a
            certain tone and vibration that is distinct from an action that
            might be destructive in nature like delete. While haptics may be
            only available on a select number of devices, UI sounds are
            generally applicable on all devices, provided it has a speaker. To
            learn more about UI Sounds and Haptics, view the section of
            Foundations here.
            {/* @TODO: add link here */}
          </p>

          <hr />

          <h2 className="cbp-heading-2">Maintaining Interactive Hierarchy</h2>
          <p className="cbp-body">
            Not all interactions are equal. Different interactive elements on
            the page may be parts of groups which you will want to treat
            similarly. Others, may play larger or smaller roles in the overall
            function of the page. These will need different types of treatments
            to give the user cues about what level of importance an item has,
            and what content it is connected to.
          </p>

          <h3 className="cbp-heading-3">Proximity, Grouping, and Placement</h3>
          <p className="cbp-body">
            The way we style Interactive elements, where we place them, and
            other visual cues, let our users know what these elements can do and
            how they affect content on the page.
          </p>

          <h4 className="cbp-heading-4">
            Items that Share a Common Boundary are Associated Together- Gestalt
            Law of Common Region
          </h4>

          <Image imgName="interactivity-gestaltCommonRegion.png" />

          <p className="cbp-body">
            Elements that share a common boundary or enclosure are usually
            associated together. For example toggles share a border as a
            boundary and therefore are perceived to be connected in purpose.
          </p>

          <h4 className="cbp-heading-4">
            Items that are Close Together are Asociated Together- Gestalt Law of
            Proximity
          </h4>
          <p className="cbp-body">
            Items that are close to each other are perceived to be a group and
            have some degree of connectedness. If you have two groups of cards
            and have a larger space between the groups than between the cards
            themselves, the mind will perceive two groupings even if all of the
            cards are visually similar.
          </p>
          <p className="cbp-body">
            When it comes to building connection to a piece of content on the
            page, how far or close the element is makes or breaks that
            relationship. Putting the previous or next page controls for a data
            table completely separate from the data table doesn't make much
            sense.
          </p>
          <Image imgName="interactivity-gestaltProximity.png" />

          <h4 className="cbp-heading-4">
            Items that Look or Behave the Same are Associated Together - Gestalt
            Law of Similarity
          </h4>
          <p className="cbp-body">
            People have a tendency to view elements with similar characteristics
            like color, shape, size, orientation, and behavior as related. A row
            of similarly styled buttons would indicate that a user is being
            given a choice of a set of actions to take. And that each of these
            decisions is related to the same issue.
          </p>

          <Image imgName="interactivity-gestaltSimilarity.png" />

          <h4 className="cbp-heading-4">
            Items that are Aligned Together are Associated Together - Gestalt
            Law of Continuation
          </h4>
          <p className="cbp-body">
            Alignment matters. Items arranged in a continual line, either
            straight or curved, will be associated together. People's eyes tend
            to follow paths until they are interrupted.
          </p>
          <Image imgName="interactivity-gestaltContinuation.png" />

          <h4 className="cbp-heading-4">
            Elements that Move in the Same Direction are Associated Together -
            Gestalt Law of Common Fate
          </h4>
          <p className="cbp-body">
            Elements that move in the same direction are perceived as more
            related than objects that remain stationary or move in other
            directions. The behaviors we attach to state or animations that we
            create respond to user input can breed other types of
            interconnectivity depending on the direction of that movement. The
            drawer component is a good example of this. All of the content
            placed into the drawer moves together as it is opened and closed.
            This helps reinforce that this collection of information is related
            to each other.
          </p>
          <Image imgName="interactivity-gestaltCommonFate.png" />

          <h4 className="cbp-heading-4">
            Items that are Parallel to Each Other are Associated Together -
            Parallelism
          </h4>
          <p className="cbp-body">
            Elements that are parallel to each other are perceived as related.
            If you align stack a few buttons on top of each other vertically,
            that collection of buttons will be viewed as a grouping. This is a
            bit of a combination of proximity and a few other concepts, but that
            alignment adds another layer of reinforcement.
          </p>

          <h4 className="cbp-heading-4">
            Items that are Connected are Associated Together - Law of Uniform
            Connectedness
          </h4>
          <p className="cbp-body">
            Elements that are connected are going to have a stronger degree of
            connection than elements that are not. This principle seems to
            transcend others. Where two objects may be styled differently,
            behave differently, or have different content drawing a physical
            connection between these objects automatically creates a
            relationship in our minds. A good example of this might be a link
            analysis visualization where different nodes are connected with
            lines. Each node is different, but that simple line creates a
            relationship. Even altering the styling of that line can change the
            nature of the relationship. Be wary of connecting content that is
            not related with visual devices.
          </p>
          <Image
            imgName="interactivity-gestaltConnectedness.png"
            size="300px"
          />

          <h4 className="cbp-heading-4">
            The Eye is Drawn to Points of Contrast - Focal Points
          </h4>
          <p className="cbp-body">
            Our eyes are naturally drawn to points of contrast. What is
            different in a group of things that look the same? Where do things
            intersect to create a point of visual tension? This is where you
            will want to associate a "call to action" or other important
            element. Elements you add contrast to will sit at the very top of
            your visual hierarchy next to elements you add motion to.
          </p>
          <Image imgName="interactivity-gestaltFocalPoints.png" />

          <h4 className="cbp-heading-4">
            Size and Placement Affect Productivity- Fitts' Law
          </h4>
          <p className="cbp-body">
            The speed at which users can make selections directly affects
            productivity. Fitt's law tries to quantify how size and distance
            affect this measure of productivity. There are two main aspects to
            this concept.
          </p>
          <div className="content">
            <ul>
              <li>
                The larger the size of an interactive element, the less likely
                users will encounter an error by making the correct selection on
                the first try. Smaller surface areas require a greater level of
                dexterity and control. This obviously has a point of diminishing
                returns where increasing the object's size no longer produces
                any gains in productivity.
              </li>
              <Image imgName="interactivity-fittsLaw.jpg" />
              <li>
                The shorter the distance between a user's task/attention area
                and the corresponding task-related interactive element the less
                time it takes for the user to realize they are connected and
                that there are options available for them to consider. For
                example, putting a previous/next page control for data table in
                a completely different area than the table just doesn't make
                sense. Drop down menus for instance, should only be used under
                certain circumstances because they increase the distance the
                user has to travel between where they first interacted with the
                element and the subsequent selection.
              </li>
              <Image imgName="interactivity-fittsLaw2.jpg" />
              <li>
                <strong>Time</strong> is the amount of time required to complete
                the movement.
              </li>
              <li>
                <strong>A and B</strong> are empirically determined regression
                coefficients, which is basically a fancy way of stating they are
                values gained from direct observation that build a slope.
              </li>
              <li>
                <strong>Distance</strong> is a measurement from the starting
                point to the end point (target object).
              </li>
              <li>
                <strong>Width</strong> is the width of the target object.
              </li>
            </ul>
          </div>

          <h3 className="cbp-heading-3">Touch Targets</h3>
          <p className="cbp-body">
            Touch targets are the active area on an interactive element. The
            physical dimensions of what is clickable or tappable. Touch targets
            should be large enough for users to both discern what it is and to
            accurately select them. Our goal is at least 48px x 48px in size.
          </p>
          <p className="cbp-body">
            Touch targets should have ample spacing between each other. This can
            prevent accidental choices from being made, which slow down
            productivity and may be destructive in nature (as selecting delete
            by accident). The minimum spacing is 8px between touch targets but
            should increase based on relative sizing of the interactive
            elements. The bigger the elements, the more space should be applied
            between them.
          </p>
          <p className="cbp-body">
            Touch targets should be preferably be placed in areas of an
            interface that allows them to be easily acquired.
          </p>

          <h3 className="cbp-heading-3">Fitt's Index of Performance</h3>
          <p className="cbp-body">
            Fitt's Index is about the relationship with the physical interaction
            with a device, and the physical exertion taken on the human
            skeletal-muscular system by completing that interaction. If you are
            using a desktop system this might refer to the fatigue sustained by
            having to swing wildly back and forth to different areas of the
            screen, needing to know lots of hotkey commands, or other repetitive
            movements. With mobile this might refer to having the thumb often
            stretching to the top of the screen, which can be difficult when
            handling a device in a single hand. The most extreme example might
            be wall-mounted touch-screens, as pretty much all interaction with
            them can become tiring very quickly. The converse of this is making
            one-way or destructive interactions more difficult, so that they are
            not done accidentally. For example, turning off the mobile device by
            first having to hold the power button down then a sliding button to
            turn off completely. This keeps the user from accidentally
            completing this action.
          </p>

          <h4 className="cbp-heading-4">
            Alignment Based on Device Viewport Constraints
          </h4>
          <p className="cbp-body">
            Corners are the easiest places for the user to reach because they
            have "infinite edges." The cursor automatically aligns or the user's
            touch is limited by the physical dimensions of the device. Either
            way, the edge is always easier to find.
          </p>

          <h3 className="cbp-heading-3">Von Restorff Effect</h3>
          <p className="cbp-body">
            The Von Restorff effect (also known as the isolation effect)
            predicts that when multiple similar objects are present, the one
            that differs from the rest is most likely to be remembered. If you
            have an important action on the page such as a submit on a form, it
            should be distinctive enough visually to let your user know that
            it’s more important.
          </p>
          <Image imgName="interactivity-vonRestorff.png" />

          <h3 className="cbp-heading-3">Serial Position Effect</h3>
          <p className="cbp-body">
            The Serial Position Effect is the propensity of a user to best
            remember the first and last items in a series. When it comes to
            short term memory, the first few items you see don't have little
            cognitive load on your user because they haven't seen any other part
            of the list yet. As your user goes through the list and gets to the
            end though, because the last few items are in your recent memory
            they also put less cognitive load on your user. Unfortunately the
            stuff in the middle suffers, and more so as lists get longer. As
            such, important information should be emphasized on the ends of the
            lists.
          </p>
          <Image imgName="interactivity-serialPosition.png" size="700px" />

          <hr />

          <h2 className="cbp-heading-2">Cognitive Load</h2>
          <p className="cbp-body">
            Cognitive load refers to the total amount of mental effort being
            used in a person’s working memory. To put it simply, it is the
            amount of thought you need to exercise in order to complete a
            specific task. Basically this is the human brain's equivalent to
            RAM.
          </p>

          <h3 className="cbp-heading-3">Intristic Cognitive Load</h3>
          <p className="cbp-body">
            Intrinsic cognitive load is how much of your mental capacity is
            required to process a new piece of information. Does this label make
            sense? Is this error message explaining what is actually wrong so I
            can fix it? Basically how much energy is consumed trying to
            understand what the user is supposed to do. This is why short,
            simple copy (micro copy) is so important and can be very effective
            at reducing cognitive load provided it gives all necessary
            instruction.
          </p>
          <p className="cbp-body">
            The more times a user is exposed to a piece of instruction the less
            cognitive load is required for them to understand it. This is why so
            many times we find users get used to bad experiences. Familiarity is
            often confused with success. This is also why users may be hesitant
            to change. It took them so long to get used to the first crappy
            experience they don't want to repeat it.
          </p>
          <Image imgName="interactivity-intristicCogLoad.png" size="700px" />

          <h3 className="cbp-heading-3">Extraneous Cognitive Load</h3>
          <p className="cbp-body">
            Extraneous cognitive load is directly related to how the information
            is designed, because it takes up mental space doesn't necessarily
            help users understand the content. Does the information have good
            hierarchy? Is it aesthetically pleasing? Does the way it is
            presented reinforce what the user is supposed to do, or does it get
            in the way? Good design can reduce overall cognitive load. The goal
            here is to simply make sure that design doesn't add unnecessary load
            to the user. The best you can do here is not add to the problem.
          </p>

          <h4 className="cbp-heading-4">Aesthetic Usability Effect</h4>
          <p className="cbp-body">
            Aesthetically pleasing designs can make minor usability issues more
            tolerable. They can mask these usability issues on early visits, but
            after each subsequent visit these issues become more and more
            apparent. This can complicate user testing in that a pretty site
            might only garner feedback in relation to the way it looks and not
            how it functions. Which is why it is important to continue doing
            research over time so this effect can wear off. A site can be
            pretty, but after struggling enough times to find what you need,
            that feedback will rise to the top.
          </p>

          <h3 className="cbp-heading-3">Germane Cognitive Load</h3>
          <p className="cbp-body">
            Humans are, at our core, pattern-recognition machines. Germane
            cognitive load is the amount of mental capacity devoted to
            understanding patterns in information architecture. Why are these
            items grouped together? How much time do I devote to knowing where
            in the hierarchy of the site I currently am, and how do I navigate
            to this other area of the site? Just like with intrinsic load, this
            wanes over time with repeated exposure. You should be careful about
            making significant changes to the navigation and organization of an
            application as it can increase the cognitive load of the user before
            they become accustomed to the new pattern.
          </p>

          <hr />

          <h2 className="cbp-heading-2">
            Designing for Limited Mental Bandwidth
          </h2>

          <h3 className="cbp-heading-3">Recognition vs. Recall</h3>
          <p className="cbp-body">
            Recognition is preferable because it involves more cues than recall
            for the user to understand the meaning of a piece of information or
            action. This helps reduce cognitive load on our users becuase they
            intuitively know what is expected of them. This is why mulitple
            choice drop downs can be more effective than an open text field. The
            user doesn't have to search their memory for the answer, but instead
            recognizes the correct choice quickly from a list of possible
            selections.
          </p>

          <h4 className="cbp-heading-4">Miller's Law</h4>
          <p className="cbp-body">
            Miller's Law states that the average person can only keep 7 items
            (+/-2) in their working memory. One way we can increase the
            effectiveness of our own brains is by chunking or categorizing
            information by likeness.
          </p>

          <h3 className="cbp-heading-3">Following Existing Mental Models</h3>
          <p className="cbp-body">
            Your digital product is very likely not the first one your user has
            encountered. Over time, with exposure to other digital products,
            users form perceptions about how certain types of interactions are
            supposed to work. For the most part a lot of expectations users have
            will be shared with the general population, but in the end every
            person possesses their own set of mental models. As an enterprise
            this presents us with a unique opportunity to mold the expectations
            of our users. We can choose to adopt these existing mental models to
            a degree and use them to our advantage. Or, we can choose to buck
            the trend to make something unique. There is a price to pay either
            way.
          </p>

          <h4 className="cbp-heading-4">Existing Mental Models</h4>
          <p className="cbp-body">
            When following existing mental models you need to keep mind just
            because something is popular (prominently featured across the
            general web) does not necessarily mean that is appropriate for your
            purposes or that it is indeed the best decision. People get used to
            bad UI all the time. Don't let familiarity necessarily equate to
            superiority. There's really no such thing as a universal experience
            on the web but certain best practices are widely accepted. That's
            why it is so important to have a consistent experience across the
            CBP enterprise. We can build upon existing best practices and
            reinforce our UX choices by repeated exposure to our products. This
            allows us to reduce cognitive load on our users by letting them
            focus on doing their jobs and not waste time learning new mental
            models, except where necessary.
          </p>

          <h4 className="cbp-heading-4">Jakob's Law (Nielsen)</h4>
          <p className="cbp-body">
            Users spend most of their time on other sites. This means that users
            prefer your site to work the same way as all the other sites they
            already know. Typically we refer to these common experiences as
            affordances. Users will come to your product expecting similar
            functionality they have encountered before.
          </p>

          <h4 className="cbp-heading-4">Crafting New Mental Models</h4>
          <p className="cbp-body">
            When creating an interaction unique to your experience, sometimes
            the change you make is quite intuitive. Sometimes, in a user's first
            few exposures to this pattern, they may not make an immediate
            connection to what is expected from them. In these cases, you pay a
            cost of added cognitive load in making these changes.
          </p>
          <p className="cbp-body">
            User testing can be an effective way to know if the change you are
            making is both effective, and intuitive. It is encouraged to do
            testing like A/B testing between the previous iteration of the UI
            and the new, proposed UI to see if users get confused, lost, or make
            errors based on these changes versus the old user interface.
          </p>
          <p className="cbp-body">
            Another way to manage added cognitive load when changing a
            particular feature is to allow your users to continue to access that
            familiar version while they become accustomed to the new way of
            doing things. For example, you have a page that is heavily laid out
            in large data tables but you are moving towards a card based layout.
            It may be helpful to maintain these two view simultaneously for a
            while. Then get rid of the table view provided it wasn't essential
            and the new view is successful.
          </p>

          <h3 className="cbp-heading-3">The Doherty Threshold</h3>
          <p className="cbp-body">
            To increase user productivity, the system should provide some form
            of feedback to the user within 400ms of user interaction. In the
            event of an action taking too long to respond, use perceived
            performance to reduce the perception of a lag if the system taking
            too long to respond. (learn more about perceived performance in the
            Communications section of foundations here).
            {/* @TODO: insert link here */}
          </p>
          <div className="content">
            <ul>
              <li>
                <span role="heading" aria-level="4">
                  <strong>User Response Time:</strong>
                </span>{" "}
                The time a user is required to think between the user receiving
                a complete response to an command and the time the user can
                enter the next command.
              </li>

              <li>
                <span role="heading" aria-level="4">
                  <strong>System Response Time:</strong>
                </span>{" "}
                The time between a user giving the system a command and when the
                system is able to display a complete response.
              </li>
              <figure>
                <Image
                  imgName="interactivity-dohertyThreshold.png"
                  size="700px"
                />
                <figcaption>
                  © Copyright IBM Corporation 1982, 1997. All rights reserved.
                </figcaption>
              </figure>
            </ul>
          </div>

          <h3 className="cbp-heading-3">Hick's Law</h3>
          <p className="cbp-body">
            The cognitive load it takes to make a decision increases with the
            number and complexity of choices. With well thought out information
            architecture and limiting the amount of options to what is necessary
            we can speed up the time it takes our users to come to a decision
            point and increase productivity.
          </p>
          <Image imgName="interactivity-hicksLaw.png" size="700px" />

          <h4 className="cbp-heading-4">When to Apply</h4>
          <p className="cbp-body">
            It is important to apply Hick's Law in a fashion that is relevant to
            the situation the user is presently in. With user workflows the
            inverted pyramid comes into play. At the highest level, information
            is kept to the minimum needed for the user to make a choice about
            where to delve more deeply. As they move down the funnel,
            information gets more specific and options for actions increase. The
            quicker a user needs to make a decision, the fewer choices you
            should be giving to your user. The more deliberation needed before
            taking an action, the less Hick's law applies. Though there is still
            always the possibility of choice fatigue.
          </p>

          <h4 className="cbp-heading-4">Helpful Tips in Reducing Complexity</h4>
          <div className="content">
            <ul>
              <li>
                Try simplifying choices for complex tasks by obscuring its
                complexity into smaller steps. Form wizards are a good example
                of this. Respect your user's time. It is money after all.
              </li>

              <li>
                Use progressive loading to minimize cognitive load for new
                users. Reducing the number of perceived options can help your
                user process lots of options in an efficient manner. Shopping
                results or photo galleries are good examples of this.
              </li>

              <li>
                Sometimes separating or placing the most likely choices first
                can help your users make decisions. Make sure that you are not
                introducing bias into the system by simply by changing an
                option's serial position. Navigation is also a good example of
                this. Names for collections of pages and sub pages selectable
                through submenus.
              </li>

              <li>
                When your user is under pressure to make quick decisions they
                often get "tunnel vision." Keep choices to a minimum when
                response time is critical as it speeds up the time used to make
                decisions. It's also more likely with fewer options that your
                user will be able to accomplish their goal and not get lost.
                People tend to like working on older cars not just because
                they're attractive looking, but because they're easier to work
                on. Less moving parts, easier to fix.
              </li>

              <li>
                Take care not to oversimplify. A user that can't find the
                appropriate option can get frustrated and give up, or make the
                wrong decision because the more appropriate one wasn't present.
              </li>

              <li>
                Having too many options with the same perceived hierarchy can
                lead to poor user experience too. Too many options? Maybe it's
                time for a card-sorting exercise to reevaluate whether your
                categories are efficient. Use "Occam's Razor" as a guiding
                principle here. "The simplest solution is usually the best."
              </li>

              <li>
                In some instances anticipatory design might provide the user
                with a quick way to make a decision. Type aheads in search
                fields are a great example of this. Machine learning can help
                identify patterns and present a likely candidate for user to
                choose. This should not be applied to actions where the decision
                can have dire consequences so as to not introduce unwanted bias
                into that kind of decision-making process.
              </li>
            </ul>
            <Image imgName="interactivity-reduceComplexity.png" size="700px" />
          </div>

          <h3 className="cbp-heading-3">Tessler's Law</h3>
          <p className="cbp-body">
            In direct opposition to Hick's Law, <strong>Tessler's Law</strong>{" "}
            (also known as the Law of Conservation of Complexity) states that
            there is a certain amount of complexity in a system which cannot be
            reduced. At CBP, most of the systems we build are data rich, dense
            UIs that have very robust capabilities. We need to make sure that
            during the process of abstraction into the simplest terms, we don't
            oversimplify the solution to the point we lose functionality or
            distract from the business purpose for which the system was built.
          </p>
          <p className="cbp-body">
            The main choice here is, do we put that choice on our users via
            controls, or do we have the system handle that complexity on behalf
            of the user. With user input, the choices we make about handling
            complexity are mostly about how its presented, what instruction is
            present, and the resulting behavior. When the system handles the
            complexity on behalf of the user, there are a lot of assumptions
            that come into play, hidden controls, etc that can become
            problematic very easily for our users to properly understand or
            follow.
          </p>

          <h3 className="cbp-heading-3">Zeigarnik Effect</h3>
          <p className="cbp-body">
            The Zeigarnik Effect is where users are more able to recall actions
            that are incomplete, rather than complete. The brain tends to fixate
            on tasks left incomplete so you can use this to your advantage in
            long forms by using visual cues to reinforce steps or percentage
            complete.
          </p>
          <Image imgName="interactivity-zeigarnikEffect.jpg" size="700px" />

          <hr />

          <h2 className="cbp-heading-2">
            Category Size and Typicality Effects
          </h2>
          <p className="cbp-body">
            The <strong>Category Size Effect</strong> says that people respond
            faster when the item is a member of a smaller, more specific
            category (eagle is a bird vs eagle is an animal). And the{" "}
            <strong>Typicality Effect</strong> says that people are faster to
            respond to usual or typical members. For example, when asked to name
            a bird an individual is much more likely to respond with robin
            instead of penguin.
          </p>
          <Image imgName="interactivity-categorySize.jpg" size="700px" />

          <hr />

          <h2 className="cbp-heading-2">Accessibility Concerns</h2>

          <h3 className="cbp-heading-3">Focus and Activation Issues</h3>

          <h4 className="cbp-heading-4">Tab Order</h4>
          <p className="cbp-body">
            Interactive elements on the page are selected by users who use
            assistive technology through the focus state. Some users will use
            the "Tab" key on their keyboard or another technology to "tab"
            through these interactive elements. This sequence of moving from one
            interactive element to another must follow logical reading order.
            Normally this means the top-down, left-right reading order should be
            followed, but in general this refers to the reading order of the
            content on the page by hierarchical standards. Some mobile-optimized
            applications may utilize a bottom navigation which would put it
            above any content on the page in reading order despite being
            physically below said content. Use your best judgement and imagine
            the order in which you intend your user to interact with this
            content. That should define your reading order. Unfortunately due to
            the subjectivity of this criteria it can never be fully automated.
            Try and order your elements in the DOM to match tab order, rather
            than using the "tabindex" attribute to force elements around as this
            makes your code increasingly fragile.
          </p>
          <div className="content">
            <ol>
              <li>
                Focusable components need to receive focus in an order that
                preserves meaning and operability only when navigation sequences
                affect meaning and operability.
              </li>

              <li>
                In those cases where it is required, there may be more than one
                order that will preserve meaning and operability.
              </li>

              <li>
                If there is more than one order that preserves meaning and
                operability, only one of them needs to be provided.
              </li>
            </ol>
          </div>

          <h4 className="cbp-heading-4">Reveal on Hover</h4>
          <p className="cbp-body">
            Revealing new content or features upon hovering presents several
            accessibility issues.
          </p>
          <div className="content">
            <ol>
              <li>
                The user may not have intended to trigger that interaction.
              </li>

              <li>The user may not be aware new content has appeared.</li>

              <li>
                The new content may interfere with the user's ability to perform
                a task.
              </li>

              <li>
                The new content or functionality may be unavailable to users on
                other types of devices who may not accept hover as a possible
                state of being.
              </li>
            </ol>
          </div>
          <p className="cbp-body">
            In order to mitigate these issues, this content or functionality
            must be dismissible, hoverable, and persistent. But really it's just
            easier to make it accessible by another means of interaction like an
            icon which opens/closes with a click/tap.
          </p>
          <p className="cbp-body">
            All of these concerns apply equally to the focus state.
          </p>

          <h4 className="cbp-heading-4">Keyboard (Focus) Trap</h4>
          <p className="cbp-body">
            Focus traps are common development errors where a keyboard user is
            tabbing through content and encounters a grouping of elements which,
            instead of allowing the user to move down the tab order correctly,
            send the user's focus around in circles (a trap). This functionally
            kills all usability for that user on this page. The usual culprit
            here is a plugin or other embedded content.
          </p>

          <h4 className="cbp-heading-4">Skip Links</h4>
          <p className="cbp-body">
            It is common practice for web-based digital products to have a "skip
            link" as the very first element in the page. This allow users to
            skip repetitive content like navigation and go straight to the main
            content part of the page. Usually the first tab a user activates
            focuses on this "hidden" control. Skip links are usually hidden
            until focused. If the user selects the link, focus will be moved to
            the main content area of the page. If they move focus beyond the
            skip link, assistive technology will begin with the first element on
            the page (most likely navigation). This should always be the first
            item in your tab order.
          </p>

          <h4 className="cbp-heading-4">Hover/Focus States</h4>
          <p className="cbp-body">
            All interactive elements should have a treatment consistent with the
            CBP Design System to visually identify its appearance during a hover
            or focus state (they should appear identically).
          </p>

          <h4 className="cbp-heading-4">Flexible Input</h4>
          <p className="cbp-body">
            In instances where interaction is based on clicking and holding an
            element then moving it (drag and drop) or gestures that involve
            tapping and moving your fingers across a screen, the input the
            system receives should be flexible. Some users will have a hard time
            drawing a straight line when using a component like a slider. If
            they go a little vertical the system should still respond according
            to the general direction of input. Pinch to zoom shouldn't matter in
            what direction your fingers are going as long as they are going
            closer or farther from each other.
          </p>
          <p className="cbp-body">
            Users may also inadvertently click or tap elements so we need a way
            to cancel these actions. The most common way to do so is to not
            accept that input until the "up event" is accepted. For example, if
            you tap a button by accident and while your finger is still pressed
            you move your finger off the button target area. Upon lifting your
            finger the action is not taken.
          </p>

          <h4 className="cbp-heading-4">Touch Target Size</h4>
          <p className="cbp-body">
            All interactive elements should have a touch target area of at least
            48px by 48px. The WCAG standard is 44px but the well-documented
            Google rationale for 48px is more compelling. Plus, this exceeds the
            required standard.
          </p>

          <h4 className="cbp-heading-4">
            Consistent and Predictable Interactions
          </h4>
          <p className="cbp-body">
            Similar interactive elements should behave similarly. Buttons should
            behave in a cohesive way no matter what part of the product you are
            in, same as text input fields, or any other element. There should be
            sufficient cues to the user when they should expect a common UI
            element will not behave in a way that is familiar. For example
            hitting the back button on a form may trigger a warning dialogue
            modal that tells the user they may lose unsaved work.
          </p>
          <p className="cbp-body">
            Interactive elements that have identical functionality should have
            the same accessible name. Having two text fields that are addresses
            but with completely different names would be confusing and add
            cognitive load to your users.
          </p>

          {/* @TODO: Insert Success Criterion stuff here if required */}

          <h3 className="cbp-heading-3">Interactive Element Styling Issues</h3>
          <p className="cbp-body">
            Using only color, shape, size, visual location, orientation, or
            sound to provide the sole means of understanding and operating
            content on your page is problematic as it can either alienate those
            with a visual acuity disorder (color, shape, size, location,
            orientation) or those with a hearing disorder (sounds). Think about
            how to incorporate cues that might close the gap so that each type
            of user can understand your content. Giving instruction to your user
            that "fields labeled in red are required" would not be sufficient
            without also giving another means of indicating the field is
            required like adding a symbol, changing text styles, or labeling
            each individual field with the word required.
          </p>

          <h4 className="cbp-heading-4">Sensory Instruction</h4>
          <p className="cbp-body">
            In your instruction to users, do not rely on wording that would only
            apply to users with full use of a particular sense such as sight or
            hearing. All of the above can be tricky thing for someone who is
            blind. Try to be more precise with your language or give alternative
            instruction that might be picked up by assistive technology to
            explain what you mean in a way your users can understand.
          </p>

          <h4 className="cbp-heading-4">Minimum Contrast</h4>
          <p className="cbp-body">
            Just as with any element on the page that conveys information to
            your users (text, iconography) you should be meeting or exceeding
            the minimum contrast ratios of 4.5:1.
          </p>

          <h4 className="cbp-heading-4">Images as Controls</h4>
          <p className="cbp-body">
            You should try to avoid using images of buttons over using a
            semantically coded one, it complicates matters more than it's worth
            to have a specific styling.
          </p>
          {/* @TODO: Insert Success Criterion stuff here if required */}

          <h3 className="cbp-heading-3">Input Purpose Issues</h3>

          <h4 className="cbp-heading-4">Relevant Instruction</h4>
          <p className="cbp-body">
            Input fields need an appropriate level of instruction so that the
            user can readily identify what the intended purpose of the field is.
            Visible labels and appropriate instruction help us understand the
            function of different input fields. Programmatically identifying the
            input type by category for example, input type="tel", input
            type="email", or input type="password" can help give users with
            assistive technology cues to an input's purpose or intended format
            when paired with a robust label and instruction. Where inputs have a
            label visually next to it, it must also match its programmatic
            label.
          </p>

          <h4 className="cbp-heading-4">Keyboard Accessible</h4>
          <p className="cbp-body">
            All interactive elements should be accessible by using a keyboard
            without needing to do specific key combinations in a certain amount
            of time. Examples of "specific timings for individual keystrokes"
            include situations where a user would be required to repeat or
            execute multiple keystrokes within a short period of time or where a
            key must be held down for an extended period before the keystroke is
            registered. Some types of interaction will never be able to be
            replicated with a keyboard like freehand drawing and some gaming,
            and those elements are exempt. There are common key commands
            associated with certain types of interactions such as the tab key
            allowing users to move down the tab order from one interactive
            element to the next. Where your UI requires a non-standard key
            command, you need to provide appropriate helper text to explain its
            function. These keyboard shortcuts need to have the option for the
            user to disable these functions as well. Users who access your
            product via voice may become frustrated as saying a single letter
            character out loud has the unintended effect of activating a
            shortcut.
          </p>

          <h4 className="cbp-heading-4">Link Purpose</h4>
          <p className="cbp-body">
            Your users should be able to understand where a link is taking them
            either by the text in the link, the link is contained by text giving
            contextual clues, or programmatically by the title attribute. The
            title for each link also must be unique. Screen reader users will
            not have the visual cues at their disposal to navigate the meaning
            of 5 instances of "Learn More" links on a page. Developers need to
            be more descriptive here. For instances where links are opening
            documents, books, or articles the title of said product is
            sufficient. The CBP Design System also utilizes the icon
            (external-link-alt) to designate a link that will lead the user
            outside of their current application and should be applied to all
            said links.
          </p>

          <h4 className="cbp-heading-4">
            Programatically Identifying Interactive Elements
          </h4>
          <p className="cbp-body">
            In addition to labels and instruction, interactive elements should
            be programmatically identified by name, role, and value attributes
            for assistive technologies.
          </p>
          <p className="cbp-body">
            When the system changes content based on user input and this change
            does not receive user focus, such as a status message, there is a
            way to identify this change with the role attribute. For example as
            the system returns 5 results after a search is conducted. At the top
            of the results, the message 5 results found is clearly visible.
          </p>
          {/* @TODO: Insert Success Criterion stuff here if required */}
        </TabPanel>
      </article>
    </Tabs>
  </Layout>
)
