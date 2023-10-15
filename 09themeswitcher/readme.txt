Theme switcher:Another way of using UseContext
1.Default value dina milxa contexts ma so that call nai gare ni euta kei ta set hos(Eg.Yesma light
mode set hos) ra functions pani pass garna milxa context ma .@theme.js
2.Yo method ma create Context bata banauni variables,Provider(jasle values kun kun 
component le use garna pauni vanera wrap garinxa) yo sabai eutai file ma defined hunxa.@theme.js
3.Yo method ma context ma variables ra function ho vanera lekheko vayeni,definition chai feri
tei file ma garyera dina parxa.So,context ma prototype jasto vayo ra jaa provider le wrap garne
file ma feri values={{}} kai naam bata variables ra functions defined hunu paryo.@app.jsx
//Tailwind learnings
1.Dark mode ya light mode activate huna lai html tag ko class "dark" gare dark ra "light" gare 
light hunxa.
2.Default system ko mode anusar dark ra light enabled huni hunxa tailwind ma.But yesma hamilai 
classes anusar chaiyexa so tailwind.config file ma change garxam:
  darkMode: "class",

