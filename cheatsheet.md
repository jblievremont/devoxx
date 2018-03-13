# Devoxx Demo Cheat Sheet

## Do you know SonarLint?

SonarLint is:

* An IDE extension
* Available for several IDEs (Eclipse, IntelliJ, VSCode, Atom, Visual Studio)
* Which provides instant, edit-time insights on your code

Integrates with and complements: IntelliJ's inspections, Eclipse's "Problems" view

## How does it work?

Take this file ``src/main/java/devoxx/NullPointerDereference.java``.
This code (line 7) is underlined. What does it say?

> A "NullPointerException" could be thrown; "trimmedAnimal" is nullable here.

How, why is it nullable? Let's "Toggle all issue locations" to check.
Right, ``trimmedAnimal`` receives the result of ``trim()``, which can indeed be null.

Now, how can we get rid of the issue? Let's reverse the condition - et voilà, no more issue!

# Couldn't tests catch this?

Sure, let's have a look at the test! ``src/test/java/devoxx/NullPointerDereferenceTest.java``.
See, for Java code, SonarLint relies upon SonarJava, which has rules dedicated to tests.
Here, the ``@Ignore``d test is righteously flagged - if it were enabled, the test would fail!

# Good for Java, how about other languages?

Depending on the IDE, SonarLint can work on several languages.
