server.get('/redirect', (request, response) => {

   response.redirect(request.query.url); // Noncompliant
});

