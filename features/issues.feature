Feature: /issues

Scenario: GET /issues
  When POST /repos/:owner/:repo/issues
    | owner | $OWNER   |
    | repo  | $REPO    |
    | title | An issue |
  And GET /issues
  Then verify response:
    | status | 200 |
  And json body .issue.title = 'An Issue'
