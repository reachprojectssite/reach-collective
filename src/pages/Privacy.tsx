import LegalPage, { LegalSection, LegalList } from '../components/layout/LegalPage';

const Privacy = () => (
  <LegalPage eyebrow="Legal" title="Privacy Policy" lastUpdated="May 10, 2026">
    <p>
      This Privacy Policy (the "Policy") describes how Reach Nationals Corp., a
      California nonprofit public benefit corporation ("Reach Nationals," "we," "us," or
      "our"), collects, uses, discloses, and otherwise processes information about
      individuals who visit our website, submit applications, participate in our
      chapters, attend our events, or otherwise interact with us (collectively,
      "Users" or "you"). By using the Reach Nationals website (the "Site") or participating
      in any Reach Nationals program, you acknowledge that you have read, understood, and
      agree to the practices described in this Policy.
    </p>

    <p>
      If you do not agree to any part of this Policy, you may not use the Site or
      participate in Reach Nationals programs. Reach Nationals reserves the right, in its sole and
      absolute discretion, to determine the manner and scope of its data practices
      consistent with applicable law.
    </p>

    <LegalSection title="1. Scope and Application">
      <p>
        This Policy applies to all personal information that Reach Nationals collects from
        Users through any channel, including the Site, applications, surveys,
        events, chapter meetings, online communities (including Slack, group
        chats, and similar tools operated under the Reach Nationals name), and direct
        communications. This Policy does not apply to third-party platforms,
        websites, or services that may link to or from Reach Nationals content; you should
        review the privacy policies of any such third parties separately.
      </p>
    </LegalSection>

    <LegalSection title="2. Information We Collect">
      <p>
        We collect categories of personal information that are reasonably
        necessary to operate Reach Nationals and deliver our programs, including but not
        limited to:
      </p>
      <LegalList
        items={[
          'Identifiers such as name, email address, telephone number, mailing address, and government-issued identifiers where required for tax or grant reporting.',
          'Educational and professional information including university, anticipated graduation year, major, GPA when voluntarily disclosed, chapter affiliation, leadership roles, prior work, and references.',
          'Creator information including social media handles, follower counts, portfolio URLs, sample work, audience demographics provided voluntarily, and brand affiliations.',
          'Application and program content including responses to written and recorded interview questions, essay submissions, video submissions, and event RSVPs.',
          'Communications and inferences drawn from your interactions with Reach Nationals, including correspondence, support tickets, and survey responses.',
          'Device and usage information automatically collected when you visit the Site, including IP address, browser type and version, operating system, referring URLs, pages viewed, and timestamps.',
          'Cookies, pixels, and similar technologies that recognize your browser or device and enable functionality, analytics, and limited marketing measurement.',
          'Photographs, audio, and video captured at Reach Nationals-affiliated events, which you authorize us to use as set forth below.',
        ]}
      />
      <p>
        You are responsible for ensuring that any information you submit to Reach Nationals
        is accurate, lawful, and not subject to confidentiality obligations that
        would prevent you from sharing it with us.
      </p>
    </LegalSection>

    <LegalSection title="3. Sources of Information">
      <p>We collect information directly from you, automatically through the Site, and from third parties including:</p>
      <LegalList
        items={[
          'Universities and chapter leaders who verify enrollment or chapter status.',
          'Brand partners and event sponsors who provide attendance lists, opt-in marketing data, or campaign deliverables.',
          'Analytics, advertising, and infrastructure providers who deliver aggregated or device-level data to us.',
          'Publicly available sources, including social media platforms where you maintain a public profile.',
        ]}
      />
    </LegalSection>

    <LegalSection title="4. How We Use Information">
      <p>We use the information we collect for legitimate organizational purposes, including to:</p>
      <LegalList
        items={[
          'Operate, administer, evaluate, and improve Reach Nationals programs, chapters, events, and educational content.',
          'Review and respond to membership applications, leadership applications, and related inquiries.',
          'Verify eligibility for membership, scholarships, grants, and brand opportunities.',
          'Communicate with you about programs, events, newsletters, opportunities, surveys, and organizational updates.',
          'Coordinate brand partnerships, sponsorships, and creator opportunities where you have expressed interest.',
          'Produce promotional materials and marketing for Reach Nationals using event photography, video, audio, member quotations, and creator content, subject to the rights you grant under our Terms of Use.',
          'Conduct research, analytics, demographic reporting, and impact reporting for our board, donors, grantmakers, and the broader creator economy.',
          'Detect, prevent, investigate, and respond to fraud, harassment, abuse, safety incidents, intellectual property violations, and violations of our Terms of Use or Code of Conduct.',
          'Comply with legal obligations, including nonprofit reporting, donor disclosure, tax, audit, and regulatory requirements.',
          'Establish, exercise, and defend legal claims, including responding to subpoenas and other compulsory legal process.',
        ]}
      />
      <p>
        Reach Nationals reserves the right to retain and use de-identified or aggregated
        information indefinitely for any lawful purpose, including research,
        program evaluation, and marketing, without further notice to you.
      </p>
    </LegalSection>

    <LegalSection title="5. Disclosure of Information">
      <p>
        Reach Nationals does not sell personal information for monetary consideration. We
        may disclose personal information in the following circumstances:
      </p>
      <LegalList
        items={[
          'To Reach Nationals staff, board members, volunteers, and chapter officers who have a legitimate organizational need to access the information.',
          'To service providers and processors acting on our behalf under written agreements that restrict their use of the information (including email, hosting, analytics, application screening, payment processing, video conferencing, and security vendors).',
          'To brand partners, sponsors, and collaborators where you have voluntarily participated in a program, opportunity, or list and where applicable terms have been disclosed.',
          'To universities and chapter leadership where necessary to verify or coordinate chapter activities.',
          'To donors, grantmakers, and auditors for reporting and compliance purposes, generally in de-identified form.',
          'To law enforcement, regulators, or other parties when Reach Nationals determines, in its sole discretion, that disclosure is necessary or appropriate to (i) comply with legal process; (ii) enforce our Terms of Use, Code of Conduct, or any agreement with you; (iii) protect the rights, property, or safety of Reach Nationals, our members, or any third party; or (iv) investigate suspected wrongdoing.',
          'In connection with any merger, asset transfer, restructuring, dissolution, or other transaction involving Reach Nationals or its assets, subject to applicable law.',
        ]}
      />
    </LegalSection>

    <LegalSection title="6. Cookies, Analytics, and Online Tracking">
      <p>
        We and our service providers use cookies, web beacons, pixels, local
        storage, and similar technologies to operate the Site, remember your
        preferences, measure traffic and engagement, and improve our content. You
        can configure your browser to refuse or delete cookies; however, certain
        features of the Site may not function properly without them. We do not
        currently respond to Do Not Track signals because no industry consensus
        regarding their handling has been established.
      </p>
    </LegalSection>

    <LegalSection title="7. Photographs, Video, and Likeness at Reach Nationals Events">
      <p>
        By attending any Reach Nationals-affiliated event, by appearing in user-submitted
        content tagged with Reach Nationals, or by participating in any Reach Nationals program, you
        irrevocably consent to be photographed, filmed, and recorded, and you
        grant Reach Nationals and its successors, assigns, and licensees a perpetual,
        worldwide, royalty-free, sublicensable, and transferable right and
        license to use your name, likeness, image, voice, and statements in any
        media, now known or later developed, for any organizational, editorial,
        promotional, marketing, fundraising, or educational purpose, without
        further compensation or notice. You waive any right to inspect or approve
        any use of such materials.
      </p>
    </LegalSection>

    <LegalSection title="8. California Privacy Rights">
      <p>
        Under the California Consumer Privacy Act ("CCPA") and the California
        Privacy Rights Act ("CPRA"), California residents may have the following
        rights, subject to verification of identity and applicable exceptions:
      </p>
      <LegalList
        items={[
          'The right to know the categories and specific pieces of personal information we have collected about you.',
          'The right to request deletion of personal information, subject to exceptions for compliance with legal obligations, completion of transactions, security and fraud prevention, and other permitted uses.',
          'The right to correct inaccurate personal information that we maintain about you.',
          'The right to opt out of the sale or sharing of personal information. Reach Nationals does not sell personal information for monetary consideration; we may share limited information with service providers and partners as described above.',
          'The right to limit the use and disclosure of sensitive personal information.',
          'The right not to receive discriminatory treatment for exercising any CCPA right.',
        ]}
      />
      <p>
        To submit a request, email{' '}
        <a href="mailto:hello@reachnationals.org" className="text-reach-goldDark hover:text-reach-navy font-medium">
          hello@reachnationals.org
        </a>{' '}
        with the subject line "Privacy Request." We may require additional
        information to verify your identity before responding. Reach Nationals will respond
        within forty-five (45) days unless we extend the deadline as permitted by
        law. Reach Nationals reserves all rights and exceptions available under the CCPA,
        CPRA, and other applicable privacy laws, including the right to deny
        unverified, repetitive, or unduly burdensome requests.
      </p>
    </LegalSection>

    <LegalSection title="9. Data Retention">
      <p>
        We retain personal information for as long as reasonably necessary to
        carry out the purposes described in this Policy, to comply with our legal
        obligations (including IRS, donor, and nonprofit reporting requirements),
        to resolve disputes, to enforce our agreements, and to maintain
        organizational records. Retention periods may exceed the duration of any
        single program or membership term.
      </p>
    </LegalSection>

    <LegalSection title="10. Data Security">
      <p>
        Reach Nationals maintains reasonable administrative, technical, and physical
        safeguards designed to protect personal information against unauthorized
        access, disclosure, alteration, and destruction. No system or transmission
        is perfectly secure, and we make no representation or warranty that
        personal information will remain confidential under all circumstances.
        You provide information to Reach Nationals at your own risk.
      </p>
    </LegalSection>

    <LegalSection title="11. Children Under 13">
      <p>
        Reach Nationals does not knowingly collect personal information from children under
        thirteen (13). The Site and our programs are directed toward college
        students and creators eighteen (18) years of age or older. If we learn
        that we have collected personal information from a child under 13 without
        verifiable parental consent, we will delete that information promptly.
      </p>
    </LegalSection>

    <LegalSection title="12. International Users">
      <p>
        Reach Nationals is based in the United States. If you access the Site or interact
        with Reach Nationals from outside the United States, your information will be
        transferred to, stored in, and processed in the United States, where data
        protection laws may differ from those in your jurisdiction. By using the
        Site or participating in Reach Nationals programs, you consent to such transfer and
        processing.
      </p>
    </LegalSection>

    <LegalSection title="13. Third-Party Services">
      <p>
        The Site may include links to third-party websites, applications,
        plug-ins, and services. Reach Nationals does not control and is not responsible for
        the privacy practices of any third party. We strongly encourage you to
        review the privacy policies of every third-party service you access.
      </p>
    </LegalSection>

    <LegalSection title="14. Changes to This Policy">
      <p>
        Reach Nationals may modify this Policy at any time, in its sole discretion, by
        posting the revised Policy on the Site and updating the "Last updated"
        date above. Material changes will, where reasonably practicable, be
        communicated by email or through a prominent notice on the Site. Your
        continued use of the Site or participation in Reach Nationals programs following
        any modification constitutes your acceptance of the revised Policy.
      </p>
    </LegalSection>

    <LegalSection title="15. Contact">
      <p>
        Questions, requests, or concerns regarding this Policy should be
        directed to:
      </p>
      <p>
        Reach Nationals Corp.
        <br />
        Los Angeles, California
        <br />
        Email:{' '}
        <a href="mailto:hello@reachnationals.org" className="text-reach-goldDark hover:text-reach-navy font-medium">
          hello@reachnationals.org
        </a>
      </p>
    </LegalSection>
  </LegalPage>
);

export default Privacy;
