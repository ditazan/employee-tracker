INSERT INTO departments (name)
VALUES
(`Legal`),
(`Engineering`),
(`Finance`),
(`Sales`);

INSERT INTO roles (title, salary, department_id)
VALUES
(`Lawyer`, `190000`, `1`),
(`Lead Engineer`, `150000`, `2`),
(`Software Engineer`, `130000`, `2`),
(`Lead Accountant`, `160000`, `3`),
(`Accountant`, `120000`, `3`),
(`Salesperson`, `80000`, `4`);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('snooki', 'meatbal', 1, 2),
    ('jwoww', 'jenni', 1, 2),
    ('pauly', 'd', 2, null),
    ('deena', 'meatball', 3, 1),
    ('sammi', 'sweetheart', 4, null),
    ('angelina', 'dirty hamster', 5, 3),
    ('ronnie', 'abuser', 5, 1),
    ('mike', 'the situation', 3, 2),
    ('vinny', 'pink-eye', 6, 2);

