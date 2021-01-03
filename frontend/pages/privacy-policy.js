import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  APP_NAME,
  FB_APP_ID,
  DOMAIN,
  TWITTER_PUBLISHER_HANDLE,
} from "../config";

const PricavyPolicy = () => {
  const head = () => (
    <Head>
      <title>Privacy policy - {APP_NAME}</title>
      <meta name="description" content={`Privacy policy page - ${APP_NAME}`} />
      <link rel="canonical" href={`${DOMAIN}/privacy-policy`} />
      <meta name="theme-color" content="#2c2c2c" />
      <meta name="msapplication-navbutton-color" content="#2c2c2c" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#2c2c2c" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={`@${TWITTER_PUBLISHER_HANDLE}`} />
      <meta name="twitter:title" content={`Privacy policy - ${APP_NAME}`} />
      <meta
        name="twitter:description"
        content={`Privacy policy page - ${APP_NAME}`}
      />
      {/* Twitter Summary card images must be at least 120x120px */}
      <meta
        name="twitter:image:src"
        content={`${DOMAIN}/static/images/privacy_policy.jpg`}
      />
      <meta name="twitter:image:alt" content={`${DOMAIN}`} />
      {/* Open Graph data  */}
      <meta property="og:title" content={`Privacy policy - ${APP_NAME}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/privacy-policy`} />
      <meta
        alt={`${DOMAIN}`}
        property="og:image"
        content={`${DOMAIN}/static/images/privacy_policy.jpg`}
      />
      <meta
        property="og:description"
        content={`Privacy policy page - ${APP_NAME}`}
      />
      <meta property="og:site_name" content={APP_NAME} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />

      <link rel="preconnect" href={`${DOMAIN}/`} />
    </Head>
  );

  return (
    <React.Fragment>
      {head()}
      <div className="container mt-3 mb-5 pl-0 pr-0">
        <div className="row ml-0 mr-0">
          <div style={{ width: "100%" }}>
            <nav aria-label="breadcrumb">
              <ol
                style={{ backgroundColor: "#f3f3f3" }}
                className="breadcrumb pb-0 pt-0"
              >
                <li className="breadcrumb-item">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Privacy policy
                </li>
              </ol>
            </nav>
          </div>

          <div className="col-lg-12">
            <div
              className="row mt-2"
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 1px rgba(0,0,0,0.5)",
              }}
            >
              {/* <div
                style={{
                  height: "10px",
                  width: "100%",
                  margin: 0,
                  backgroundColor: "rgba(202, 28, 28, 0.945)",
                }}
              /> */}

              {/* <div className="container">
                <h1>Privacy Policy for TechbotLK.com</h1>

                <p>
                  At techbotlk, accessible from www.techbotlk.com, one of our
                  main priorities is the privacy of our visitors. This Privacy
                  Policy document contains types of information that is
                  collected and recorded by techbotlk and how we use it.
                </p>

                <p>
                  If you have additional questions or require more information
                  about our Privacy Policy, do not hesitate to contact us.
                </p>

                <p>
                  This Privacy Policy applies only to our online activities and
                  is valid for visitors to our website with regards to the
                  information that they shared and/or collect in techbotlk. This
                  policy is not applicable to any information collected offline
                  or via channels other than this website. Our Privacy Policy
                  was created with the help of the{" "}
                  <a href="https://www.privacypolicygenerator.info">
                    Privacy Policy Generator
                  </a>{" "}
                  and the{" "}
                  <a href="https://www.generateprivacypolicy.com/#wizard">
                    Free Privacy Policy Generator
                  </a>
                  .
                </p>

                <h2>Consent</h2>

                <p>
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </p>

                <h2>Information we collect</h2>

                <p>
                  The personal information that you are asked to provide, and
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  information.
                </p>
                <p>
                  If you contact us directly, we may receive additional
                  information about you such as your name, email address, phone
                  number, the contents of the message and/or attachments you may
                  send us, and any other information you may choose to provide.
                </p>
                <p>
                  When you register for an Account, we may ask for your contact
                  information, including items such as name, company name,
                  address, email address, and telephone number.
                </p>

                <h2>How we use your information</h2>

                <p>
                  We use the information we collect in various ways, including
                  to:
                </p>

                <ul>
                  <li>Provide, operate, and maintain our webste</li>
                  <li>Improve, personalize, and expand our webste</li>
                  <li>Understand and analyze how you use our webste</li>
                  <li>
                    Develop new products, services, features, and functionality
                  </li>
                  <li>
                    Communicate with you, either directly or through one of our
                    partners, including for customer service, to provide you
                    with updates and other information relating to the webste,
                    and for marketing and promotional purposes
                  </li>
                  <li>Send you emails</li>
                  <li>Find and prevent fraud</li>
                </ul>

                <h2>Log Files</h2>

                <p>
                  techbotlk follows a standard procedure of using log files.
                  These files log visitors when they visit websites. All hosting
                  companies do this and a part of hosting services' analytics.
                  The information collected by log files include internet
                  protocol (IP) addresses, browser type, Internet Service
                  Provider (ISP), date and time stamp, referring/exit pages, and
                  possibly the number of clicks. These are not linked to any
                  information that is personally identifiable. The purpose of
                  the information is for analyzing trends, administering the
                  site, tracking users' movement on the website, and gathering
                  demographic information.
                </p>

                <h2>Cookies and Web Beacons</h2>

                <p>
                  Like any other website, techbotlk uses 'cookies'. These
                  cookies are used to store information including visitors'
                  preferences, and the pages on the website that the visitor
                  accessed or visited. The information is used to optimize the
                  users' experience by customizing our web page content based on
                  visitors' browser type and/or other information.
                </p>

                <p>
                  For more general information on cookies, please read{" "}
                  <a href="https://www.cookieconsent.com/what-are-cookies/">
                    "What Are Cookies" from Cookie Consent
                  </a>
                  .
                </p>

                <h2>Advertising Partners Privacy Policies</h2>

                <p>
                  You may consult this list to find the Privacy Policy for each
                  of the advertising partners of techbotlk.
                </p>

                <p>
                  Third-party ad servers or ad networks uses technologies like
                  cookies, JavaScript, or Web Beacons that are used in their
                  respective advertisements and links that appear on techbotlk,
                  which are sent directly to users' browser. They automatically
                  receive your IP address when this occurs. These technologies
                  are used to measure the effectiveness of their advertising
                  campaigns and/or to personalize the advertising content that
                  you see on websites that you visit.
                </p>

                <p>
                  Note that techbotlk has no access to or control over these
                  cookies that are used by third-party advertisers.
                </p>

                <h2>Third Party Privacy Policies</h2>

                <p>
                  techbotlk's Privacy Policy does not apply to other advertisers
                  or websites. Thus, we are advising you to consult the
                  respective Privacy Policies of these third-party ad servers
                  for more detailed information. It may include their practices
                  and instructions about how to opt-out of certain options.{" "}
                </p>

                <p>
                  You can choose to disable cookies through your individual
                  browser options. To know more detailed information about
                  cookie management with specific web browsers, it can be found
                  at the browsers' respective websites.
                </p>

                <h2>
                  CCPA Privacy Rights (Do Not Sell My Personal Information)
                </h2>

                <p>
                  Under the CCPA, among other rights, California consumers have
                  the right to:
                </p>
                <p>
                  Request that a business that collects a consumer's personal
                  data disclose the categories and specific pieces of personal
                  data that a business has collected about consumers.
                </p>
                <p>
                  Request that a business delete any personal data about the
                  consumer that a business has collected.
                </p>
                <p>
                  Request that a business that sells a consumer's personal data,
                  not sell the consumer's personal data.
                </p>
                <p>
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </p>

                <h2>GDPR Data Protection Rights</h2>

                <p>
                  We would like to make sure you are fully aware of all of your
                  data protection rights. Every user is entitled to the
                  following:
                </p>
                <p>
                  The right to access – You have the right to request copies of
                  your personal data. We may charge you a small fee for this
                  service.
                </p>
                <p>
                  The right to rectification – You have the right to request
                  that we correct any information you believe is inaccurate. You
                  also have the right to request that we complete the
                  information you believe is incomplete.
                </p>
                <p>
                  The right to erasure – You have the right to request that we
                  erase your personal data, under certain conditions.
                </p>
                <p>
                  The right to restrict processing – You have the right to
                  request that we restrict the processing of your personal data,
                  under certain conditions.
                </p>
                <p>
                  The right to object to processing – You have the right to
                  object to our processing of your personal data, under certain
                  conditions.
                </p>
                <p>
                  The right to data portability – You have the right to request
                  that we transfer the data that we have collected to another
                  organization, or directly to you, under certain conditions.
                </p>
                <p>
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </p>

                <h2>Children's Information</h2>

                <p>
                  Another part of our priority is adding protection for children
                  while using the internet. We encourage parents and guardians
                  to observe, participate in, and/or monitor and guide their
                  online activity.
                </p>

                <p>
                  techbotlk does not knowingly collect any Personal Identifiable
                  Information from children under the age of 13. If you think
                  that your child provided this kind of information on our
                  website, we strongly encourage you to contact us immediately
                  and we will do our best efforts to promptly remove such
                  information from our records.
                </p>
              </div> */}

              <div className="container">
                <h1>Privacy policy</h1>
                <hr></hr>
                <p>
                  {" "}
                  This privacy policy (&quot;Policy&quot;) describes how the
                  personally identifiable information (&quot;Personal
                  Information&quot;) you may provide on the{" "}
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="http://www.techbotlk.com"
                  >
                    techbotlk.com
                  </a>{" "}
                  website (&quot;Website&quot; or &quot;Service&quot;) and any
                  of its related products and services (collectively,
                  &quot;Services&quot;) is collected, protected and used. It
                  also describes the choices available to you regarding our use
                  of your Personal Information and how you can access and update
                  this information. This Policy is a legally binding agreement
                  between you (&quot;User&quot;, &quot;you&quot; or
                  &quot;your&quot;) and this Website operator
                  (&quot;Operator&quot;, &quot;we&quot;, &quot;us&quot; or
                  &quot;our&quot;). By accessing and using the Website and
                  Services, you acknowledge that you have read, understood, and
                  agree to be bound by the terms of this Agreement. This Policy
                  does not apply to the practices of companies that we do not
                  own or control, or to individuals that we do not employ or
                  manage.
                </p>
                <h2>Automatic collection of information</h2>
                <p>
                  When you open the Website, our servers automatically record
                  information that your browser sends. This data may include
                  information such as your device's IP address, browser type and
                  version, operating system type and version, language
                  preferences or the webpage you were visiting before you came
                  to the Website and Services, pages of the Website and Services
                  that you visit, the time spent on those pages, information you
                  search for on the Website, access times and dates, and other
                  statistics.
                </p>
                <p>
                  Information collected automatically is used only to identify
                  potential cases of abuse and establish statistical information
                  regarding the usage and traffic of the Website and Services.
                  This statistical information is not otherwise aggregated in
                  such a way that would identify any particular user of the
                  system.
                </p>
                <h2>Collection of personal information</h2>
                <p>
                  You can access and use the Website and Services without
                  telling us who you are or revealing any information by which
                  someone could identify you as a specific, identifiable
                  individual. If, however, you wish to use some of the features
                  on the Website, you may be asked to provide certain Personal
                  Information (for example, your name and e-mail address). We
                  receive and store any information you knowingly provide to us
                  when you fill any online forms on the Website.Some of the
                  information we collect is directly from you via the Website
                  and Services. However, we may also collect Personal
                  Information about you from other sources such as public
                  databases and our joint marketing partners. You can choose not
                  to provide us with your Personal Information, but then you may
                  not be able to take advantage of some of the features on the
                  Website. Users who are uncertain about what information is
                  mandatory are welcome to contact us.
                </p>
                <h2>Use and processing of collected information</h2>
                <p>
                  In order to make the Website and Services available to you, or
                  to meet a legal obligation, we need to collect and use certain
                  Personal Information. If you do not provide the information
                  that we request, we may not be able to provide you with the
                  requested products or services. Any of the information we
                  collect from you may be used to help us run and operate the
                  Website and Services.
                </p>
                <p>
                  Processing your Personal Information depends on how you
                  interact with the Website and Services, where you are located
                  in the world and if one of the following applies: (i) you have
                  given your consent for one or more specific purposes; this,
                  however, does not apply, whenever the processing of Personal
                  Information is subject to California Consumer Privacy Act or
                  European data protection law; (ii) provision of information is
                  necessary for the performance of an agreement with you and/or
                  for any pre-contractual obligations thereof; (iii) processing
                  is necessary for compliance with a legal obligation to which
                  you are subject; (iv) processing is related to a task that is
                  carried out in the public interest or in the exercise of
                  official authority vested in us; (v) processing is necessary
                  for the purposes of the legitimate interests pursued by us or
                  by a third party.
                </p>
                <p>
                  {" "}
                  Note that under some legislations we may be allowed to process
                  information until you object to such processing (by opting
                  out), without having to rely on consent or any other of the
                  following legal bases below. In any case, we will be happy to
                  clarify the specific legal basis that applies to the
                  processing, and in particular whether the provision of
                  Personal Information is a statutory or contractual
                  requirement, or a requirement necessary to enter into a
                  contract.
                </p>
                <h2>Disclosure of information</h2>
                <p>
                  {" "}
                  Depending on the requested Services or as necessary to
                  complete any transaction or provide any service you have
                  requested, we may share your information with your consent
                  with our trusted third parties that work with us, any other
                  affiliates and subsidiaries we rely upon to assist in the
                  operation of the Website and Services available to you. We do
                  not share Personal Information with unaffiliated third
                  parties. These service providers are not authorized to use or
                  disclose your information except as necessary to perform
                  services on our behalf or comply with legal requirements. We
                  may share your Personal Information for these purposes only
                  with third parties whose privacy policies are consistent with
                  ours or who agree to abide by our policies with respect to
                  Personal Information. These third parties are given Personal
                  Information they need only in order to perform their
                  designated functions, and we do not authorize them to use or
                  disclose Personal Information for their own marketing or other
                  purposes.
                </p>
                <p>
                  We will disclose any Personal Information we collect, use or
                  receive if required or permitted by law, such as to comply
                  with a subpoena, or similar legal process, and when we believe
                  in good faith that disclosure is necessary to protect our
                  rights, protect your safety or the safety of others,
                  investigate fraud, or respond to a government request.
                </p>
                <h2>Retention of information</h2>
                <p>
                  We will retain and use your Personal Information for the
                  period necessary to comply with our legal obligations, resolve
                  disputes, and enforce our agreements unless a longer retention
                  period is required or permitted by law. We may use any
                  aggregated data derived from or incorporating your Personal
                  Information after you update or delete it, but not in a manner
                  that would identify you personally. Once the retention period
                  expires, Personal Information shall be deleted. Therefore, the
                  right to access, the right to erasure, the right to
                  rectification and the right to data portability cannot be
                  enforced after the expiration of the retention period.
                </p>
                <h2>Transfer of information</h2>
                <p>
                  Depending on your location, data transfers may involve
                  transferring and storing your information in a country other
                  than your own. You are entitled to learn about the legal basis
                  of information transfers to a country outside the European
                  Union or to any international organization governed by public
                  international law or set up by two or more countries, such as
                  the UN, and about the security measures taken by us to
                  safeguard your information. If any such transfer takes place,
                  you can find out more by checking the relevant sections of
                  this Policy or inquire with us using the information provided
                  in the contact section.
                </p>
                <h2>The rights of users</h2>
                <p>
                  You may exercise certain rights regarding your information
                  processed by us. In particular, you have the right to do the
                  following: (i) you have the right to withdraw consent where
                  you have previously given your consent to the processing of
                  your information; (ii) you have the right to object to the
                  processing of your information if the processing is carried
                  out on a legal basis other than consent; (iii) you have the
                  right to learn if information is being processed by us, obtain
                  disclosure regarding certain aspects of the processing and
                  obtain a copy of the information undergoing processing; (iv)
                  you have the right to verify the accuracy of your information
                  and ask for it to be updated or corrected; (v) you have the
                  right, under certain circumstances, to restrict the processing
                  of your information, in which case, we will not process your
                  information for any purpose other than storing it; (vi) you
                  have the right, under certain circumstances, to obtain the
                  erasure of your Personal Information from us; (vii) you have
                  the right to receive your information in a structured,
                  commonly used and machine readable format and, if technically
                  feasible, to have it transmitted to another controller without
                  any hindrance. This provision is applicable provided that your
                  information is processed by automated means and that the
                  processing is based on your consent, on a contract which you
                  are part of or on pre-contractual obligations thereof.
                </p>
                <h2>The right to object to processing</h2>
                <p>
                  Where Personal Information is processed for the public
                  interest, in the exercise of an official authority vested in
                  us or for the purposes of the legitimate interests pursued by
                  us, you may object to such processing by providing a ground
                  related to your particular situation to justify the objection.
                </p>
                <h2>Data protection rights under GDPR</h2>
                <p>
                  If you are a resident of the European Economic Area (EEA), you
                  have certain data protection rights and the Operator aims to
                  take reasonable steps to allow you to correct, amend, delete,
                  or limit the use of your Personal Information. If you wish to
                  be informed what Personal Information we hold about you and if
                  you want it to be removed from our systems, please contact us.
                  In certain circumstances, you have the following data
                  protection rights:
                </p>
                <ul>
                  <li>
                    You have the right to request access to your Personal
                    Information that we store and have the ability to access
                    your Personal Information.
                  </li>
                  <li>
                    You have the right to request that we correct any Personal
                    Information you believe is inaccurate. You also have the
                    right to request us to complete the Personal Information you
                    believe is incomplete.
                  </li>
                  <li>
                    You have the right to request the erase your Personal
                    Information under certain conditions of this Policy.
                  </li>
                  <li>
                    You have the right to object to our processing of your
                    Personal Information.
                  </li>
                  <li>
                    {" "}
                    You have the right to seek restrictions on the processing of
                    your Personal Information. When you restrict the processing
                    of your Personal Information, we may store it but will not
                    process it further.
                  </li>
                  <li>
                    {" "}
                    You have the right to be provided with a copy of the
                    information we have on you in a structured, machine-readable
                    and commonly used format.
                  </li>
                  <li>
                    {" "}
                    You also have the right to withdraw your consent at any time
                    where the Operator relied on your consent to process your
                    Personal Information.
                  </li>
                </ul>
                <p>
                  You have the right to complain to a Data Protection Authority
                  about our collection and use of your Personal Information. For
                  more information, please contact your local data protection
                  authority in the European Economic Area (EEA).
                </p>
                <h2>California privacy rights</h2>
                <p>
                  In addition to the rights as explained in this Policy,
                  California residents who provide Personal Information (as
                  defined in the statute) to obtain products or services for
                  personal, family, or household use are entitled to request and
                  obtain from us, once a calendar year, information about the
                  Personal Information we shared, if any, with other businesses
                  for marketing uses. If applicable, this information would
                  include the categories of Personal Information and the names
                  and addresses of those businesses with which we shared such
                  personal information for the immediately prior calendar year
                  (e.g., requests made in the current year will receive
                  information about the prior year). To obtain this information
                  please contact us.
                </p>
                <h2>How to exercise these rights</h2>
                <p>
                  Any requests to exercise your rights can be directed to the
                  Operator through the contact details provided in this
                  document. Please note that we may ask you to verify your
                  identity before responding to such requests. Your request must
                  provide sufficient information that allows us to verify that
                  you are the person you are claiming to be or that you are the
                  authorized representative of such person. You must include
                  sufficient details to allow us to properly understand the
                  request and respond to it. We cannot respond to your request
                  or provide you with Personal Information unless we first
                  verify your identity or authority to make such a request and
                  confirm that the Personal Information relates to you.
                </p>
                <h2>Privacy of children</h2>
                <p>
                  We do not knowingly collect any Personal Information from
                  children under the age of 18. If you are under the age of 18,
                  please do not submit any Personal Information through the
                  Website and Services. We encourage parents and legal guardians
                  to monitor their children's Internet usage and to help enforce
                  this Policy by instructing their children never to provide
                  Personal Information through the Website and Services without
                  their permission. If you have reason to believe that a child
                  under the age of 18 has provided Personal Information to us
                  through the Website and Services, please contact us. You must
                  also be at least 16 years of age to consent to the processing
                  of your Personal Information in your country (in some
                  countries we may allow your parent or guardian to do so on
                  your behalf).
                </p>
                <h2>Cookies</h2>
                <p>
                  The Website and Services use &quot;cookies&quot; to help
                  personalize your online experience. A cookie is a text file
                  that is placed on your hard disk by a web page server. Cookies
                  cannot be used to run programs or deliver viruses to your
                  computer. Cookies are uniquely assigned to you, and can only
                  be read by a web server in the domain that issued the cookie
                  to you.
                </p>
                <p>
                  We may use cookies to collect, store, and track information
                  for statistical purposes to operate the Website and Services.
                  You have the ability to accept or decline cookies. Most web
                  browsers automatically accept cookies, but you can usually
                  modify your browser setting to decline cookies if you prefer.
                  If you choose to decline cookies, you may not be able to fully
                  experience the features of the Website and Services. To learn
                  more about cookies and how to manage them, visit{" "}
                  <a target="_blank" href="https://www.internetcookies.org">
                    internetcookies.org
                  </a>
                </p>
                <h2>Do Not Track signals</h2>
                <p>
                  Some browsers incorporate a Do Not Track feature that signals
                  to websites you visit that you do not want to have your online
                  activity tracked. Tracking is not the same as using or
                  collecting information in connection with a website. For these
                  purposes, tracking refers to collecting personally
                  identifiable information from consumers who use or visit a
                  website or online service as they move across different
                  websites over time. The Website and Services do not track its
                  visitors over time and across third party websites. However,
                  some third party sites may keep track of your browsing
                  activities when they serve you content, which enables them to
                  tailor what they present to you.
                </p>
                <h2>Links to other resources</h2>
                <p>
                  The Website and Services contain links to other resources that
                  are not owned or controlled by us. Please be aware that we are
                  not responsible for the privacy practices of such other
                  resources or third parties. We encourage you to be aware when
                  you leave the Website and Services and to read the privacy
                  statements of each and every resource that may collect
                  Personal Information.
                </p>
                <h2>Information security</h2>
                <p>
                  We secure information you provide on computer servers in a
                  controlled, secure environment, protected from unauthorized
                  access, use, or disclosure. We maintain reasonable
                  administrative, technical, and physical safeguards in an
                  effort to protect against unauthorized access, use,
                  modification, and disclosure of Personal Information in its
                  control and custody. However, no data transmission over the
                  Internet or wireless network can be guaranteed. Therefore,
                  while we strive to protect your Personal Information, you
                  acknowledge that (i) there are security and privacy
                  limitations of the Internet which are beyond our control; (ii)
                  the security, integrity, and privacy of any and all
                  information and data exchanged between you and the Website and
                  Services cannot be guaranteed; and (iii) any such information
                  and data may be viewed or tampered with in transit by a third
                  party, despite best efforts.
                </p>
                <h2>Data breach</h2>
                <p>
                  In the event we become aware that the security of the Website
                  and Services has been compromised or users Personal
                  Information has been disclosed to unrelated third parties as a
                  result of external activity, including, but not limited to,
                  security attacks or fraud, we reserve the right to take
                  reasonably appropriate measures, including, but not limited
                  to, investigation and reporting, as well as notification to
                  and cooperation with law enforcement authorities. In the event
                  of a data breach, we will make reasonable efforts to notify
                  affected individuals if we believe that there is a reasonable
                  risk of harm to the user as a result of the breach or if
                  notice is otherwise required by law. When we do, we will post
                  a notice on the Website, send you an email.
                </p>
                <h2>Changes and amendments</h2>
                <p>
                  We reserve the right to modify this Policy or its terms
                  relating to the Website and Services from time to time in our
                  discretion and will notify you of any material changes to the
                  way in which we treat Personal Information. When we do, we
                  will revise the updated date at the bottom of this page. We
                  may also provide notice to you in other ways in our
                  discretion, such as through contact information you have
                  provided. Any updated version of this Policy will be effective
                  immediately upon the posting of the revised Policy unless
                  otherwise specified. Your continued use of the Website and
                  Services after the effective date of the revised Policy (or
                  such other act specified at that time) will constitute your
                  consent to those changes. However, we will not, without your
                  consent, use your Personal Information in a manner materially
                  different than what was stated at the time your Personal
                  Information was collected. Policy was created with{" "}
                  <a
                    style={{ color: "inherit" }}
                    target="_blank"
                    href="https://www.websitepolicies.com/blog/sample-privacy-policy-template"
                  >
                    WebsitePolicies
                  </a>
                  .
                </p>
                <h2>Acceptance of this policy</h2>
                <p>
                  You acknowledge that you have read this Policy and agree to
                  all its terms and conditions. By accessing and using the
                  Website and Services you agree to be bound by this Policy. If
                  you do not agree to abide by the terms of this Policy, you are
                  not authorized to access or use the Website and Services.
                </p>
                <h2>Contacting us</h2>
                <p>
                  If you would like to contact us to understand more about this
                  Policy or wish to contact us concerning any matter relating to
                  individual rights and your Personal Information, you may send
                  an email to
                  &#115;up&#112;o&#114;&#116;&#46;t&#101;&#99;hbot&#108;&#107;&#64;&#103;&#109;ail&#46;&#99;&#111;m
                </p>
                <p>This document was last updated on December 29, 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PricavyPolicy;
