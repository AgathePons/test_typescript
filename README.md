# Questions

Si un attribut de classe est privé, comment le tester le setteur sans faire intervenir le getteur ?
ou par exemple comment tester addStagiaire() ?

par exemple pour la birthDate, si on fait:

```js
test('setBirthDate: should be instance of Date', () => {
    expect(stagiaire.getBirthDate()).toBeInstanceOf(Date);
  });
```

on teste quoi là ? `setBirthDate` ou `getBirthDate` ?
