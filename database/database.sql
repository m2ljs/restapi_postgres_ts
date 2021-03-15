create database rapi_express_ts;

create table person(
    id serial primary key,
    name varchar(256),
    email TEXT
);

insert into person(name, email)
    values  ('Mario', 'mario@mail.com'),
            ('Alberto','alberto@mail.com');