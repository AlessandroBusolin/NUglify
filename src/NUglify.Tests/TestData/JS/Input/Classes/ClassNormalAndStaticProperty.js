﻿class Foo
{
    static get bar() { return ""; }
    get bar() { return Foo.bar(); }
}