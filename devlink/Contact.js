import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Contact.module.css";

export function Contact({
  as: _Component = _Builtin.Block,
  sectionVisibility = true,
  heading3Text = "Feel free to contact me",
}) {
  return sectionVisibility ? (
    <_Component
      className={_utils.cx(_styles, "section", "cc-contact")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "contact")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "contact-headline")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "", "heading")}
              tag="h3"
            >
              {heading3Text}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "contact-form-wrap")}
            tag="div"
          >
            <_Builtin.FormWrapper>
              <_Builtin.FormForm
                className={_utils.cx(_styles, "contact-form")}
                name="wf-form-Email-Form"
                data-name="Email Form"
                method="get"
                id="wf-form-Email-Form"
              >
                <_Builtin.Grid
                  className={_utils.cx(_styles, "contact-form-grid")}
                  tag="div"
                >
                  <_Builtin.Block
                    id={_utils.cx(
                      _styles,
                      "w-node-d783a17e-0b35-a13a-0448-a852d0df4a32-d0df4a24"
                    )}
                    tag="div"
                  >
                    <_Builtin.FormBlockLabel
                      className={_utils.cx(_styles, "field-label")}
                      htmlFor="Name-3"
                    >
                      {"Name"}
                    </_Builtin.FormBlockLabel>
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "text-field")}
                      name="Name"
                      maxLength={256}
                      data-name="Name"
                      placeholder="Enter your name"
                      disabled={false}
                      type="text"
                      required={false}
                      autoFocus={false}
                      id="Name"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    id={_utils.cx(
                      _styles,
                      "w-node-d783a17e-0b35-a13a-0448-a852d0df4a36-d0df4a24"
                    )}
                    tag="div"
                  >
                    <_Builtin.FormBlockLabel
                      className={_utils.cx(_styles, "field-label-2")}
                      htmlFor="Email-3"
                    >
                      {"Email Address"}
                    </_Builtin.FormBlockLabel>
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "text-field")}
                      name="Email"
                      maxLength={256}
                      data-name="Email"
                      placeholder="Enter your email"
                      disabled={false}
                      type="email"
                      required={true}
                      autoFocus={false}
                      id="Email"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    id={_utils.cx(
                      _styles,
                      "w-node-d783a17e-0b35-a13a-0448-a852d0df4a3a-d0df4a24"
                    )}
                    tag="div"
                  >
                    <_Builtin.FormBlockLabel
                      className={_utils.cx(_styles, "field-label-3")}
                      htmlFor="Message"
                    >
                      {"Message"}
                    </_Builtin.FormBlockLabel>
                    <_Builtin.FormTextarea
                      className={_utils.cx(
                        _styles,
                        "text-field",
                        "cc-textarea"
                      )}
                      name="Message"
                      maxLength={5000}
                      data-name="Message"
                      placeholder="Enter your message"
                      required={false}
                      autoFocus={false}
                      id="Message"
                    />
                  </_Builtin.Block>
                </_Builtin.Grid>
                <_Builtin.FormButton
                  className={_utils.cx(_styles, "button")}
                  type="submit"
                  value="Send"
                  data-wait="Making bread..."
                />
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage
                className={_utils.cx(
                  _styles,
                  "status-message",
                  "cc-success-message"
                )}
              >
                <_Builtin.Block tag="div">
                  {"Thank you! Your submission has been received!"}
                </_Builtin.Block>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage
                className={_utils.cx(
                  _styles,
                  "status-message",
                  "cc-error-message"
                )}
              >
                <_Builtin.Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  ) : null;
}
