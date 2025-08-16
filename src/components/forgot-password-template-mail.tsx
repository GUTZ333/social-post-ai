// emails/ResetPasswordEmail.tsx
import { Html, Head, Preview, Body, Container, Text, Button } from '@react-email/components';
import { ReactNode } from 'react';

export default function ForgotPasswordReactMail() : ReactNode {
  return <Html>
    <Head />
    <Preview>Redefina sua senha</Preview>
    <Body style={{ backgroundColor: '#f9f9f9', fontFamily: 'Arial, sans-serif' }}>
      <Container style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Text>Olá!</Text>
        <Text>Recebemos uma solicitação para redefinir sua senha.</Text>
        <Text>Clique no botão abaixo para criar uma nova senha:</Text>
        <Button
          href="https://seusite.com/reset-password"
          style={{
            display: 'inline-block',
            padding: '12px 20px',
            backgroundColor: '#2563EB',
            color: '#ffffff',
            borderRadius: '6px',
            textDecoration: 'none',
          }}
        >
          Redefinir Senha
        </Button>
        <Text style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
          Se você não solicitou essa alteração, ignore este e-mail.
        </Text>
      </Container>
    </Body>
  </Html>
}