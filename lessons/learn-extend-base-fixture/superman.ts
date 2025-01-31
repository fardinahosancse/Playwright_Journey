/* Now, imagine we are making a superhero profile.
At first, we only have a basic profile: */
type Superman = { 
    name: string,
    superpower: string,
 };
/* Now, we want to extend this profile to add more information: */
 type SupermanUpgraded = Superman & {
    city:string,
    sidekick: boolean,
 };

 /* Now, let's use this:*/
 const hero: SupermanUpgraded = {
    name: "Superman",
    superpower: "Flight",
    city: "Metropolis",
    sidekick: false,
 }

 console.log(hero.name);
 console.log(hero.superpower);
 console.log(hero.city);
 console.log(hero.sidekick);

