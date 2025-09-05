import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Tailwind,
} from '@react-email/components';

interface ForgotPasswordEmailProps {
  name: string | null;
  email: string;
  resetUrl: string;
}

const ForgotPasswordEmail = (props: ForgotPasswordEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-lg max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Text className="text-[24px] font-bold text-gray-900 m-0">
                Reset Your Password
              </Text>
              <Text className="text-[16px] text-gray-600 mt-[8px] m-0">
                We received a request to reset your password
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Hello {props.name},
              </Text>
              
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Someone requested a password reset for your account. If this was you, click the button below to reset your password. This link will expire in 24 hours for security reasons.
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[32px]">
                If you didn't request this password reset, you can safely ignore this email. Your password will remain unchanged.
              </Text>

              {/* Reset Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={props.resetUrl}
                  className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block"
                >
                  Reset Password
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-500 leading-[20px] mb-[16px]">
                If the button above doesn't work, copy and paste this link into your browser:
              </Text>
              
              <Text className="text-[14px] text-blue-600 break-all mb-[24px]">
                {props.resetUrl}
              </Text>
            </Section>

            <Hr className="border-gray-200 my-[32px]" />

            {/* Security Notice */}
            <Section className="bg-gray-50 p-[20px] rounded-[8px] mb-[32px]">
              <Text className="text-[14px] text-gray-700 font-semibold mb-[8px] m-0">
                🔒 Security Notice
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px] m-0">
                For your security, this password reset link will expire in 24 hours. If you need to reset your password after this time, please request a new reset link.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="text-center">
              <Text className="text-[12px] text-gray-500 leading-[16px] mb-[8px]">
                This email was sent from a notification-only address that cannot accept incoming email. Please do not reply to this message.
              </Text>
              
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                © 2025 Your Company Name. All rights reserved.
              </Text>
              
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                123 Business Street, Campinas, SP, Brazil
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ForgotPasswordEmail;