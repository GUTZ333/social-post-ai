import { ReactNode } from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Button,
  Heading,
  Img,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  url: string;
}

export default function VerificationEmail({
  username,
  url,
}: VerificationEmailProps): ReactNode {
  return (
    <Html>
      <Head />
      <Preview>Confirm your email to access your account 🚀</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Logo */}
          <Section style={{ textAlign: "center", marginBottom: "30px" }}>
            <Img
              src="http://localhost:3000/images/social-post-ai.png"
              width="60"
              height="60"
              alt="Logo"
              style={{ margin: "0 auto" }}
            />
          </Section>

          {/* Title */}
          <Heading style={title}>Hi, {username} 👋</Heading>

          {/* Message */}
          <Text style={paragraph}>
            We’re almost there! Click the button below to confirm your email and
            activate your account.
          </Text>

          {/* Button */}
          <Section style={{ textAlign: "center", margin: "30px 0" }}>
            <Button style={button} href={url}>
              Confirm my email
            </Button>
          </Section>

          {/* Footer */}
          <Text style={footer}>
            If you didn’t sign up for our app, you can safely ignore this email.
            <br />— The Social Post AI Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

/* 🎨 Inline styles (necessary for emails) */
const main = {
  backgroundColor: "#f9fafb",
  fontFamily: "Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "40px",
  borderRadius: "12px",
  maxWidth: "500px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
};

const title = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "center" as const,
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#374151",
  marginBottom: "20px",
};

const button = {
  backgroundColor: "#4F46E5",
  color: "#fff",
  fontSize: "16px",
  padding: "14px 28px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
};

const footer = {
  fontSize: "12px",
  color: "#6b7280",
  textAlign: "center" as const,
  marginTop: "30px",
};
