select "customers"."firstName" || ' ' || "customers"."lastName" as "customer",
       sum("payments"."amount") as "totalPaid"
  from "payments"
  join "customers" using ("customerId")
 group by "customer"
 order by "totalPaid" desc;
