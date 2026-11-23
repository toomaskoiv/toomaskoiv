# Architecture

- Contact submissions go through the public `contact-submit` Edge Function with server-side validation and service-role inserts; the submissions table is inaccessible to visitors to protect contact details.
- Keep client and server contact validation aligned; show success only after a confirmed stored submission and never claim email delivery without a verified send.