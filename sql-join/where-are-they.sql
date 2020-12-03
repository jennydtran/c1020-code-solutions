select "line1",
       "district",
       "cities"."name" as "city",
       "countries"."name" as "country"
  from "addresses"
  join "cities"
    on "cities"."cityId" = "addresses"."cityId"
  join "countries"
    on "countries"."countryId" = "cities"."countryId";
