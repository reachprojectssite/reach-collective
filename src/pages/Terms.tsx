import LegalPage, { LegalSection, LegalList } from '../components/layout/LegalPage';

const Terms = () => (
  <LegalPage eyebrow="Legal" title="Terms of Use" lastUpdated="May 10, 2026">
    <p>
      These Terms of Use (the "Terms") constitute a binding legal agreement
      between you and Reach Nationals Corp., a California nonprofit public benefit
      corporation ("Reach Nationals," "we," "us," or "our"), and govern your access to and
      use of the Reach Nationals website (the "Site"), and your participation in any Reach Nationals
      chapter, event, program, online community, application process, opportunity,
      or other activity offered, hosted, or affiliated with Reach Nationals (collectively,
      the "Services"). By accessing the Site, submitting an application, or
      participating in any Service, you represent that you have read, understood,
      and agree to be bound by these Terms.
    </p>

    <p>
      <strong>PLEASE READ THESE TERMS CAREFULLY.</strong> These Terms include
      important provisions regarding limitations on Reach Nationals's liability,
      indemnification obligations owed to Reach Nationals, intellectual property rights,
      releases, the resolution of disputes, mandatory venue and choice of law,
      and waivers of class action and jury trial rights. If you do not agree to
      every provision of these Terms, you may not access the Site or participate
      in any Service.
    </p>

    <LegalSection title="1. Eligibility">
      <p>
        Participation in Reach Nationals programs is offered only to individuals who: (a)
        are at least eighteen (18) years of age, or who participate with the
        verifiable consent and supervision of a parent or legal guardian; (b)
        meet any program-specific requirements (including current enrollment at
        an accredited college or university, where applicable); (c) have not
        previously been suspended or removed from Reach Nationals; and (d) are not barred
        from participation under applicable law. Reach Nationals may verify eligibility
        and revoke access at any time for any reason or no reason, in its sole
        and absolute discretion.
      </p>
    </LegalSection>

    <LegalSection title="2. Membership and Chapters">
      <p>
        Reach Nationals membership, chapter recognition, leadership appointments, and all
        related privileges are administered jointly by three independent
        parties: (i) the host university or its recognized student-organization
        authority, (ii) the applicable Reach Nationals chapter and its officers, and
        (iii) Reach Nationals Corp. ("Reach Nationals," and together with the
        foregoing, the "Governing Parties"). Each Governing Party exercises its
        own sole and absolute discretion within the scope of its own authority,
        and no Governing Party has the power to override, compel, or bind
        another. A favorable decision by one Governing Party does not
        constitute approval by any other Governing Party, and any one Governing
        Party may, independently and without consultation, deny, suspend,
        modify, condition, or terminate any membership, chapter recognition,
        leadership appointment, or related privilege at any time, without
        notice, and without obligation to refund any dues, fees, or
        contributions.
      </p>
      <p>
        Chapters operate under guidelines, branding standards, and policies
        promulgated by Reach Nationals, in addition to any rules imposed by the
        host university. Chapter officers are not employees, agents, or
        representatives of Reach Nationals, and Reach Nationals does not
        authorize chapter officers to bind Reach Nationals to any contract,
        expenditure, or obligation. Likewise, Reach Nationals is not the
        employer, agent, or representative of any chapter or host university,
        and no Governing Party is liable for the acts, omissions, decisions, or
        obligations of any other Governing Party. Any commitment, promise, or
        representation made by a chapter officer, volunteer, or host-university
        representative that is not expressly authorized in writing by Reach Nationals
        National is not binding on Reach Nationals.
      </p>
    </LegalSection>

    <LegalSection title="3. Applications and Submissions">
      <p>
        All applications, video submissions, written materials, references, and
        related content (collectively, "Submissions") become the property of
        Reach Nationals upon submission and will not be returned. Reach Nationals may use, store,
        evaluate, and dispose of Submissions in its sole discretion. Reach Nationals is
        under no obligation to review any Submission, to provide feedback, or to
        explain admission, leadership, or eligibility decisions.
      </p>
    </LegalSection>

    <LegalSection title="4. User Content and License to Reach Nationals">
      <p>
        "User Content" means any content you post, submit, share, or otherwise
        transmit to Reach Nationals or through Reach Nationals-affiliated channels, including but
        not limited to text, photographs, audio, video, code, designs, social
        media posts that tag Reach Nationals, and Submissions described above. You retain
        ownership of your User Content, but you grant Reach Nationals a perpetual,
        irrevocable, worldwide, royalty-free, fully paid-up, sublicensable, and
        transferable license to use, host, store, reproduce, modify, adapt,
        create derivative works from, publicly perform, publicly display,
        translate, and distribute your User Content in any media now known or
        later developed, for any organizational, editorial, promotional,
        marketing, fundraising, or educational purpose. You waive any moral
        rights or rights of attribution to the extent permitted by applicable
        law.
      </p>
      <p>By submitting User Content, you represent, warrant, and covenant that:</p>
      <LegalList
        items={[
          'You are the sole author and owner of the User Content, or you have obtained all rights, licenses, consents, and permissions necessary to grant Reach Nationals the rights granted in these Terms;',
          'The User Content does not and will not infringe, misappropriate, or violate any third party\'s intellectual property, privacy, publicity, contractual, or other rights;',
          'The User Content does not contain material that is unlawful, defamatory, obscene, harassing, deceptive, or otherwise objectionable;',
          'You have obtained any required consents from any individuals depicted, identified, or quoted in the User Content;',
          'The User Content does not contain malware, hidden code, or any other harmful component.',
        ]}
      />
    </LegalSection>

    <LegalSection title="5. Intellectual Property of Reach Nationals">
      <p>
        All right, title, and interest in and to the Site, the Services, the
        Reach Nationals name, the Reach Nationals logo, the names and trade dress of Reach Nationals chapters,
        all marketing materials, written content, photography, video, design
        elements, software, curricula, playbooks, brand standards, and all
        derivative works of any of the foregoing (collectively, the "Reach Nationals
        Materials") are and will remain the exclusive property of Reach Nationals or its
        licensors and are protected by United States and international
        intellectual property laws. Nothing in these Terms grants you any right,
        title, or license in the Reach Nationals Materials, except a limited, revocable,
        non-exclusive, non-transferable license to access and view the Site for
        personal, non-commercial purposes. You may not copy, modify, distribute,
        sell, lease, sublicense, reverse engineer, or create derivative works of
        any Reach Nationals Materials without Reach Nationals's prior written consent.
      </p>
    </LegalSection>

    <LegalSection title="6. Prohibited Conduct">
      <p>You agree that you will not, and will not permit any third party to:</p>
      <LegalList
        items={[
          'Use the Services to engage in any unlawful, fraudulent, deceptive, harassing, discriminatory, or harmful conduct;',
          'Misrepresent your identity, affiliation with Reach Nationals, or authority to act on behalf of Reach Nationals or any chapter;',
          'Solicit payments, sponsorships, gifts, donations, or partnerships using the Reach Nationals name, logo, or chapter branding without Reach Nationals\'s prior written authorization;',
          'Use Reach Nationals-affiliated channels (including Slack, group chats, newsletters, or social accounts) for personal commercial gain, multi-level marketing, or political campaigning;',
          'Upload, transmit, or distribute viruses, malware, scrapers, scripts, bots, or any technology designed to interfere with the Services;',
          'Attempt to gain unauthorized access to the Site, any Reach Nationals account, or any system, network, or data;',
          'Reverse engineer, decompile, disassemble, or otherwise attempt to derive source code or underlying ideas of any Reach Nationals Materials;',
          'Collect, harvest, or use personal information of other Users without their consent;',
          'Engage in any conduct that violates the Reach Nationals Code of Conduct, our Privacy Policy, or any applicable law, rule, or regulation.',
        ]}
      />
      <p>
        Reach Nationals reserves the right, but is not obligated, to monitor, investigate,
        and remove any User Content or User account that Reach Nationals determines, in
        its sole discretion, violates these Terms or is otherwise inappropriate.
      </p>
    </LegalSection>

    <LegalSection title="7. Assumption of Risk; Release of Reach Nationals">
      <p>
        You acknowledge that participation in Reach Nationals programs, events,
        activations, travel, brand collaborations, and creator opportunities may
        involve risks, including physical, professional, reputational, and
        financial risks. <strong>You voluntarily assume all such risks.</strong>{' '}
        To the maximum extent permitted by applicable law, you hereby release,
        waive, discharge, and covenant not to sue Reach Nationals, its directors, officers,
        employees, volunteers, members, chapter officers, agents, sponsors,
        donors, partners, contractors, and successors (collectively, the "Reach Nationals
        Parties") from any and all claims, demands, losses, damages, costs, or
        expenses (including reasonable attorneys' fees) arising out of or
        relating to your participation in any Service, your interactions with
        other Users, or any content you encounter through the Services, whether
        based in contract, tort, statute, or otherwise.
      </p>
    </LegalSection>

    <LegalSection title="8. Indemnification">
      <p>
        You agree to indemnify, defend, and hold harmless the Reach Nationals Parties from
        and against any and all claims, liabilities, damages, judgments, awards,
        losses, costs, expenses, and fees (including reasonable attorneys' fees)
        arising out of or relating to: (a) your access to or use of the
        Services; (b) your User Content or Submissions; (c) your violation of
        these Terms, the Code of Conduct, the Privacy Policy, or any applicable
        law; (d) your violation of any third-party right, including intellectual
        property, publicity, privacy, or contract rights; and (e) your conduct
        at any Reach Nationals event or in any Reach Nationals-affiliated space. Reach Nationals reserves the
        right, at your expense, to assume the exclusive defense and control of
        any matter for which you are required to indemnify us, and you agree to
        cooperate with our defense.
      </p>
    </LegalSection>

    <LegalSection title="9. Disclaimers">
      <p>
        <strong>
          THE SITE AND THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE,"
          WITH ALL FAULTS, AND WITHOUT WARRANTY OF ANY KIND.
        </strong>{' '}
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, Reach Nationals EXPRESSLY
        DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THE
        IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        TITLE, AND NON-INFRINGEMENT. Reach Nationals MAKES NO WARRANTY THAT THE SITE OR
        SERVICES WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR FREE OF VIRUSES.
        Reach Nationals MAKES NO REPRESENTATION REGARDING THE QUALITY, ACCURACY, OR
        OUTCOMES OF ANY OPPORTUNITY, PARTNERSHIP, INTERNSHIP, EVENT, OR
        EDUCATIONAL CONTENT MADE AVAILABLE THROUGH THE SERVICES.
      </p>
    </LegalSection>

    <LegalSection title="10. Limitation of Liability">
      <p>
        <strong>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL
          THE Reach Nationals PARTIES BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, OR FOR ANY
          LOSS OF PROFITS, REVENUE, DATA, GOODWILL, REPUTATION, OR
          OPPORTUNITIES, ARISING OUT OF OR RELATING TO THESE TERMS OR THE
          SERVICES, REGARDLESS OF THE THEORY OF LIABILITY (INCLUDING CONTRACT,
          TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE), AND EVEN IF Reach Nationals
          HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </strong>
      </p>
      <p>
        THE AGGREGATE LIABILITY OF THE Reach Nationals PARTIES FOR ALL CLAIMS ARISING OUT
        OF OR RELATING TO THESE TERMS OR THE SERVICES WILL NOT EXCEED ONE
        HUNDRED U.S. DOLLARS ($100). YOU ACKNOWLEDGE THAT THIS ALLOCATION OF
        RISK REFLECTS THE BARGAIN BETWEEN THE PARTIES AND THAT Reach Nationals WOULD NOT
        PROVIDE THE SERVICES WITHOUT THESE LIMITATIONS.
      </p>
    </LegalSection>

    <LegalSection title="11. Termination">
      <p>
        Reach Nationals may suspend, restrict, or terminate your access to all or any
        portion of the Services at any time, with or without notice, for any
        reason or no reason, including, without limitation, any conduct that
        Reach Nationals determines, in its sole discretion, violates these Terms, the
        Code of Conduct, or applicable law, or is otherwise harmful to other
        Users, Reach Nationals, or third parties. Upon termination, all rights granted to
        you under these Terms will immediately cease, and Sections 3 through 14
        will survive termination.
      </p>
    </LegalSection>

    <LegalSection title="12. Governing Law; Venue; Jury and Class Action Waivers">
      <p>
        These Terms are governed by and construed in accordance with the laws of
        the State of California, without regard to its conflict-of-laws
        principles. You and Reach Nationals agree that any dispute, claim, or controversy
        arising out of or relating to these Terms, the Site, or the Services
        will be brought exclusively in the state or federal courts located in
        Los Angeles County, California, and you and Reach Nationals consent to the
        personal jurisdiction of such courts and waive any objection to venue
        therein.
      </p>
      <p>
        <strong>
          YOU AND Reach Nationals EACH IRREVOCABLY WAIVE ANY RIGHT TO A TRIAL BY JURY IN
          ANY ACTION OR PROCEEDING ARISING OUT OF OR RELATING TO THESE TERMS OR
          THE SERVICES. YOU AND Reach Nationals EACH AGREE THAT ANY CLAIM MAY ONLY BE
          BROUGHT IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS
          MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, CONSOLIDATED, OR
          REPRESENTATIVE PROCEEDING.
        </strong>
      </p>
    </LegalSection>

    <LegalSection title="13. DMCA / Copyright">
      <p>
        Reach Nationals respects intellectual property rights. If you believe content
        available through the Services infringes a copyright you own or
        control, you may submit a written notice to{' '}
        <a href="mailto:hello@reachnationals.org" className="text-reach-goldDark hover:text-reach-navy font-medium">
          hello@reachnationals.org
        </a>{' '}
        containing: (i) a physical or electronic signature of the copyright
        owner or authorized agent; (ii) identification of the copyrighted work
        claimed to be infringed; (iii) identification of the allegedly
        infringing material and information sufficient to locate it; (iv) your
        contact information; (v) a statement that you have a good-faith belief
        that the use is not authorized; and (vi) a statement, under penalty of
        perjury, that the information in the notice is accurate and that you
        are the copyright owner or authorized to act on the owner's behalf.
        Reach Nationals may, in its sole discretion, remove or disable allegedly
        infringing content and terminate the accounts of repeat infringers.
      </p>
    </LegalSection>

    <LegalSection title="14. General">
      <p>
        These Terms, together with the Privacy Policy and the Code of Conduct,
        constitute the entire agreement between you and Reach Nationals regarding the
        Services and supersede all prior or contemporaneous understandings or
        agreements. If any provision of these Terms is held to be invalid or
        unenforceable, the remaining provisions will remain in full force and
        effect, and the invalid provision will be modified to the minimum
        extent necessary to make it enforceable. Reach Nationals's failure to enforce any
        provision is not a waiver of its right to do so later. You may not
        assign or transfer these Terms without Reach Nationals's prior written consent;
        Reach Nationals may assign these Terms freely. Section headings are for
        convenience only and have no legal effect.
      </p>
    </LegalSection>

    <LegalSection title="15. Changes to These Terms">
      <p>
        Reach Nationals may revise these Terms at any time, in its sole discretion, by
        posting the revised Terms on the Site and updating the "Last updated"
        date above. Material changes will, where reasonably practicable, be
        communicated by email or through a prominent notice on the Site. Your
        continued use of the Site or participation in any Service following the
        posting of revised Terms constitutes your acceptance of the revised
        Terms.
      </p>
    </LegalSection>

    <LegalSection title="16. Contact">
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

export default Terms;
