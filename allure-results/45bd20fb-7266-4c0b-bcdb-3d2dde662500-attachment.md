# Page snapshot

```yaml
- generic [ref=e6]:
  - img [ref=e7]
  - heading "Sign up to Label Your Data" [level=1] [ref=e30]
  - generic [ref=e31]:
    - generic [ref=e32]:
      - generic [ref=e33]: Email
      - textbox "Your email" [ref=e34]: testuser+1760342464919@example.com
    - generic [ref=e35]:
      - generic [ref=e36]: User Name
      - textbox "User Name" [ref=e37]: client_test_1760342464919
    - generic [ref=e38]:
      - generic [ref=e39]: Password
      - textbox "Your password" [ref=e40]: Q12qQ34*
      - img [ref=e42] [cursor=pointer]
    - generic [ref=e46]:
      - generic [ref=e47]: Confirm password
      - textbox "Confirm password" [active] [ref=e48]: Q12qQ34*
  - button "Sign up" [ref=e49] [cursor=pointer]
  - generic [ref=e50]: OR
  - button "Google Sign up with Google" [ref=e52] [cursor=pointer]:
    - img "Google"
    - text: Sign up with Google
  - generic [ref=e53]:
    - text: By clicking Sign up, I confirm that I have read and agree with
    - link "Terms and conditions" [ref=e54] [cursor=pointer]:
      - /url: /terms-of-use
  - generic [ref=e55]:
    - text: Have an account already?
    - link "Sign in" [ref=e56] [cursor=pointer]:
      - /url: /sign-in
```