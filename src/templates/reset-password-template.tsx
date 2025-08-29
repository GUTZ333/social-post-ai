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
} from "@react-email/components";

interface ResetPasswordTemplateProps {
  username: string;
  resetUrl: string; // URL da página para mudar a senha
}

export default function ResetPasswordTemplate({
  username,
  resetUrl,
}: ResetPasswordTemplateProps): ReactNode {
  return (
    <Html>
      <Head />
      <Preview>Redefina sua senha</Preview>
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", padding: "20px" }}>
        <Container style={{ backgroundColor: "#ffffff", borderRadius: "8px", padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
          <Heading style={{ color: "#333", fontSize: "24px", textAlign: "center" }}>
            Olá, {username}!
          </Heading>
          <Text style={{ color: "#555", fontSize: "16px", lineHeight: "24px", margin: "20px 0" }}>
            Recebemos uma solicitação para redefinir sua senha. Clique no botão abaixo para criar uma nova senha.
          </Text>
          <Section style={{ textAlign: "center", margin: "30px 0" }}>
            <Button
              style={{
                backgroundColor: "#4CAF50",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
              href={resetUrl}
            >
              Mudar Senha
            </Button>
          </Section>
          <Text style={{ color: "#999", fontSize: "12px", textAlign: "center" }}>
            Se você não solicitou essa mudança, pode ignorar este e-mail.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
