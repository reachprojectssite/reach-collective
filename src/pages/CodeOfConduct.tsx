import LegalPage, { LegalSection, LegalList } from '../components/layout/LegalPage';

const CodeOfConduct = () => (
  <LegalPage eyebrow="Community" title="Code of Conduct" lastUpdated="May 10, 2026">
    <p>
      This Code of Conduct (the "Code") establishes the standards of behavior
      expected of every individual who participates in any activity affiliated
      with Reach Nationals Corp., a California nonprofit public benefit
      corporation ("Reach Nationals"). The Code is binding on members, applicants, chapter
      officers, chapter members, alumni, guest speakers, volunteers, staff,
      board members, brand representatives, vendors, and any other person
      present at or engaging with Reach Nationals programs (collectively, "Participants").
      Acceptance into any Reach Nationals program, attendance at any Reach Nationals event,
      participation in any Reach Nationals-affiliated online community, or use of any
      Reach Nationals-branded channel constitutes acknowledgment of and agreement to
      comply with this Code.
    </p>

    <LegalSection title="1. Purpose and Scope">
      <p>
        Reach Nationals is committed to maintaining a community in which every Participant
        can pursue their creative, professional, and educational development
        free from harassment, discrimination, exploitation, and harm. This Code
        applies to all spaces and channels affiliated with Reach Nationals, including
        without limitation: chapter meetings, national summits, regional events,
        brand activations, partner events, mixers, retreats, travel arranged or
        funded in whole or in part by Reach Nationals, the Reach Nationals website, Reach Nationals Slack
        workspaces, group chats, newsletters, social media accounts, and any
        communication in which a Participant identifies themselves as
        affiliated with Reach Nationals.
      </p>
    </LegalSection>

    <LegalSection title="2. Standards of Conduct">
      <p>Participants are expected to, at all times:</p>
      <LegalList
        items={[
          'Treat every Participant, guest, partner, vendor, and member of the public with respect, courtesy, and professionalism;',
          'Conduct themselves in a manner that reflects positively on Reach Nationals and the broader community of student creators;',
          'Comply with all applicable laws, the Reach Nationals Terms of Use, the Reach Nationals Privacy Policy, and any rules adopted by Reach Nationals or chapter leadership;',
          'Respect the intellectual property of others, give credit where due, and refrain from plagiarism, content theft, or unauthorized reproduction;',
          'Honor commitments, including event attendance, deliverables, and obligations to brand partners and fellow Participants;',
          'Communicate concerns, criticism, and feedback constructively and through appropriate channels;',
          'Report suspected violations of this Code in good faith.',
        ]}
      />
    </LegalSection>

    <LegalSection title="3. Prohibited Conduct">
      <p>
        The following conduct is strictly prohibited and may result in immediate
        suspension or termination of membership and removal from any Reach Nationals
        program, event, or community, without refund and without prior notice:
      </p>
      <LegalList
        items={[
          'Harassment, intimidation, bullying, stalking, or threatening behavior, whether in person or online;',
          'Discrimination or disparaging conduct on the basis of race, color, ethnicity, national origin, ancestry, religion, sex, gender, gender identity or expression, sexual orientation, age, disability, medical condition, marital status, pregnancy, military or veteran status, body size, appearance, or any other characteristic protected by applicable law;',
          'Sexual harassment of any kind, including unwelcome sexual attention, advances, comments, jokes, propositions, or contact; sharing sexually explicit content without consent; and creating an environment that a reasonable person would consider sexually intimidating or hostile;',
          'Sexual misconduct, assault, or any non-consensual physical contact;',
          'Physical violence, threats of violence, or wishing harm upon any person;',
          'Doxxing or publishing private, identifying, or contact information about any Participant or third party without verifiable consent;',
          'Recording, photographing, or live-streaming any Participant without their consent in any setting where privacy would reasonably be expected;',
          'Unauthorized use of the Reach Nationals name, logo, chapter branding, or affiliation to solicit money, donations, sponsorships, partnerships, or endorsements;',
          'Misrepresenting one\'s identity, affiliation, role, or authority within Reach Nationals;',
          'Engaging in commercial solicitation, multi-level marketing, political campaigning, or unsolicited promotion within Reach Nationals-affiliated channels;',
          'Bringing or distributing illegal drugs at any Reach Nationals event, providing alcohol to minors, or attending any Reach Nationals event so intoxicated as to present a risk to oneself or others;',
          'Theft, vandalism, or damage to property of Reach Nationals, venues, sponsors, or any Participant;',
          'Plagiarism, content theft, or misappropriation of the creative work of any Participant or third party;',
          'Knowingly making false reports under this Code, or retaliating against any Participant for reporting a suspected violation in good faith;',
          'Any conduct that Reach Nationals determines, in its sole discretion, undermines the safety, integrity, or reputation of the Reach Nationals community.',
        ]}
      />
    </LegalSection>

    <LegalSection title="4. Online and Social Media Conduct">
      <p>
        Participants are expected to uphold the standards of this Code in every
        Reach Nationals-affiliated online space and in any public-facing content that
        identifies them as a Participant. The following conduct in online and
        social media spaces is specifically prohibited:
      </p>
      <LegalList
        items={[
          'Public attacks on other Participants, chapters, partners, sponsors, or Reach Nationals itself;',
          'Spreading false or misleading information about Reach Nationals, its programs, or its leadership;',
          'Using the Reach Nationals name, hashtags, or affiliation to promote individuals, brands, or causes without authorization;',
          'Posting confidential or non-public information about Reach Nationals operations, partnerships, applications, or finances;',
          'Engaging in pile-ons, coordinated harassment, or hostile commentary directed at any Participant.',
        ]}
      />
    </LegalSection>

    <LegalSection title="5. Reporting Violations">
      <p>
        Participants who experience or witness conduct they believe violates
        this Code should report it as promptly as possible. Reports may be
        submitted through any of the following channels:
      </p>
      <LegalList
        items={[
          'Email to hello@reachnationals.org with the subject line "Code of Conduct Report";',
          'A confidential message to a chapter President, Vice President, or Reach Nationals staff member;',
          'The contact form available on the Reach Nationals website.',
        ]}
      />
      <p>
        Reports should include, where possible, the names of the individuals
        involved, dates and locations of the incident(s), a description of the
        conduct, any supporting evidence (including screenshots, recordings, or
        witness statements), and the reporter's preferred form of follow-up
        contact. Reports may be submitted anonymously, although the absence of
        identifying information may limit Reach Nationals's ability to investigate.
      </p>
    </LegalSection>

    <LegalSection title="6. Investigation Process">
      <p>
        Reach Nationals will review reports in good faith and may, in its sole discretion,
        conduct an investigation appropriate to the nature and severity of the
        alleged conduct. Investigations may include interviews with the parties
        involved and other witnesses, review of communications and supporting
        materials, and consultation with legal counsel. Reach Nationals will endeavor to
        protect the confidentiality of all parties to the extent reasonably
        practicable, but cannot guarantee complete confidentiality. Reach Nationals may
        take interim measures (including temporary suspension or removal from a
        program or channel) during the pendency of an investigation. The
        investigation and any resulting decision are conducted by Reach Nationals and are
        not subject to external appeal.
      </p>
    </LegalSection>

    <LegalSection title="7. Consequences">
      <p>
        Reach Nationals reserves the sole and absolute discretion to determine appropriate
        responses to conduct that violates this Code. Responses may include,
        without limitation, any one or more of the following:
      </p>
      <LegalList
        items={[
          'A private warning, coaching conversation, or written reprimand;',
          'Removal from a specific event, chapter activity, online channel, or program;',
          'Mandatory training or education prior to continued participation;',
          'Suspension of membership or chapter office for a defined period;',
          'Permanent expulsion from Reach Nationals and a ban from all current and future Reach Nationals programs and affiliated events;',
          'Forfeiture of fees, dues, or program payments without refund;',
          'Notification to the Participant\'s university, chapter, employer, sponsor, or brand partner where Reach Nationals determines, in its sole discretion, that such notification is appropriate;',
          'Referral to law enforcement, regulatory authorities, or other appropriate organizations.',
        ]}
      />
      <p>
        Decisions made under this Code are final and not subject to appeal.
        Reach Nationals may act without prior warning and without proceeding through the
        progressive steps above when the conduct at issue poses an immediate
        risk to any person, to property, or to the integrity of the Reach Nationals
        community.
      </p>
    </LegalSection>

    <LegalSection title="8. Non-Retaliation">
      <p>
        Reach Nationals prohibits retaliation against any Participant who reports a
        suspected violation in good faith, participates in an investigation, or
        otherwise raises a concern under this Code. Retaliation is itself a
        violation of this Code and may result in any of the consequences listed
        in Section 7.
      </p>
    </LegalSection>

    <LegalSection title="9. Relationship to Other Policies and Laws">
      <p>
        This Code supplements, and does not replace, the Reach Nationals Terms of Use,
        the Reach Nationals Privacy Policy, and any applicable laws, regulations,
        university codes, or partner policies. In the event of a conflict
        between this Code and the Reach Nationals Terms of Use, the Terms of Use control.
        Compliance with this Code does not relieve any Participant of their
        independent legal obligations.
      </p>
    </LegalSection>

    <LegalSection title="10. Modifications">
      <p>
        Reach Nationals may amend this Code at any time, in its sole discretion, by
        posting the revised Code on the Reach Nationals website and updating the "Last
        updated" date above. Continued participation in any Reach Nationals program or
        community after a modification constitutes acceptance of the revised
        Code.
      </p>
    </LegalSection>

    <LegalSection title="11. Contact">
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

export default CodeOfConduct;
