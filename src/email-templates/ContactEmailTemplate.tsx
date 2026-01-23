import { Html } from "@react-email/components";
import { Section, Row, Column, Tailwind } from "@react-email/components";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmailTemplate({
  name,
  email,
  message
}: ContactEmailTemplateProps) {
  return (
    <Html lang="en">
      <Tailwind>
        <Row width={undefined} align="left">
          <Column valign="middle">
            <p className="m-0 text-[14px] leading-[20px] font-semibold text-gray-900 mr-[8px]">
              {name}
            </p>
          </Column>
          <Column>
            <span className="text-[14px] leading-[20px] mr-[8px]">•</span>
          </Column>
          <Column>
            <p className="m-0 text-[14px] leading-[20px]">{email}</p>
          </Column>
        </Row>
        <Section className="text-[14px] leading-[20px] text-gray-600 mt-4">
          <p className="m-0 text-[16px] leading-[24px] font-light text-gray-800">
            {message}
          </p>
        </Section>
      </Tailwind>
    </Html>
  );
}
