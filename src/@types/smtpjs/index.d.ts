// Type definitions for SmtpJs
// Project: https://smtpjs.com/
// Definitions by: Linda Paiste https://github.com/lindapaiste

// SmtpJS exposes a variable `Email` on the global `window` object
declare namespace Email {
    type Attachment =
        | {
        name: string;
        path: string;
    }
        | {
        name: string;
        data: string; // base64 format
    };

    interface EmailData {
        SecureToken: string;
        To: string | string[];
        From: string;
        Subject: string;
        Body: string;
        Attachments?: Attachment[];
    }

    interface EmailData2{
        Host: string
        Username: string
        Password: string
        To: string
        From : string
        Subject: string
        Body: string

    }

    function send(email: EmailData2): Promise<string>;
}