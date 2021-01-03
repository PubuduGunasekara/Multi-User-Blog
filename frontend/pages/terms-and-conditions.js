import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  APP_NAME,
  FB_APP_ID,
  DOMAIN,
  TWITTER_PUBLISHER_HANDLE,
} from "../config";

const TermsofUse = () => {
  const head = () => (
    <Head>
      <title>Terms of Use - {APP_NAME}</title>
      <meta name="description" content={`Terms of Use page - ${APP_NAME}`} />
      <link rel="canonical" href={`${DOMAIN}/terms-of-use`} />
      <meta name="theme-color" content="#2c2c2c" />
      <meta name="msapplication-navbutton-color" content="#2c2c2c" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#2c2c2c" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={`@${TWITTER_PUBLISHER_HANDLE}`} />
      <meta name="twitter:title" content={`Terms of Use - ${APP_NAME}`} />
      <meta
        name="twitter:description"
        content={`Terms of Use page - ${APP_NAME}`}
      />
      {/* Twitter Summary card images must be at least 120x120px */}
      <meta
        name="twitter:image:src"
        content={`${DOMAIN}/static/images/terms_of_use.jpg`}
      />
      <meta name="twitter:image:alt" content={`${DOMAIN}`} />
      {/* Open Graph data  */}
      <meta property="og:title" content={`Terms of Use - ${APP_NAME}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/terms-of-use`} />
      <meta
        alt={`${DOMAIN}`}
        property="og:image"
        content={`${DOMAIN}/static/images/terms_of_use.jpg`}
      />
      <meta
        property="og:description"
        content={`Terms of Use page - ${APP_NAME}`}
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
                  Terms and conditions
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
              <div className="container">
                <h1>Terms and conditions</h1>
                <hr></hr>
                <p>
                  These terms and conditions (&quot;Agreement&quot;) set forth
                  the general terms and conditions of your use of the{" "}
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="http://www.techbotlk.com"
                  >
                    techbotlk.com
                  </a>{" "}
                  website (&quot;Website&quot; or &quot;Service&quot;) and any
                  of its related products and services (collectively,
                  &quot;Services&quot;). This Agreement is legally binding
                  between you (&quot;User&quot;, &quot;you&quot; or
                  &quot;your&quot;) and this Website operator
                  (&quot;Operator&quot;, &quot;we&quot;, &quot;us&quot; or
                  &quot;our&quot;). By accessing and using the Website and
                  Services, you acknowledge that you have read, understood, and
                  agree to be bound by the terms of this Agreement. If you are
                  entering into this Agreement on behalf of a business or other
                  legal entity, you represent that you have the authority to
                  bind such entity to this Agreement, in which case the terms
                  &quot;User&quot;, &quot;you&quot; or &quot;your&quot; shall
                  refer to such entity. If you do not have such authority, or if
                  you do not agree with the terms of this Agreement, you must
                  not accept this Agreement and may not access and use the
                  Website and Services. You acknowledge that this Agreement is a
                  contract between you and the Operator, even though it is
                  electronic and is not physically signed by you, and it governs
                  your use of the Website and Services.
                </p>
                <h2>User content</h2>
                <p>
                  We do not own any data, information or material (collectively,
                  &quot;Content&quot;) that you submit on the Website in the
                  course of using the Service. You shall have sole
                  responsibility for the accuracy, quality, integrity, legality,
                  reliability, appropriateness, and intellectual property
                  ownership or right to use of all submitted Content. We may,
                  but have no obligation to, monitor and review the Content on
                  the Website submitted or created using our Services by you.
                  You grant us permission to access, copy, distribute, store,
                  transmit, reformat, display and perform the Content of your
                  user account solely as required for the purpose of providing
                  the Services to you. Without limiting any of those
                  representations or warranties, we have the right, though not
                  the obligation, to, in our own sole discretion, refuse or
                  remove any Content that, in our reasonable opinion, violates
                  any of our policies or is in any way harmful or objectionable.
                  Unless specifically permitted by you, your use of the Website
                  and Services does not grant us the license to use, reproduce,
                  adapt, modify, publish or distribute the Content created by
                  you or stored in your user account for commercial, marketing
                  or any similar purpose.
                </p>
                <h2>Backups</h2>
                <p>
                  We are not responsible for the Content residing on the
                  Website. In no event shall we be held liable for any loss of
                  any Content. It is your sole responsibility to maintain
                  appropriate backup of your Content. Notwithstanding the
                  foregoing, on some occasions and in certain circumstances,
                  with absolutely no obligation, we may be able to restore some
                  or all of your data that has been deleted as of a certain date
                  and time when we may have backed up data for our own purposes.
                  We make no guarantee that the data you need will be available.
                </p>
                <h2>Links to other resources</h2>
                <p>
                  Although the Website and Services may link to other resources
                  (such as websites, mobile applications, etc.), we are not,
                  directly or indirectly, implying any approval, association,
                  sponsorship, endorsement, or affiliation with any linked
                  resource, unless specifically stated herein. We are not
                  responsible for examining or evaluating, and we do not warrant
                  the offerings of, any businesses or individuals or the content
                  of their resources. We do not assume any responsibility or
                  liability for the actions, products, services, and content of
                  any other third parties. You should carefully review the legal
                  statements and other conditions of use of any resource which
                  you access through a link on the Website and Services. Your
                  linking to any other off-site resources is at your own risk.
                </p>
                <h2>Prohibited uses</h2>
                <p>
                  In addition to other terms as set forth in the Agreement, you
                  are prohibited from using the Website and Services or Content:
                  (a) for any unlawful purpose; (b) to solicit others to perform
                  or participate in any unlawful acts; (c) to violate any
                  international, federal, provincial or state regulations,
                  rules, laws, or local ordinances; (d) to infringe upon or
                  violate our intellectual property rights or the intellectual
                  property rights of others; (e) to harass, abuse, insult, harm,
                  defame, slander, disparage, intimidate, or discriminate based
                  on gender, sexual orientation, religion, ethnicity, race, age,
                  national origin, or disability; (f) to submit false or
                  misleading information; (g) to upload or transmit viruses or
                  any other type of malicious code that will or may be used in
                  any way that will affect the functionality or operation of the
                  Website and Services, third party products and services, or
                  the Internet; (h) to spam, phish, pharm, pretext, spider,
                  crawl, or scrape; (i) for any obscene or immoral purpose; or
                  (j) to interfere with or circumvent the security features of
                  the Website and Services, third party products and services,
                  or the Internet. We reserve the right to terminate your use of
                  the Website and Services for violating any of the prohibited
                  uses.
                </p>
                <h2>Intellectual property rights</h2>
                <p>
                  &quot;Intellectual Property Rights&quot; means all present and
                  future rights conferred by statute, common law or equity in or
                  in relation to any copyright and related rights, trademarks,
                  designs, patents, inventions, goodwill and the right to sue
                  for passing off, rights to inventions, rights to use, and all
                  other intellectual property rights, in each case whether
                  registered or unregistered and including all applications and
                  rights to apply for and be granted, rights to claim priority
                  from, such rights and all similar or equivalent rights or
                  forms of protection and any other results of intellectual
                  activity which subsist or will subsist now or in the future in
                  any part of the world. This Agreement does not transfer to you
                  any intellectual property owned by the Operator or third
                  parties, and all rights, titles, and interests in and to such
                  property will remain (as between the parties) solely with the
                  Operator. All trademarks, service marks, graphics and logos
                  used in connection with the Website and Services, are
                  trademarks or registered trademarks of the Operator or its
                  licensors. Other trademarks, service marks, graphics and logos
                  used in connection with the Website and Services may be the
                  trademarks of other third parties. Your use of the Website and
                  Services grants you no right or license to reproduce or
                  otherwise use any of the Operator or third party trademarks.
                </p>
                <h2>Limitation of liability</h2>
                <p>
                  To the fullest extent permitted by applicable law, in no event
                  will the Operator, its affiliates, directors, officers,
                  employees, agents, suppliers or licensors be liable to any
                  person for any indirect, incidental, special, punitive, cover
                  or consequential damages (including, without limitation,
                  damages for lost profits, revenue, sales, goodwill, use of
                  content, impact on business, business interruption, loss of
                  anticipated savings, loss of business opportunity) however
                  caused, under any theory of liability, including, without
                  limitation, contract, tort, warranty, breach of statutory
                  duty, negligence or otherwise, even if the liable party has
                  been advised as to the possibility of such damages or could
                  have foreseen such damages. To the maximum extent permitted by
                  applicable law, the aggregate liability of the Operator and
                  its affiliates, officers, employees, agents, suppliers and
                  licensors relating to the services will be limited to an
                  amount greater of one dollar or any amounts actually paid in
                  cash by you to the Operator for the prior one month period
                  prior to the first event or occurrence giving rise to such
                  liability. The limitations and exclusions also apply if this
                  remedy does not fully compensate you for any losses or fails
                  of its essential purpose.
                </p>
                <h2>Indemnification</h2>
                <p>
                  You agree to indemnify and hold the Operator and its
                  affiliates, directors, officers, employees, agents, suppliers
                  and licensors harmless from and against any liabilities,
                  losses, damages or costs, including reasonable attorneys'
                  fees, incurred in connection with or arising from any third
                  party allegations, claims, actions, disputes, or demands
                  asserted against any of them as a result of or relating to
                  your Content, your use of the Website and Services or any
                  willful misconduct on your part.
                </p>
                <h2>Severability</h2>
                <p>
                  All rights and restrictions contained in this Agreement may be
                  exercised and shall be applicable and binding only to the
                  extent that they do not violate any applicable laws and are
                  intended to be limited to the extent necessary so that they
                  will not render this Agreement illegal, invalid or
                  unenforceable. If any provision or portion of any provision of
                  this Agreement shall be held to be illegal, invalid or
                  unenforceable by a court of competent jurisdiction, it is the
                  intention of the parties that the remaining provisions or
                  portions thereof shall constitute their agreement with respect
                  to the subject matter hereof, and all such remaining
                  provisions or portions thereof shall remain in full force and
                  effect.
                </p>
                <h2>Dispute resolution</h2>
                <p>
                  The formation, interpretation, and performance of this
                  Agreement and any disputes arising out of it shall be governed
                  by the substantive and procedural laws of Sri Lanka without
                  regard to its rules on conflicts or choice of law and, to the
                  extent applicable, the laws of Sri Lanka. The exclusive
                  jurisdiction and venue for actions related to the subject
                  matter hereof shall be the courts located in Sri Lanka, and
                  you hereby submit to the personal jurisdiction of such courts.
                  You hereby waive any right to a jury trial in any proceeding
                  arising out of or related to this Agreement. The United
                  Nations Convention on Contracts for the International Sale of
                  Goods does not apply to this Agreement.
                </p>
                <h2>Changes and amendments</h2>
                <p>
                  We reserve the right to modify this Agreement or its terms
                  relating to the Website and Services at any time, effective
                  upon posting of an updated version of this Agreement on the
                  Website. When we do, we will revise the updated date at the
                  bottom of this page. Continued use of the Website and Services
                  after any such changes shall constitute your consent to such
                  changes. Policy was created with{" "}
                  <a
                    style={{ color: "inherit" }}
                    target="_blank"
                    href="https://www.websitepolicies.com/blog/sample-terms-conditions-template"
                  >
                    WebsitePolicies
                  </a>
                  .
                </p>
                <h2>Acceptance of these terms</h2>
                <p>
                  You acknowledge that you have read this Agreement and agree to
                  all its terms and conditions. By accessing and using the
                  Website and Services you agree to be bound by this Agreement.
                  If you do not agree to abide by the terms of this Agreement,
                  you are not authorized to access or use the Website and
                  Services.
                </p>
                <h2>Contacting us</h2>
                <p>
                  If you would like to contact us to understand more about this
                  Agreement or wish to contact us concerning any matter relating
                  to it, you may send an email to
                  s&#117;&#112;&#112;ort.te&#99;&#104;bo&#116;l&#107;&#64;g&#109;&#97;i&#108;&#46;&#99;om
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
export default TermsofUse;
