var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "   These are companion notes and it is a work in progress. All material covered in these notes is standard and can be found in references listed below.  Basic Algebra-I by N. Jacobson  Abstract Algebra by D. Dummit and S. Foote  Introduction to Rings And Modules by C. Musili  Lectures on Abstract Algebra by R. Elman  Algebra by S. Lang  Algebra by M. Artin  A first course in noncommutative rings by T. Y. Lam    "
},
{
  "id": "sec-def-rings",
  "level": "1",
  "url": "sec-def-rings.html",
  "type": "Section",
  "number": "1.1",
  "title": "Definition",
  "body": " Definition   (Ring with unity)  A ring with unity is a nonempty set with two binary operations addition, denoted by and multiplication, denoted by satisfying following conditions.  [Group under addition] is an abelian group. We denote by the identity of this group.  [Associativity under multiplication] For any we have .  [Existence of Unity] There is an element , called the unity of , such that for every we have  [Distributive Laws] For any we have       In (1) assume that is a group, not necessarily abelian. If we assume all other axioms of then we get that is abelian. Indeed for any , using distributive laws, we have the following.  Therefore, . Since is a group we have .    There is a concept of a ring without unity , see Section 2.17 of Basic Algebra-I by N. Jacobson. Rings without unity are called, following Jacobson, rngs (word ring without i ).   In this course we always consider rings with unity.   A nonempty set with a binary operation satisfying conditions and above is called a monoid . Thus a ring with unity is a monoid under multiplication and an abelian group under addition. The group structure and monoid structure of a ring are tied together by distributive laws.   We give examples of rings in the next sections. We first deduce some properties of rings with unity.   Let be a ring with unity. We have the following properties.   For any we have , where and are the additive inverses of and , respectively. In particular, the additive inverse of is .  If commutes with , i.e., if then we have the binomial theorem .         When the multiplication operation is clear from the context we often write instead of .  For the additive inverse of is denoted by . The subtraction of two elements  of a ring is written as , where     "
},
{
  "id": "def-rings",
  "level": "2",
  "url": "sec-def-rings.html#def-rings",
  "type": "Definition",
  "number": "1.1.1",
  "title": "(Ring with unity).",
  "body": " (Ring with unity)  A ring with unity is a nonempty set with two binary operations addition, denoted by and multiplication, denoted by satisfying following conditions.  [Group under addition] is an abelian group. We denote by the identity of this group.  [Associativity under multiplication] For any we have .  [Existence of Unity] There is an element , called the unity of , such that for every we have  [Distributive Laws] For any we have     "
},
{
  "id": "observation-1",
  "level": "2",
  "url": "sec-def-rings.html#observation-1",
  "type": "Observation",
  "number": "1.1.2",
  "title": "",
  "body": " In (1) assume that is a group, not necessarily abelian. If we assume all other axioms of then we get that is abelian. Indeed for any , using distributive laws, we have the following.  Therefore, . Since is a group we have .  "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-def-rings.html#remark-1",
  "type": "Remark",
  "number": "1.1.3",
  "title": "",
  "body": " There is a concept of a ring without unity , see Section 2.17 of Basic Algebra-I by N. Jacobson. Rings without unity are called, following Jacobson, rngs (word ring without i ).  "
},
{
  "id": "convention-1",
  "level": "2",
  "url": "sec-def-rings.html#convention-1",
  "type": "Convention",
  "number": "1.1.4",
  "title": "",
  "body": "In this course we always consider rings with unity. "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-def-rings.html#remark-2",
  "type": "Remark",
  "number": "1.1.5",
  "title": "",
  "body": " A nonempty set with a binary operation satisfying conditions and above is called a monoid . Thus a ring with unity is a monoid under multiplication and an abelian group under addition. The group structure and monoid structure of a ring are tied together by distributive laws.  "
},
{
  "id": "proposition-1",
  "level": "2",
  "url": "sec-def-rings.html#proposition-1",
  "type": "Proposition",
  "number": "1.1.6",
  "title": "",
  "body": " Let be a ring with unity. We have the following properties.   For any we have , where and are the additive inverses of and , respectively. In particular, the additive inverse of is .  If commutes with , i.e., if then we have the binomial theorem .     "
},
{
  "id": "convention-2",
  "level": "2",
  "url": "sec-def-rings.html#convention-2",
  "type": "Convention",
  "number": "1.1.7",
  "title": "",
  "body": "   When the multiplication operation is clear from the context we often write instead of .  For the additive inverse of is denoted by . The subtraction of two elements  of a ring is written as , where    "
},
{
  "id": "sec-examples-rings",
  "level": "1",
  "url": "sec-examples-rings.html",
  "type": "Section",
  "number": "1.2",
  "title": "Examples of Rings",
  "body": " Examples of Rings  We give several examples of rings with unity.   (Trivial Ring)  A trivial group is a ring and is called a trivial ring . Note that in a trivial ring . In fact, if in a ring then that ring is trivial.    (Ring of integers)  The set of integers is a ring with the usual addition and the multiplication.    (Rationals, Reals and Complex numbers)  The set of complex numbers , the real numbers , and rationals are rings with the usual addition and the multiplication.    (Gaussian integers)  Let .The subset of  is a ring under the addition and the multiplication inherited from . This ring is called the ring of Gaussian integers . Given any there are unique such that .    (Finite cyclic group as a ring)  Consider a cyclic group . We write the coset of an integer in as . We define the multiplication as follows. Here is the multiplication of integers in .    (Matrices over a ring)  Let be a ring with unity. Consider the set of matrices over , . So It is an abelian group under matrix addition. The matrix multiplication gives a monoid structure.     (Triangular ring)   Consider an abelian group with the group operation written additively. We write the additive identities of and by and , respectively. For and we make following conventions.  Left action:   Right action:   For and any we take Consider a triangular ring . The addition on is defined as follows. The multiplication on is defined as follows. This is the usual matrix multiplication when we take into consideration the left and the right actions defined in and , respectively.     (Polynomial ring)  Let be a ring. Consider the polynomial ring in one variable over : Addition and multiplication is defined in usual way:     (Opposite Ring) Let be a ring. The opposite ring of is denoted by and is defined by the following properties.  We denote elements of by . Thus when is viewed as an element of we denote it by .  The underlying set and the abelian group structure of is the same as that of . In other words, . Hence for we have   The multiplication is defined as follows: for , i.e., for   If for every , then the multiplication in is also the same as that of .   (Product of rings)  Let be a nonempty indexing set and for each let be a ring. The product ring is a ring with componentwise addition and multiplication.  Similar to the above construction we have the following example.  Let be a ring and let be a nonempty set. Let be the set of all functions from to . The set is a ring with following operations of addition and multiplication.      (Endomorphisms of a vector space)  This example is related to (recall from Linear algebra course). Let be a vector space over a field . Consider the set of all endomorphisms of , i.e., the set of all -linear maps from to . This is a ring under following operations. Addition: for and  Multiplication: for and      (Continuous real-valued functions)  Let be a nonempty open interval of . The set of all continuous real-valued functions from to , is a ring under addition of functions and the multiplication defined as follows.    "
},
{
  "id": "example-trivial-ring",
  "level": "2",
  "url": "sec-examples-rings.html#example-trivial-ring",
  "type": "Example",
  "number": "1.2.1",
  "title": "(Trivial Ring).",
  "body": " (Trivial Ring)  A trivial group is a ring and is called a trivial ring . Note that in a trivial ring . In fact, if in a ring then that ring is trivial.  "
},
{
  "id": "example-ring-of-integers",
  "level": "2",
  "url": "sec-examples-rings.html#example-ring-of-integers",
  "type": "Example",
  "number": "1.2.2",
  "title": "(Ring of integers).",
  "body": " (Ring of integers)  The set of integers is a ring with the usual addition and the multiplication.  "
},
{
  "id": "example-rationals-reals-complex",
  "level": "2",
  "url": "sec-examples-rings.html#example-rationals-reals-complex",
  "type": "Example",
  "number": "1.2.3",
  "title": "(Rationals, Reals and Complex numbers).",
  "body": " (Rationals, Reals and Complex numbers)  The set of complex numbers , the real numbers , and rationals are rings with the usual addition and the multiplication.  "
},
{
  "id": "Gaussian-integers",
  "level": "2",
  "url": "sec-examples-rings.html#Gaussian-integers",
  "type": "Example",
  "number": "1.2.4",
  "title": "(Gaussian integers).",
  "body": " (Gaussian integers)  Let .The subset of  is a ring under the addition and the multiplication inherited from . This ring is called the ring of Gaussian integers . Given any there are unique such that .  "
},
{
  "id": "example-finite-group",
  "level": "2",
  "url": "sec-examples-rings.html#example-finite-group",
  "type": "Example",
  "number": "1.2.5",
  "title": "(Finite cyclic group as a ring).",
  "body": " (Finite cyclic group as a ring)  Consider a cyclic group . We write the coset of an integer in as . We define the multiplication as follows. Here is the multiplication of integers in .  "
},
{
  "id": "example-matrices",
  "level": "2",
  "url": "sec-examples-rings.html#example-matrices",
  "type": "Example",
  "number": "1.2.6",
  "title": "(Matrices over a ring).",
  "body": " (Matrices over a ring)  Let be a ring with unity. Consider the set of matrices over , . So It is an abelian group under matrix addition. The matrix multiplication gives a monoid structure.   "
},
{
  "id": "example-triangular-rings",
  "level": "2",
  "url": "sec-examples-rings.html#example-triangular-rings",
  "type": "Example",
  "number": "1.2.7",
  "title": "(Triangular ring).",
  "body": " (Triangular ring)   Consider an abelian group with the group operation written additively. We write the additive identities of and by and , respectively. For and we make following conventions.  Left action:   Right action:   For and any we take Consider a triangular ring . The addition on is defined as follows. The multiplication on is defined as follows. This is the usual matrix multiplication when we take into consideration the left and the right actions defined in and , respectively.   "
},
{
  "id": "example-poly-over-rings",
  "level": "2",
  "url": "sec-examples-rings.html#example-poly-over-rings",
  "type": "Example",
  "number": "1.2.8",
  "title": "(Polynomial ring).",
  "body": " (Polynomial ring)  Let be a ring. Consider the polynomial ring in one variable over : Addition and multiplication is defined in usual way:   "
},
{
  "id": "example-opposite-ring",
  "level": "2",
  "url": "sec-examples-rings.html#example-opposite-ring",
  "type": "Example",
  "number": "1.2.9",
  "title": "(Opposite Ring).",
  "body": " (Opposite Ring) Let be a ring. The opposite ring of is denoted by and is defined by the following properties.  We denote elements of by . Thus when is viewed as an element of we denote it by .  The underlying set and the abelian group structure of is the same as that of . In other words, . Hence for we have   The multiplication is defined as follows: for , i.e., for   If for every , then the multiplication in is also the same as that of . "
},
{
  "id": "example-product-of-rings",
  "level": "2",
  "url": "sec-examples-rings.html#example-product-of-rings",
  "type": "Example",
  "number": "1.2.10",
  "title": "(Product of rings).",
  "body": " (Product of rings)  Let be a nonempty indexing set and for each let be a ring. The product ring is a ring with componentwise addition and multiplication.  Similar to the above construction we have the following example.  Let be a ring and let be a nonempty set. Let be the set of all functions from to . The set is a ring with following operations of addition and multiplication.    "
},
{
  "id": "example-endo-of-vs",
  "level": "2",
  "url": "sec-examples-rings.html#example-endo-of-vs",
  "type": "Example",
  "number": "1.2.11",
  "title": "(Endomorphisms of a vector space).",
  "body": " (Endomorphisms of a vector space)  This example is related to (recall from Linear algebra course). Let be a vector space over a field . Consider the set of all endomorphisms of , i.e., the set of all -linear maps from to . This is a ring under following operations. Addition: for and  Multiplication: for and    "
},
{
  "id": "ring-of-continuous-real-valued-functions",
  "level": "2",
  "url": "sec-examples-rings.html#ring-of-continuous-real-valued-functions",
  "type": "Example",
  "number": "1.2.12",
  "title": "(Continuous real-valued functions).",
  "body": " (Continuous real-valued functions)  Let be a nonempty open interval of . The set of all continuous real-valued functions from to , is a ring under addition of functions and the multiplication defined as follows.   "
},
{
  "id": "sec-types-of-ring-elements",
  "level": "1",
  "url": "sec-types-of-ring-elements.html",
  "type": "Section",
  "number": "1.3",
  "title": "Types of ring elements",
  "body": " Types of ring elements   (Zero-divisors)   A nonzero element of a ring is said to be a left -divisor if there exists a nonzero element such that .  Right -divisors are defined similarly.     A left -divisor need not be a right -divisor. For instance, consider a triangular ring given in with . We denote the additive identity in the ring by . Verify that the following element is a left -divisor but not a right -divisor.     (Nilpotent Element)  An element of a ring said to be nilpotent if there exists a natural number such that in .    (Idempotent Elements and Orthogonal Idempotents)   An element of a ring said to be idempotent if in .  Idempotents of a ring are called the trivial idempotents .  Idempotents are called orthogonal if for every .     (Left and right invertible elements)  Let be a ring. A nonzero element is said to be left invertible (resp., right invertible ) if there exists (resp., ) such that (resp., ), and we call (resp., ) to be a left inverse (resp., a right inverse) of .    Let be a ring, and . If is a left inverse of and is a right inverse of then .   We have and . Multiplying on right by gives . Associativity of multiplication and implies that .    Suppose that has both left and right inverse, say and , respectively. We denote and is called the inverse of . Thus, . The use of an article the before the term inverse is justified in the following .     (Uniqueness of inverse)  If inverse of a nonzero element of a ring exists then it is unique.   Suppose that and are two inverses of a nonzero element of a ring , i.e., and . Thus, this implies that i.e., .   (Invertible element)  A nonzero element is said to be invertible in or a unit in if inverse of exists in . The inverse of is denoted by .   "
},
{
  "id": "def-0-divisor",
  "level": "2",
  "url": "sec-types-of-ring-elements.html#def-0-divisor",
  "type": "Definition",
  "number": "1.3.1",
  "title": "(Zero-divisors).",
  "body": " (Zero-divisors)   A nonzero element of a ring is said to be a left -divisor if there exists a nonzero element such that .  Right -divisors are defined similarly.   "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "sec-types-of-ring-elements.html#remark-3",
  "type": "Remark",
  "number": "1.3.2",
  "title": "",
  "body": " A left -divisor need not be a right -divisor. For instance, consider a triangular ring given in with . We denote the additive identity in the ring by . Verify that the following element is a left -divisor but not a right -divisor.   "
},
{
  "id": "def-nilpotent-element",
  "level": "2",
  "url": "sec-types-of-ring-elements.html#def-nilpotent-element",
  "type": "Definition",
  "number": "1.3.3",
  "title": "(Nilpotent Element).",
  "body": " (Nilpotent Element)  An element of a ring said to be nilpotent if there exists a natural number such that in .  "
},
{
  "id": "def-idempotent-element",
  "level": "2",
  "url": "sec-types-of-ring-elements.html#def-idempotent-element",
  "type": "Definition",
  "number": "1.3.4",
  "title": "(Idempotent Elements and Orthogonal Idempotents).",
  "body": " (Idempotent Elements and Orthogonal Idempotents)   An element of a ring said to be idempotent if in .  Idempotents of a ring are called the trivial idempotents .  Idempotents are called orthogonal if for every .   "
},
{
  "id": "def-left-right-invertible-element",
  "level": "2",
  "url": "sec-types-of-ring-elements.html#def-left-right-invertible-element",
  "type": "Definition",
  "number": "1.3.5",
  "title": "(Left and right invertible elements).",
  "body": " (Left and right invertible elements)  Let be a ring. A nonzero element is said to be left invertible (resp., right invertible ) if there exists (resp., ) such that (resp., ), and we call (resp., ) to be a left inverse (resp., a right inverse) of .  "
},
{
  "id": "left-right-inverse-equality",
  "level": "2",
  "url": "sec-types-of-ring-elements.html#left-right-inverse-equality",
  "type": "Lemma",
  "number": "1.3.6",
  "title": "",
  "body": " Let be a ring, and . If is a left inverse of and is a right inverse of then .  "
},
{
  "id": "proof-1",
  "level": "2",
  "url": "sec-types-of-ring-elements.html#proof-1",
  "type": "Proof",
  "number": "1.3.1",
  "title": "",
  "body": "We have and . Multiplying on right by gives . Associativity of multiplication and implies that . "
},
{
  "id": "convention-3",
  "level": "2",
  "url": "sec-types-of-ring-elements.html#convention-3",
  "type": "Convention",
  "number": "1.3.7",
  "title": "",
  "body": "  Suppose that has both left and right inverse, say and , respectively. We denote and is called the inverse of . Thus, . The use of an article the before the term inverse is justified in the following .   "
},
{
  "id": "uniquenss-of-inverse",
  "level": "2",
  "url": "sec-types-of-ring-elements.html#uniquenss-of-inverse",
  "type": "Lemma",
  "number": "1.3.8",
  "title": "(Uniqueness of inverse).",
  "body": " (Uniqueness of inverse)  If inverse of a nonzero element of a ring exists then it is unique.  "
},
{
  "id": "proof-2",
  "level": "2",
  "url": "sec-types-of-ring-elements.html#proof-2",
  "type": "Proof",
  "number": "1.3.2",
  "title": "",
  "body": "Suppose that and are two inverses of a nonzero element of a ring , i.e., and . Thus, this implies that i.e., . "
},
{
  "id": "def-invertible-element",
  "level": "2",
  "url": "sec-types-of-ring-elements.html#def-invertible-element",
  "type": "Definition",
  "number": "1.3.9",
  "title": "(Invertible element).",
  "body": " (Invertible element)  A nonzero element is said to be invertible in or a unit in if inverse of exists in . The inverse of is denoted by .  "
},
{
  "id": "sec-types-of-rings",
  "level": "1",
  "url": "sec-types-of-rings.html",
  "type": "Section",
  "number": "1.4",
  "title": "Types of Rings",
  "body": " Types of Rings  We define certain types of rings.   (Commutative Ring)  A ring with unity is said to be a commutative ring if for every and every we have . Thus is a commutative monoid under multiplication.     (Integral Domain)  A nonzero ring is said to be an integral domain if is a commutative ring satisfying the following condition.      The ring of integers (see ), the complex, real and rational numbers (see ), the ring of Gaussian integers (see ), polynomial ring over an integral domain (see ), the opposite ring of an integral domain (see ) are some of the examples of integral domains and hence commutative rings.  If are commutative rings then their product (see ) is also commutative. Finite cyclic groups with ring structures defined in are commutative rings.     (Cancellative Monoid)   Suppose that is an integral domain. Let and be elements of . We have the following cancellation property. Since , by a distributive law, . As is assumed to be an integral domain and we have .  Note that, by similar arguments, we also have the right cancellation.      (Reduced Ring)  A ring is said to be reduced if then in .    (Division Ring)  A nonzero ring is said to be a division ring if every nonzero element is invertible, i.e., if is nonzero then there exists a unique such that .    (Field)  A commutative division ring is called a field .    (Associative Algebra over a Field)  Let be a field and be a ring as well as a vector space over . We say that is an associative algebra over a field if following conditions are satisfied.  The underlying set, the addition, and the additive identity of as a ring and as a vector space are the same. In other words, the underlying abelian group structure is the same for as a ring and for as a vector space.  For , we have Note that (resp., and ) is scalar multiplication inherited from the vector space structure. While (resp. ) is the multiplication of ring elements and (resp., and ).   An associative algebra over a field is said to be finite-dimensional if it is finite-dimensional as a vector space over .     Let be an -algebra. For any and every , using , we have the following. Similarly, using , we have the following.  Therefore, the scalar multiplication of and coincides with the ring multiplication of and . Furthermore, by and we get that commutes with every element of , i.e., belongs to the center of , .  "
},
{
  "id": "def-commutative-rings",
  "level": "2",
  "url": "sec-types-of-rings.html#def-commutative-rings",
  "type": "Definition",
  "number": "1.4.1",
  "title": "(Commutative Ring).",
  "body": " (Commutative Ring)  A ring with unity is said to be a commutative ring if for every and every we have . Thus is a commutative monoid under multiplication.   "
},
{
  "id": "def-integral-domain",
  "level": "2",
  "url": "sec-types-of-rings.html#def-integral-domain",
  "type": "Definition",
  "number": "1.4.2",
  "title": "(Integral Domain).",
  "body": " (Integral Domain)  A nonzero ring is said to be an integral domain if is a commutative ring satisfying the following condition.   "
},
{
  "id": "example-13",
  "level": "2",
  "url": "sec-types-of-rings.html#example-13",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "  The ring of integers (see ), the complex, real and rational numbers (see ), the ring of Gaussian integers (see ), polynomial ring over an integral domain (see ), the opposite ring of an integral domain (see ) are some of the examples of integral domains and hence commutative rings.  If are commutative rings then their product (see ) is also commutative. Finite cyclic groups with ring structures defined in are commutative rings.   "
},
{
  "id": "Cancellative-monoid",
  "level": "2",
  "url": "sec-types-of-rings.html#Cancellative-monoid",
  "type": "Observation",
  "number": "1.4.4",
  "title": "(Cancellative Monoid).",
  "body": " (Cancellative Monoid)   Suppose that is an integral domain. Let and be elements of . We have the following cancellation property. Since , by a distributive law, . As is assumed to be an integral domain and we have .  Note that, by similar arguments, we also have the right cancellation.    "
},
{
  "id": "def-reduced-rings",
  "level": "2",
  "url": "sec-types-of-rings.html#def-reduced-rings",
  "type": "Definition",
  "number": "1.4.5",
  "title": "(Reduced Ring).",
  "body": " (Reduced Ring)  A ring is said to be reduced if then in .  "
},
{
  "id": "def-division-ring",
  "level": "2",
  "url": "sec-types-of-rings.html#def-division-ring",
  "type": "Definition",
  "number": "1.4.6",
  "title": "(Division Ring).",
  "body": " (Division Ring)  A nonzero ring is said to be a division ring if every nonzero element is invertible, i.e., if is nonzero then there exists a unique such that .  "
},
{
  "id": "def-fields",
  "level": "2",
  "url": "sec-types-of-rings.html#def-fields",
  "type": "Definition",
  "number": "1.4.7",
  "title": "(Field).",
  "body": " (Field)  A commutative division ring is called a field .  "
},
{
  "id": "def-algebra-over-a-field",
  "level": "2",
  "url": "sec-types-of-rings.html#def-algebra-over-a-field",
  "type": "Definition",
  "number": "1.4.8",
  "title": "(Associative Algebra over a Field).",
  "body": " (Associative Algebra over a Field)  Let be a field and be a ring as well as a vector space over . We say that is an associative algebra over a field if following conditions are satisfied.  The underlying set, the addition, and the additive identity of as a ring and as a vector space are the same. In other words, the underlying abelian group structure is the same for as a ring and for as a vector space.  For , we have Note that (resp., and ) is scalar multiplication inherited from the vector space structure. While (resp. ) is the multiplication of ring elements and (resp., and ).   An associative algebra over a field is said to be finite-dimensional if it is finite-dimensional as a vector space over .   "
},
{
  "id": "scalar-ring-multiplication",
  "level": "2",
  "url": "sec-types-of-rings.html#scalar-ring-multiplication",
  "type": "Observation",
  "number": "1.4.9",
  "title": "",
  "body": " Let be an -algebra. For any and every , using , we have the following. Similarly, using , we have the following.  Therefore, the scalar multiplication of and coincides with the ring multiplication of and . Furthermore, by and we get that commutes with every element of , i.e., belongs to the center of , . "
},
{
  "id": "sec-subrings-ideals",
  "level": "1",
  "url": "sec-subrings-ideals.html",
  "type": "Section",
  "number": "1.5",
  "title": "Subrings and Ideals",
  "body": " Subrings and Ideals  In this section we define notions and terminology related to subrings and ideals of a ring. In the next section we give several examples related to these notions.   (Subring)  A subset of a ring is said to be a subring of if it satisfy the following conditions.  The addition inherited from makes a subgroup of .  The unity of belongs to .  is closed under multiplication inherited from , i.e., for any we have .      A subring of a ring is itself is a ring with unity. Furthermore, the unity of is the same as the unity .    Suppose that ( ) are subrings of a ring . The intersection of , is a subring of .   Since the intersection of subgroups is a subgroup, is a subgroup of under addition. Since for every we get that . We now show that is closed under multiplication. If then for every because is a subring. Consequently, . Hence is a subring.   (Subring generated by a subset)  A subring generated by a nonempty subset of a ring is the intersection of all subrings of which contain .    (Left Ideal and Right Ideal)  Let be a ring. A nonempty subset of is said to be a left ideal (resp., a right ideal ) of if is a subgroup of , and for every and every we have (resp., ).    (Ideal)  A nonempty subset of a ring is said to be an ideal of or a two-sided ideal of if is both a left and a right ideal of . Thus, is an ideal if is a subgroup of and for every and every we have .    (Proper ideal)  A left ideal (resp. right ideal, two-sided ideal) in a ring is said to be a proper ideal if .    (Maximal ideal)   Let be a ring. A left ideal (resp., right ideal or two-sided ideal) of is said to be a maximal left ideal (resp., maximal right ideal or maximal ideal ) of if it is maximal element of the set of all left ideals (resp., right ideals or two-sided ideals) distinct from .  In other words, a left ideal (resp., right ideal or two-sided ideal) is maximal if only left ideal (resp., right ideal or two-sided ideal) of containing are and .     (Prime ideal in a commutative ring)  Let be a commutative ring. A proper ideal in is said to be a prime ideal if then either or .    (Simple Rings)  A ring is said to be simple if only ideals, i.e., only two-sided ideals of are and only.    (Subalgebra)  Let be a field and let be an -algebra. A nonempty subset of is said to be an -subalgebra of if is a subring of and also a vector subspace of .    (Subalgebra generated by a subset)  Let be an -algebra and be a nonempty subset of . The subalgebra generated by is the intersection of all subalgebras of containing . It is denoted by . Thus,     (Ideal in an algebra)  A nonempty subset of an -algebra is said to be an ideal in if is an ideal of as ring and a subspace of as a vector space over .   "
},
{
  "id": "def-subring",
  "level": "2",
  "url": "sec-subrings-ideals.html#def-subring",
  "type": "Definition",
  "number": "1.5.1",
  "title": "(Subring).",
  "body": " (Subring)  A subset of a ring is said to be a subring of if it satisfy the following conditions.  The addition inherited from makes a subgroup of .  The unity of belongs to .  is closed under multiplication inherited from , i.e., for any we have .    "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "sec-subrings-ideals.html#remark-4",
  "type": "Remark",
  "number": "1.5.2",
  "title": "",
  "body": " A subring of a ring is itself is a ring with unity. Furthermore, the unity of is the same as the unity .  "
},
{
  "id": "intersection-of-subrings",
  "level": "2",
  "url": "sec-subrings-ideals.html#intersection-of-subrings",
  "type": "Lemma",
  "number": "1.5.3",
  "title": "",
  "body": " Suppose that ( ) are subrings of a ring . The intersection of , is a subring of .  "
},
{
  "id": "proof-3",
  "level": "2",
  "url": "sec-subrings-ideals.html#proof-3",
  "type": "Proof",
  "number": "1.5.1",
  "title": "",
  "body": "Since the intersection of subgroups is a subgroup, is a subgroup of under addition. Since for every we get that . We now show that is closed under multiplication. If then for every because is a subring. Consequently, . Hence is a subring. "
},
{
  "id": "def-subring-generated-by",
  "level": "2",
  "url": "sec-subrings-ideals.html#def-subring-generated-by",
  "type": "Definition",
  "number": "1.5.4",
  "title": "(Subring generated by a subset).",
  "body": " (Subring generated by a subset)  A subring generated by a nonempty subset of a ring is the intersection of all subrings of which contain .  "
},
{
  "id": "def-left-right-ideal",
  "level": "2",
  "url": "sec-subrings-ideals.html#def-left-right-ideal",
  "type": "Definition",
  "number": "1.5.5",
  "title": "(Left Ideal and Right Ideal).",
  "body": " (Left Ideal and Right Ideal)  Let be a ring. A nonempty subset of is said to be a left ideal (resp., a right ideal ) of if is a subgroup of , and for every and every we have (resp., ).  "
},
{
  "id": "def-ideal",
  "level": "2",
  "url": "sec-subrings-ideals.html#def-ideal",
  "type": "Definition",
  "number": "1.5.6",
  "title": "(Ideal).",
  "body": " (Ideal)  A nonempty subset of a ring is said to be an ideal of or a two-sided ideal of if is both a left and a right ideal of . Thus, is an ideal if is a subgroup of and for every and every we have .  "
},
{
  "id": "def-proper-ideal",
  "level": "2",
  "url": "sec-subrings-ideals.html#def-proper-ideal",
  "type": "Definition",
  "number": "1.5.7",
  "title": "(Proper ideal).",
  "body": " (Proper ideal)  A left ideal (resp. right ideal, two-sided ideal) in a ring is said to be a proper ideal if .  "
},
{
  "id": "maximal-ideal",
  "level": "2",
  "url": "sec-subrings-ideals.html#maximal-ideal",
  "type": "Definition",
  "number": "1.5.8",
  "title": "(Maximal ideal).",
  "body": " (Maximal ideal)   Let be a ring. A left ideal (resp., right ideal or two-sided ideal) of is said to be a maximal left ideal (resp., maximal right ideal or maximal ideal ) of if it is maximal element of the set of all left ideals (resp., right ideals or two-sided ideals) distinct from .  In other words, a left ideal (resp., right ideal or two-sided ideal) is maximal if only left ideal (resp., right ideal or two-sided ideal) of containing are and .   "
},
{
  "id": "def-prime-ideal",
  "level": "2",
  "url": "sec-subrings-ideals.html#def-prime-ideal",
  "type": "Definition",
  "number": "1.5.9",
  "title": "(Prime ideal in a commutative ring).",
  "body": " (Prime ideal in a commutative ring)  Let be a commutative ring. A proper ideal in is said to be a prime ideal if then either or .  "
},
{
  "id": "def-simple-rings",
  "level": "2",
  "url": "sec-subrings-ideals.html#def-simple-rings",
  "type": "Definition",
  "number": "1.5.10",
  "title": "(Simple Rings).",
  "body": " (Simple Rings)  A ring is said to be simple if only ideals, i.e., only two-sided ideals of are and only.  "
},
{
  "id": "def-subalgebra",
  "level": "2",
  "url": "sec-subrings-ideals.html#def-subalgebra",
  "type": "Definition",
  "number": "1.5.11",
  "title": "(Subalgebra).",
  "body": " (Subalgebra)  Let be a field and let be an -algebra. A nonempty subset of is said to be an -subalgebra of if is a subring of and also a vector subspace of .  "
},
{
  "id": "definition-22",
  "level": "2",
  "url": "sec-subrings-ideals.html#definition-22",
  "type": "Definition",
  "number": "1.5.12",
  "title": "(Subalgebra generated by a subset).",
  "body": " (Subalgebra generated by a subset)  Let be an -algebra and be a nonempty subset of . The subalgebra generated by is the intersection of all subalgebras of containing . It is denoted by . Thus,   "
},
{
  "id": "ideal-of-algebra",
  "level": "2",
  "url": "sec-subrings-ideals.html#ideal-of-algebra",
  "type": "Definition",
  "number": "1.5.13",
  "title": "(Ideal in an algebra).",
  "body": " (Ideal in an algebra)  A nonempty subset of an -algebra is said to be an ideal in if is an ideal of as ring and a subspace of as a vector space over .  "
},
{
  "id": "sec-examples-subrings-ideals",
  "level": "1",
  "url": "sec-examples-subrings-ideals.html",
  "type": "Section",
  "number": "1.6",
  "title": "Examples of subrings and ideals",
  "body": " Examples of subrings and ideals  We give several examples of subrings and ideals.   (Centralizer)  Let be a ring and be a nonempty subset of . The centralizer of in is the set of all those elements of that commutes with every element of . It is denoted by . Thus, Verify that is a subring of .    (Center of a ring)  The center of a ring , is the centralizer of in . Thus, The center of is a subring of .    (Certain subrings of a matrix ring) Let be the ring of matrices over a ring . Following subsets of are subrings.  Upper triangular matrices:  Lower triangular matrices:  Diagonal matrices:     (Idealizer)  Let be a right ideal of a ring . The idealizer of is Note that the idealizer of is a subring containing as a two-sided ideal.    (Ideal generated by a finite set)   Let be a ring and let . The ideal generated by is   A particular case is the principal ideal generated by :      (Ideals of )  Note that is an integral domain. Hence, every left ideal of is also a right ideal of . In other words, every ideal of is a two-sided ideal. Let be a nonzero ideal of . Suppose that is the least positive integer in . We claim that generates , i.e., . Since we have, using same actions defined in and , for any . Hence . Suppose that . The division algorithm gives the following. Suppose that . Since and we get . This is a contradiction because is the least positive integer in . Therefore, we must have , i.e., . We thus get .    (Ideals of division rings)  Let be a nonzero left ideal of a division ring . Let be a nonzero element. Hence there exists such that . In particular, and hence for any we have . This shows that every nonzero left ideal of is . Similarly, every nonzero right ideal of a division ring will be the whole ring.    (Left ideals and right ideals of Endomorphism ring of a vector space)   Let be a finite-dimensional vector space over a field and let be a subspace of . We consider an -linear map , by composing it with the inclusion , to be an -endomorphism. In this way, we consider as a subset of . Moreover, is a subgroup of . Let and . Thus, shows that . Therefore, is a right ideal of . In fact, there is a one-one correspondence between subspaces of and right ideals of given by .  Indeed, suppose that is a right ideal of . Consider the following subspace. Thus . Let be a basis for and suppose that are such that for some That is, we are assuming that . Indeed, we may consider to be the maximal linearly independent subset of .  Note that we may have for . Let be a basis of and let . Assume that an -linear map is given as follows. We consider, for each , as follows: Hence for every we get Since belongs to a right ideal , we must have . Therefore, We thus get .  Similarly, there is a one-one correspondence between subspaces of and left ideals of given by .     (Correspondence between ideals of a ring and ideals of a matrix ring over )  Let be a ring and let be the ring of matrices over . If is a subset of we denote by the set of all matrices with entries from . We show that every ideal, i.e., every two-sided ideal of is of the form for some ideal of .  We leave it to the reader to verify that if is an ideal of then is an ideal of .  Suppose that be an ideal of . Consider the following subset of . The set is an ideal of . Let be a matrix such that -th entry is and all other entries are zero. Then for any we have the following. Therefore, for we have By the construction of we get that for any . In particular, .  Conversely, suppose . By the construction of , is the -th entry of some (here may depend on ). Thus, . Hence, and therefore, .     (Annihilators)  Let be a ring and be a right ideal of . The annihilator of is defined as follows. The annihilator of a right ideal is a left ideal of . Similarly, if is a left ideal of we define the annihilator of as follows. The annihilator is a right ideal of .     (Kernel of the evaluation map)  Let be a field and let be the ring of polynomials over in one variable. Fix . We define the evaluation map at as follows. Verify that the following set is an ideal of :     (Some ideals in polynomial ring in several variables)  Let be the polynomial ring in variables. Fix . The following set is a two-sided ideal of .     (Continuous functions vanishing at a point) Let be the ring of continuous real-valued functions on a nonempty interval (see ). Fix . Consider the set of all continuous functions on vanishing at i.e., If then . For any and we have and . Thus, is a two-sided ideal of .   (Ideals in product ring)  Let and be two rings and consider the product ring . If and are ideals then is an ideal of .   "
},
{
  "id": "def-centralizer",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#def-centralizer",
  "type": "Example",
  "number": "1.6.1",
  "title": "(Centralizer).",
  "body": " (Centralizer)  Let be a ring and be a nonempty subset of . The centralizer of in is the set of all those elements of that commutes with every element of . It is denoted by . Thus, Verify that is a subring of .  "
},
{
  "id": "def-center",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#def-center",
  "type": "Example",
  "number": "1.6.2",
  "title": "(Center of a ring).",
  "body": " (Center of a ring)  The center of a ring , is the centralizer of in . Thus, The center of is a subring of .  "
},
{
  "id": "subrings-of-matrices",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#subrings-of-matrices",
  "type": "Example",
  "number": "1.6.3",
  "title": "(Certain subrings of a matrix ring).",
  "body": " (Certain subrings of a matrix ring) Let be the ring of matrices over a ring . Following subsets of are subrings.  Upper triangular matrices:  Lower triangular matrices:  Diagonal matrices:   "
},
{
  "id": "idealizer",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#idealizer",
  "type": "Example",
  "number": "1.6.4",
  "title": "(Idealizer).",
  "body": " (Idealizer)  Let be a right ideal of a ring . The idealizer of is Note that the idealizer of is a subring containing as a two-sided ideal.  "
},
{
  "id": "ideal-generated-by-finite-set",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#ideal-generated-by-finite-set",
  "type": "Example",
  "number": "1.6.5",
  "title": "(Ideal generated by a finite set).",
  "body": " (Ideal generated by a finite set)   Let be a ring and let . The ideal generated by is   A particular case is the principal ideal generated by :    "
},
{
  "id": "ideals-of-Z",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#ideals-of-Z",
  "type": "Example",
  "number": "1.6.6",
  "title": "(Ideals of <span class=\"process-math\">\\(\\Z\\)<\/span>).",
  "body": " (Ideals of )  Note that is an integral domain. Hence, every left ideal of is also a right ideal of . In other words, every ideal of is a two-sided ideal. Let be a nonzero ideal of . Suppose that is the least positive integer in . We claim that generates , i.e., . Since we have, using same actions defined in and , for any . Hence . Suppose that . The division algorithm gives the following. Suppose that . Since and we get . This is a contradiction because is the least positive integer in . Therefore, we must have , i.e., . We thus get .  "
},
{
  "id": "ideals-of-division-rings",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#ideals-of-division-rings",
  "type": "Example",
  "number": "1.6.7",
  "title": "(Ideals of division rings).",
  "body": " (Ideals of division rings)  Let be a nonzero left ideal of a division ring . Let be a nonzero element. Hence there exists such that . In particular, and hence for any we have . This shows that every nonzero left ideal of is . Similarly, every nonzero right ideal of a division ring will be the whole ring.  "
},
{
  "id": "left-right-ideals-of-endomorphism-ring",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#left-right-ideals-of-endomorphism-ring",
  "type": "Example",
  "number": "1.6.8",
  "title": "(Left ideals and right ideals of Endomorphism ring of a vector space).",
  "body": " (Left ideals and right ideals of Endomorphism ring of a vector space)   Let be a finite-dimensional vector space over a field and let be a subspace of . We consider an -linear map , by composing it with the inclusion , to be an -endomorphism. In this way, we consider as a subset of . Moreover, is a subgroup of . Let and . Thus, shows that . Therefore, is a right ideal of . In fact, there is a one-one correspondence between subspaces of and right ideals of given by .  Indeed, suppose that is a right ideal of . Consider the following subspace. Thus . Let be a basis for and suppose that are such that for some That is, we are assuming that . Indeed, we may consider to be the maximal linearly independent subset of .  Note that we may have for . Let be a basis of and let . Assume that an -linear map is given as follows. We consider, for each , as follows: Hence for every we get Since belongs to a right ideal , we must have . Therefore, We thus get .  Similarly, there is a one-one correspondence between subspaces of and left ideals of given by .   "
},
{
  "id": "ideals-of-rings-and-matrix-rings",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#ideals-of-rings-and-matrix-rings",
  "type": "Example",
  "number": "1.6.9",
  "title": "(Correspondence between ideals of a ring <span class=\"process-math\">\\(R\\)<\/span> and ideals of a matrix ring over <span class=\"process-math\">\\(R\\)<\/span>).",
  "body": " (Correspondence between ideals of a ring and ideals of a matrix ring over )  Let be a ring and let be the ring of matrices over . If is a subset of we denote by the set of all matrices with entries from . We show that every ideal, i.e., every two-sided ideal of is of the form for some ideal of .  We leave it to the reader to verify that if is an ideal of then is an ideal of .  Suppose that be an ideal of . Consider the following subset of . The set is an ideal of . Let be a matrix such that -th entry is and all other entries are zero. Then for any we have the following. Therefore, for we have By the construction of we get that for any . In particular, .  Conversely, suppose . By the construction of , is the -th entry of some (here may depend on ). Thus, . Hence, and therefore, .   "
},
{
  "id": "annihilator-of-ideal",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#annihilator-of-ideal",
  "type": "Example",
  "number": "1.6.10",
  "title": "(Annihilators).",
  "body": " (Annihilators)  Let be a ring and be a right ideal of . The annihilator of is defined as follows. The annihilator of a right ideal is a left ideal of . Similarly, if is a left ideal of we define the annihilator of as follows. The annihilator is a right ideal of .   "
},
{
  "id": "kernel-of-evaluation-map",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#kernel-of-evaluation-map",
  "type": "Example",
  "number": "1.6.11",
  "title": "(Kernel of the evaluation map).",
  "body": " (Kernel of the evaluation map)  Let be a field and let be the ring of polynomials over in one variable. Fix . We define the evaluation map at as follows. Verify that the following set is an ideal of :   "
},
{
  "id": "maximal-ideals-of-polynomial-ring",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#maximal-ideals-of-polynomial-ring",
  "type": "Example",
  "number": "1.6.12",
  "title": "(Some ideals in polynomial ring in several variables).",
  "body": " (Some ideals in polynomial ring in several variables)  Let be the polynomial ring in variables. Fix . The following set is a two-sided ideal of .   "
},
{
  "id": "continuous-functions-vanishing-at-point",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#continuous-functions-vanishing-at-point",
  "type": "Example",
  "number": "1.6.13",
  "title": "(Continuous functions vanishing at a point).",
  "body": " (Continuous functions vanishing at a point) Let be the ring of continuous real-valued functions on a nonempty interval (see ). Fix . Consider the set of all continuous functions on vanishing at i.e., If then . For any and we have and . Thus, is a two-sided ideal of . "
},
{
  "id": "ideals-in-product-ring",
  "level": "2",
  "url": "sec-examples-subrings-ideals.html#ideals-in-product-ring",
  "type": "Example",
  "number": "1.6.14",
  "title": "(Ideals in product ring).",
  "body": " (Ideals in product ring)  Let and be two rings and consider the product ring . If and are ideals then is an ideal of .  "
},
{
  "id": "sec-algebra-of-ideals",
  "level": "1",
  "url": "sec-algebra-of-ideals.html",
  "type": "Section",
  "number": "1.7",
  "title": "Algebra of ideals",
  "body": " Algebra of ideals   (Ideal generated by a subset)  Let be a ring and be a subset of . The left ideal generated by (resp., right ideal generated by , ideal generated by ) is denoted by and it is defined as follows.     Let and be left ideals (resp., right ideals, two-sided ideals) in a ring . Then following are left ideals (resp., right ideals, two-sided ideals):  [Smallest left ideal containing both and ] . More generally if are left ideals of then    [Smallest left ideal contained in both and ]     [Left ideal generated by ]    [Powers of a left ideal] when and we assume .  If and are ideals (i.e., two-sided ideals) in then we have following identities.      Left to the reader. We prove more general version of (2) below.   In general .    Let be a nonempty indexing set, and let ( ) be left ideals (resp., right ideals, two-sided ideals) of a ring . Then is a left ideal (resp., a right ideal, two-sided ideal) of .   We only show that the intersection of left ideals is a left ideal. Suppose that . Then, since each is a subgroup, for each . Hence is a subgroup. For any and any , we have because every is a left ideal. Thus, and we get the result.   In view of a left ideal (resp., right ideal, two-sided ideal) generated by is the intersection of all left ideals in containing , i.e.,    "
},
{
  "id": "ideal-generated-by-subset",
  "level": "2",
  "url": "sec-algebra-of-ideals.html#ideal-generated-by-subset",
  "type": "Definition",
  "number": "1.7.1",
  "title": "(Ideal generated by a subset).",
  "body": " (Ideal generated by a subset)  Let be a ring and be a subset of . The left ideal generated by (resp., right ideal generated by , ideal generated by ) is denoted by and it is defined as follows.   "
},
{
  "id": "algebra-of-ideals",
  "level": "2",
  "url": "sec-algebra-of-ideals.html#algebra-of-ideals",
  "type": "Lemma",
  "number": "1.7.2",
  "title": "",
  "body": " Let and be left ideals (resp., right ideals, two-sided ideals) in a ring . Then following are left ideals (resp., right ideals, two-sided ideals):  [Smallest left ideal containing both and ] . More generally if are left ideals of then    [Smallest left ideal contained in both and ]     [Left ideal generated by ]    [Powers of a left ideal] when and we assume .  If and are ideals (i.e., two-sided ideals) in then we have following identities.     "
},
{
  "id": "proof-4",
  "level": "2",
  "url": "sec-algebra-of-ideals.html#proof-4",
  "type": "Proof",
  "number": "1.7.1",
  "title": "",
  "body": "Left to the reader. We prove more general version of (2) below. "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-algebra-of-ideals.html#remark-5",
  "type": "Remark",
  "number": "1.7.3",
  "title": "",
  "body": " In general .  "
},
{
  "id": "intersection-of-ideals-is-ideal",
  "level": "2",
  "url": "sec-algebra-of-ideals.html#intersection-of-ideals-is-ideal",
  "type": "Lemma",
  "number": "1.7.4",
  "title": "",
  "body": " Let be a nonempty indexing set, and let ( ) be left ideals (resp., right ideals, two-sided ideals) of a ring . Then is a left ideal (resp., a right ideal, two-sided ideal) of .  "
},
{
  "id": "proof-5",
  "level": "2",
  "url": "sec-algebra-of-ideals.html#proof-5",
  "type": "Proof",
  "number": "1.7.2",
  "title": "",
  "body": "We only show that the intersection of left ideals is a left ideal. Suppose that . Then, since each is a subgroup, for each . Hence is a subgroup. For any and any , we have because every is a left ideal. Thus, and we get the result. "
},
{
  "id": "observation-4",
  "level": "2",
  "url": "sec-algebra-of-ideals.html#observation-4",
  "type": "Observation",
  "number": "1.7.5",
  "title": "",
  "body": " In view of a left ideal (resp., right ideal, two-sided ideal) generated by is the intersection of all left ideals in containing , i.e.,   "
},
{
  "id": "sec-quaternions",
  "level": "1",
  "url": "sec-quaternions.html",
  "type": "Section",
  "number": "1.8",
  "title": "Quaternion algebra",
  "body": " Quaternion algebra  In this section, we assume that is a field with the property that . We define a Quaternion algebra over .   (Quaternion)  Let be nonzero elements. Consider a -dimensional vector space over with basis . We write for any . Thus . We make a ring by defining and Hence and Given and their multiplication is defined as follows.  This also shows that is the unity of , and is an -algebra.  The algebra is called a quaternion algebra over and it is denoted by .     We say that a quaternion algebra is generated by and over with relations .     (Hamiltonian Quaternion Algebra)  The Hamiltonian quaternion algebra is the quaternion algebra over generated by and such that The Hamiltonian quaternion is denoted by .    ( matrices as quaternions)  Let be a field and a nonzero element. Consider the following matrices. The quaternion algebra generated by and is all matrices over , . This follows because is an -vector space basis of . Furthermore, Therefore, is a quaternion algebra.   "
},
{
  "id": "def-quaternions",
  "level": "2",
  "url": "sec-quaternions.html#def-quaternions",
  "type": "Definition",
  "number": "1.8.1",
  "title": "(Quaternion).",
  "body": " (Quaternion)  Let be nonzero elements. Consider a -dimensional vector space over with basis . We write for any . Thus . We make a ring by defining and Hence and Given and their multiplication is defined as follows.  This also shows that is the unity of , and is an -algebra.  The algebra is called a quaternion algebra over and it is denoted by .   "
},
{
  "id": "convention-4",
  "level": "2",
  "url": "sec-quaternions.html#convention-4",
  "type": "Convention",
  "number": "1.8.2",
  "title": "",
  "body": " We say that a quaternion algebra is generated by and over with relations .   "
},
{
  "id": "Hamiltonian-algebra",
  "level": "2",
  "url": "sec-quaternions.html#Hamiltonian-algebra",
  "type": "Example",
  "number": "1.8.3",
  "title": "(Hamiltonian Quaternion Algebra).",
  "body": " (Hamiltonian Quaternion Algebra)  The Hamiltonian quaternion algebra is the quaternion algebra over generated by and such that The Hamiltonian quaternion is denoted by .  "
},
{
  "id": "split-quaternion",
  "level": "2",
  "url": "sec-quaternions.html#split-quaternion",
  "type": "Example",
  "number": "1.8.4",
  "title": "(<span class=\"process-math\">\\(2\\times 2\\)<\/span> matrices as quaternions).",
  "body": " ( matrices as quaternions)  Let be a field and a nonzero element. Consider the following matrices. The quaternion algebra generated by and is all matrices over , . This follows because is an -vector space basis of . Furthermore, Therefore, is a quaternion algebra.  "
},
{
  "id": "sec-examples-of-algebras",
  "level": "1",
  "url": "sec-examples-of-algebras.html",
  "type": "Section",
  "number": "1.9",
  "title": "Examples of <span class=\"process-math\">\\(F\\)<\/span>-algebras",
  "body": " Examples of -algebras  In this section we assume that is a field. We give several examples of -algebras. In the following examples checking that the underlying abelian group structures for a ring and a vector space are the same will be easy, and it is left to the reader. In some instances we only verify .   (Trivial algebra)  The trivial group as a ring as well as a vector space over is an -algebra.    (Field extensions)  Suppose that is a field containing . Then is a subspace as well as a subring of . We also get that is an algebra because is commutative.    (Matrix algebra)  Consider matrices over , . Recall that is a vector space over via the scalar multiplication defined by Verify that . Thus is an -algebra.    Opposite algebra  Assume that is an -algebra. Consider the opposite ring (see ). We claim that is an -algebra. We make a vector space over via the following scalar multiplication. For any and we define Suppose that and . Then we have Similarly we get . Hence is an -algebra.    (Endomorphisms of a vector space)  Let be a vector space over . By , is a ring and we have seen that it is also a vector space. It is easy to verify that is an -algebra.    (Polynomial ring as an -algebra)  The polynomial ring over , is an -algebra.    (Quaternion algebra)  The ring defined in is an -algebra.    (Centralizer)  Let be an -algebra and be a nonempty subset of . The centralizer of , is an -algebra. This is a subring of (refer to ). Verify that is a vector subspace of . Since is an -algebra the identity is satisfied by . Hence, centralizer is an -subalgebra.   "
},
{
  "id": "trivial-algebra",
  "level": "2",
  "url": "sec-examples-of-algebras.html#trivial-algebra",
  "type": "Example",
  "number": "1.9.1",
  "title": "(Trivial algebra).",
  "body": " (Trivial algebra)  The trivial group as a ring as well as a vector space over is an -algebra.  "
},
{
  "id": "field-extensions",
  "level": "2",
  "url": "sec-examples-of-algebras.html#field-extensions",
  "type": "Example",
  "number": "1.9.2",
  "title": "(Field extensions).",
  "body": " (Field extensions)  Suppose that is a field containing . Then is a subspace as well as a subring of . We also get that is an algebra because is commutative.  "
},
{
  "id": "matrix-algebra",
  "level": "2",
  "url": "sec-examples-of-algebras.html#matrix-algebra",
  "type": "Example",
  "number": "1.9.3",
  "title": "(Matrix algebra).",
  "body": " (Matrix algebra)  Consider matrices over , . Recall that is a vector space over via the scalar multiplication defined by Verify that . Thus is an -algebra.  "
},
{
  "id": "opposite-algebra",
  "level": "2",
  "url": "sec-examples-of-algebras.html#opposite-algebra",
  "type": "Example",
  "number": "1.9.4",
  "title": "Opposite algebra.",
  "body": " Opposite algebra  Assume that is an -algebra. Consider the opposite ring (see ). We claim that is an -algebra. We make a vector space over via the following scalar multiplication. For any and we define Suppose that and . Then we have Similarly we get . Hence is an -algebra.  "
},
{
  "id": "endomorphism-algebra",
  "level": "2",
  "url": "sec-examples-of-algebras.html#endomorphism-algebra",
  "type": "Example",
  "number": "1.9.5",
  "title": "(Endomorphisms of a vector space).",
  "body": " (Endomorphisms of a vector space)  Let be a vector space over . By , is a ring and we have seen that it is also a vector space. It is easy to verify that is an -algebra.  "
},
{
  "id": "polynomial-algebra",
  "level": "2",
  "url": "sec-examples-of-algebras.html#polynomial-algebra",
  "type": "Example",
  "number": "1.9.6",
  "title": "(Polynomial ring as an <span class=\"process-math\">\\(F\\)<\/span>-algebra).",
  "body": " (Polynomial ring as an -algebra)  The polynomial ring over , is an -algebra.  "
},
{
  "id": "example-quaternion-algebra",
  "level": "2",
  "url": "sec-examples-of-algebras.html#example-quaternion-algebra",
  "type": "Example",
  "number": "1.9.7",
  "title": "(Quaternion algebra).",
  "body": " (Quaternion algebra)  The ring defined in is an -algebra.  "
},
{
  "id": "centralizer-of-algebra",
  "level": "2",
  "url": "sec-examples-of-algebras.html#centralizer-of-algebra",
  "type": "Example",
  "number": "1.9.8",
  "title": "(Centralizer).",
  "body": " (Centralizer)  Let be an -algebra and be a nonempty subset of . The centralizer of , is an -algebra. This is a subring of (refer to ). Verify that is a vector subspace of . Since is an -algebra the identity is satisfied by . Hence, centralizer is an -subalgebra.  "
},
{
  "id": "sec-exercises-rings",
  "level": "1",
  "url": "sec-exercises-rings.html",
  "type": "Exercises",
  "number": "1.10",
  "title": "Exercises",
  "body": " Show that is a field if and only if is prime.  Show that is an integral domain if and only if the polynomial ring over , is an integral domain.  Let be a field. The set of polynomials in variables over is  The set is defined inductively. When it is a polynomial ring. Suppose we have defined . Then . Show that it is a ring, in fact, an integral domain. Further show that is an -algebra.   Let be a ring and be a right (resp., left) ideal of . Show that (refer to ).  Let be a finite-dimensional vector space over a field and be a subspace of . Prove the following.   Show that there are no proper nontrivial two-sided ideals in the ring of matrices over a field .  Let be a ring. Show that if has no left inverse but has a right inverse then has infinitely many right inverses. We show that if then has at least right inverses.   Assume that there exists such that is a right inverse of for , and for .  For each we put Show that , i.e., each is a right inverse of .  Show that for and .  Conclude the proof. Give an example of a ring and a nonzero element with no left inverse but infinitely many right inverses.   Let be a finite-dimensional vector space over a field . Show that if has a right inverse then has a left inverse.  "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec-exercises-rings.html#exercise-1",
  "type": "Exercise",
  "number": "1.10.1",
  "title": "",
  "body": "Show that is a field if and only if is prime. "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec-exercises-rings.html#exercise-2",
  "type": "Exercise",
  "number": "1.10.2",
  "title": "",
  "body": "Show that is an integral domain if and only if the polynomial ring over , is an integral domain. "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec-exercises-rings.html#exercise-3",
  "type": "Exercise",
  "number": "1.10.3",
  "title": "",
  "body": "Let be a field. The set of polynomials in variables over is  The set is defined inductively. When it is a polynomial ring. Suppose we have defined . Then . Show that it is a ring, in fact, an integral domain. Further show that is an -algebra.  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec-exercises-rings.html#exercise-4",
  "type": "Exercise",
  "number": "1.10.4",
  "title": "",
  "body": "Let be a ring and be a right (resp., left) ideal of . Show that (refer to ). "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec-exercises-rings.html#exercise-5",
  "type": "Exercise",
  "number": "1.10.5",
  "title": "",
  "body": "Let be a finite-dimensional vector space over a field and be a subspace of . Prove the following.  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-exercises-rings.html#exercise-6",
  "type": "Exercise",
  "number": "1.10.6",
  "title": "",
  "body": "Show that there are no proper nontrivial two-sided ideals in the ring of matrices over a field . "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-exercises-rings.html#exercise-7",
  "type": "Exercise",
  "number": "1.10.7",
  "title": "",
  "body": "Let be a ring. Show that if has no left inverse but has a right inverse then has infinitely many right inverses. We show that if then has at least right inverses.   Assume that there exists such that is a right inverse of for , and for .  For each we put Show that , i.e., each is a right inverse of .  Show that for and .  Conclude the proof. Give an example of a ring and a nonzero element with no left inverse but infinitely many right inverses.  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec-exercises-rings.html#exercise-8",
  "type": "Exercise",
  "number": "1.10.8",
  "title": "",
  "body": "Let be a finite-dimensional vector space over a field . Show that if has a right inverse then has a left inverse. "
},
{
  "id": "sec-ring-homomorphisms",
  "level": "1",
  "url": "sec-ring-homomorphisms.html",
  "type": "Section",
  "number": "2.1",
  "title": "Definition",
  "body": " Definition  We define mappings between rings with unity that preserves the ring structure.   (Ring homomorphism)  Let and be rings with unity. We denote the unity of (resp., unity of ) by (resp., by ). A function is said to be a ring homomorphism if it satisfy following properties.  [Group homomorphism] for every  [Unity maps to unity]  [Preserves multiplication] for all      The first condition in is that a ring homomorphism is a group homomorphism between and . The conditions (2) and (3) in implies that a ring homomorphism is a monoid homomorphism as well.    While considering ring homomorphisms, when context is clear, we often write .    (Kernel of a ring homomorphism)  Let be a ring homomorphism. The kernel of is the following set.     The kernel of a ring homomorphism is a two-sided ideal of .    (Image of a ring homomorphism)  Let be a ring homomorphism. The image of is the following: The is a subring of .   The image of a ring homomorphism need not be an ideal of . For instance, consider the following ring homomorphism from a field to a ring of polynomials over in one variable: The image of this map is the set of all constant polynomials, and hence . Since every nonzero element of the image is invertible it can not be a left or a right or a two-sided ideal. Indeed, suppose that is a left ideal of . Note that every is invertible. If is the inverse of then, . This will imply that if is a left ideal then , a contradiction.   (Monomorphism)  Let be a ring homomorphism. We call a monomorphism if .   Let be a map. The following are equivalent.  is an monomorphism  is a ring homomorphism and it is injective as a set-theoretic map     (Epimorphism)  A ring homomorphism is said to be a epimorphism if .     (Isomorphism)  Let and be rings. The ring homomorphism is said to be an isomorphism if there exists a ring homomorphism such that and , where (resp., ) is the identity homomorphism.   If two rings and are isomorphic then we denote it by .   (Automorphism)  A ring isomorphism from a ring onto itself is said to be an automorphism .   Let and be rings. The set of all ring homomorphisms from to (resp., from to ) is denoted by (resp., ). The set of all ring automorphisms of is denoted by .   (Algebra homomorphism)  Let be a field. Let and be -algebras. A map is said to be an -algebra homomorphism if is both an -vector space homomorphism and a ring homomorphism.   Hence, if and then   Monomorphisms, epimorphisms, isomorphisms, and automorphisms between -algebras are defined in a similar way.  Let and be -algebras. Similar to ring case we denote by , and the sets of all -algebra homomorphisms, -algebra endomorphisms and -algebra automorphisms, respectively. If and are isomorphic -algebras then we write .   "
},
{
  "id": "def-ring-homomorphism",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#def-ring-homomorphism",
  "type": "Definition",
  "number": "2.1.1",
  "title": "(Ring homomorphism).",
  "body": " (Ring homomorphism)  Let and be rings with unity. We denote the unity of (resp., unity of ) by (resp., by ). A function is said to be a ring homomorphism if it satisfy following properties.  [Group homomorphism] for every  [Unity maps to unity]  [Preserves multiplication] for all    "
},
{
  "id": "observation-5",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#observation-5",
  "type": "Observation",
  "number": "2.1.2",
  "title": "",
  "body": " The first condition in is that a ring homomorphism is a group homomorphism between and . The conditions (2) and (3) in implies that a ring homomorphism is a monoid homomorphism as well.  "
},
{
  "id": "convention-5",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#convention-5",
  "type": "Convention",
  "number": "2.1.3",
  "title": "",
  "body": " While considering ring homomorphisms, when context is clear, we often write .  "
},
{
  "id": "def-kernel",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#def-kernel",
  "type": "Definition",
  "number": "2.1.4",
  "title": "(Kernel of a ring homomorphism).",
  "body": " (Kernel of a ring homomorphism)  Let be a ring homomorphism. The kernel of is the following set.   "
},
{
  "id": "observation-6",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#observation-6",
  "type": "Observation",
  "number": "2.1.5",
  "title": "",
  "body": " The kernel of a ring homomorphism is a two-sided ideal of .  "
},
{
  "id": "def-image",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#def-image",
  "type": "Definition",
  "number": "2.1.6",
  "title": "(Image of a ring homomorphism).",
  "body": " (Image of a ring homomorphism)  Let be a ring homomorphism. The image of is the following: The is a subring of .  "
},
{
  "id": "observation-7",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#observation-7",
  "type": "Observation",
  "number": "2.1.7",
  "title": "",
  "body": "The image of a ring homomorphism need not be an ideal of . For instance, consider the following ring homomorphism from a field to a ring of polynomials over in one variable: The image of this map is the set of all constant polynomials, and hence . Since every nonzero element of the image is invertible it can not be a left or a right or a two-sided ideal. Indeed, suppose that is a left ideal of . Note that every is invertible. If is the inverse of then, . This will imply that if is a left ideal then , a contradiction. "
},
{
  "id": "def-monomorphism",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#def-monomorphism",
  "type": "Definition",
  "number": "2.1.8",
  "title": "(Monomorphism).",
  "body": " (Monomorphism)  Let be a ring homomorphism. We call a monomorphism if .  "
},
{
  "id": "observation-8",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#observation-8",
  "type": "Observation",
  "number": "2.1.9",
  "title": "",
  "body": "Let be a map. The following are equivalent.  is an monomorphism  is a ring homomorphism and it is injective as a set-theoretic map   "
},
{
  "id": "def-epimorphism",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#def-epimorphism",
  "type": "Definition",
  "number": "2.1.10",
  "title": "(Epimorphism).",
  "body": " (Epimorphism)  A ring homomorphism is said to be a epimorphism if .  "
},
{
  "id": "def-isomorphism",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#def-isomorphism",
  "type": "Definition",
  "number": "2.1.11",
  "title": "(Isomorphism).",
  "body": " (Isomorphism)  Let and be rings. The ring homomorphism is said to be an isomorphism if there exists a ring homomorphism such that and , where (resp., ) is the identity homomorphism.  "
},
{
  "id": "convention-6",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#convention-6",
  "type": "Convention",
  "number": "2.1.12",
  "title": "",
  "body": "If two rings and are isomorphic then we denote it by . "
},
{
  "id": "definition-32",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#definition-32",
  "type": "Definition",
  "number": "2.1.13",
  "title": "(Automorphism).",
  "body": " (Automorphism)  A ring isomorphism from a ring onto itself is said to be an automorphism .  "
},
{
  "id": "convention-7",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#convention-7",
  "type": "Convention",
  "number": "2.1.14",
  "title": "",
  "body": "Let and be rings. The set of all ring homomorphisms from to (resp., from to ) is denoted by (resp., ). The set of all ring automorphisms of is denoted by . "
},
{
  "id": "def-algebra-homomorphism",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#def-algebra-homomorphism",
  "type": "Definition",
  "number": "2.1.15",
  "title": "(Algebra homomorphism).",
  "body": " (Algebra homomorphism)  Let be a field. Let and be -algebras. A map is said to be an -algebra homomorphism if is both an -vector space homomorphism and a ring homomorphism.  "
},
{
  "id": "convention-8",
  "level": "2",
  "url": "sec-ring-homomorphisms.html#convention-8",
  "type": "Convention",
  "number": "2.1.16",
  "title": "",
  "body": "Let and be -algebras. Similar to ring case we denote by , and the sets of all -algebra homomorphisms, -algebra endomorphisms and -algebra automorphisms, respectively. If and are isomorphic -algebras then we write .  "
},
{
  "id": "sec-examples-rings-algebras-homomorphisms",
  "level": "1",
  "url": "sec-examples-rings-algebras-homomorphisms.html",
  "type": "Section",
  "number": "2.2",
  "title": "Examples",
  "body": " Examples   (Canonical map from to a ring)  Let be any ring with unity. We always have a unique ring homomorphism from to :     (Ring homomorphism onto the trivial ring)  Let be a ring with unity and be a trivial ring. There is a ring epimorphism     (Epimorphism from onto )  Let be a map defined by Verify that is a ring epimorphism.    (Embedding of into an -algebra)  Let be a nonzero -algebra. For this example we denote the unity of by and the unity of by . There is an -algebra monomomorphism from given by . Here denotes the scalar multiplication. By , the field is an -algebra. By , hence is not a zero map. Since is also an -vector space homomorphism, for any , . The kernel of , is a two-sided ideal of . Since every nonzero element of is invertible and is a nonzero map, . Thus given by is a monomorphism.    (Inclusion as a monomorphism of rings)  Let be a subring of a ring . The inclusion map is a monomorphism of rings.    (Homomorphisms from simple rings)  Let be a simple ring (see ) and be a nonzero ring with unity. Any ring homomorphism is a ring monomorphism. Indeed, for any ring homomorphism is a two-sided ideal of . Since is a simple ring and is nonzero, the kernel of , , i.e., is a monomorphism. In particular a ring homomorphism from a division ring or a field to a nonzero ring with unity is a ring monomorphism.     (Conjugation)  Consider as an -algebra (refer to ). The conjugation is an -algebra automorphism.    (Isomorphism between matrices and its opposite algebra) Let be matrices over . For we denote by the transpose of . Consider given by Note that This is an -algebra homomorphism. The kernel of , is a two-sided ideal of . By , is either or . Since is a nonzero map we must have , i.e., is an -algebra monomorphism. In particular is also an injective -linear map. As we get that is surjective. Therefore, is an isomorphism of -algebras.   (Matrix ring over a matrix ring)  We show that for a ring , there is a ring isomorphism . Let , hence . The typical element of is of the following block form. Hence the above matrix has entries from in each row as well as in each column. Assume that and . So the above matrix becomes: The matrix multiplication of is the following matrix in . Define a map given by  . This is additive group homomorphism and eq. shows that , and maps unity to unity. Therefore, is a nonzero ring homomorphism. Verify that is a ring isomorphism.    (Inner automorphism)  Let be a nonzero -algebra and let be the set of all invertible elements of . Since the set is nonempty. Let . The inner automorphism of defined by is     (Evaluation map)  Let be a field and let be the polynomial ring over in one variable. Fix . The evaluation at given below is an -algebra homomorphism. More generally, consider the polynomial ring over in variables. Fix . The evaluation map at given below is an -algebra homomorphism.     (Homomorphism from algebra to the endomorphism ring)  Let be a finite-dimensional -algebra (see ). By , for any we have . Given the map (resp., ) given by (resp., ) is an -linear map. We show that the following maps are -algebra homomorphisms.  Indeed,  Maps and are -linear. For and we have Similarly, using and we get the following.   Maps and are ring homomorphisms. Indeed, Hence, . We also have the following. Hence, . We also have and .      (Projection maps)  Let be a nonempty indexing set. Let be rings, where , and consider the product ring (see ). We denote the additive identity of by and the unity of by . For each consider where for each , Verify that is a ring homomorphism, and that Thus, are orthogonal idempotents of the ring .   "
},
{
  "id": "initial-object-in-Rings",
  "level": "2",
  "url": "sec-examples-rings-algebras-homomorphisms.html#initial-object-in-Rings",
  "type": "Example",
  "number": "2.2.1",
  "title": "(Canonical map from <span class=\"process-math\">\\(\\Z\\)<\/span> to a ring).",
  "body": " (Canonical map from to a ring)  Let be any ring with unity. We always have a unique ring homomorphism from to :   "
},
{
  "id": "terminal-object-in-Rings",
  "level": "2",
  "url": "sec-examples-rings-algebras-homomorphisms.html#terminal-object-in-Rings",
  "type": "Example",
  "number": "2.2.2",
  "title": "(Ring homomorphism onto the trivial ring).",
  "body": " (Ring homomorphism onto the trivial ring)  Let be a ring with unity and be a trivial ring. There is a ring epimorphism   "
},
{
  "id": "canonical-epimorphism-for-Z",
  "level": "2",
  "url": "sec-examples-rings-algebras-homomorphisms.html#canonical-epimorphism-for-Z",
  "type": "Example",
  "number": "2.2.3",
  "title": "(Epimorphism from <span class=\"process-math\">\\(\\Z\\)<\/span> onto <span class=\"process-math\">\\(\\Z\/n\\Z\\)<\/span>).",
  "body": " (Epimorphism from onto )  Let be a map defined by Verify that is a ring epimorphism.  "
},
{
  "id": "embedding-of-field-in-algebra",
  "level": "2",
  "url": "sec-examples-rings-algebras-homomorphisms.html#embedding-of-field-in-algebra",
  "type": "Example",
  "number": "2.2.4",
  "title": "(Embedding of <span class=\"process-math\">\\(F\\)<\/span> into an <span class=\"process-math\">\\(F\\)<\/span>-algebra).",
  "body": " (Embedding of into an -algebra)  Let be a nonzero -algebra. For this example we denote the unity of by and the unity of by . There is an -algebra monomomorphism from given by . Here denotes the scalar multiplication. By , the field is an -algebra. By , hence is not a zero map. Since is also an -vector space homomorphism, for any , . The kernel of , is a two-sided ideal of . Since every nonzero element of is invertible and is a nonzero map, . Thus given by is a monomorphism.  "
},
{
  "id": "inclusion-of-subring",
  "level": "2",
  "url": "sec-examples-rings-algebras-homomorphisms.html#inclusion-of-subring",
  "type": "Example",
  "number": "2.2.5",
  "title": "(Inclusion as a monomorphism of rings).",
  "body": " (Inclusion as a monomorphism of rings)  Let be a subring of a ring . The inclusion map is a monomorphism of rings.  "
},
{
  "id": "morphism-from-simple-rings",
  "level": "2",
  "url": "sec-examples-rings-algebras-homomorphisms.html#morphism-from-simple-rings",
  "type": "Example",
  "number": "2.2.6",
  "title": "(Homomorphisms from simple rings).",
  "body": " (Homomorphisms from simple rings)  Let be a simple ring (see ) and be a nonzero ring with unity. Any ring homomorphism is a ring monomorphism. Indeed, for any ring homomorphism is a two-sided ideal of . Since is a simple ring and is nonzero, the kernel of , , i.e., is a monomorphism. In particular a ring homomorphism from a division ring or a field to a nonzero ring with unity is a ring monomorphism.   "
},
{
  "id": "involution-on-C",
  "level": "2",
  "url": "sec-examples-rings-algebras-homomorphisms.html#involution-on-C",
  "type": "Example",
  "number": "2.2.7",
  "title": "(Conjugation).",
  "body": " (Conjugation)  Consider as an -algebra (refer to ). The conjugation is an -algebra automorphism.  "
},
{
  "id": "iso-between-matrices-opposite-algebra",
  "level": "2",
  "url": "sec-examples-rings-algebras-homomorphisms.html#iso-between-matrices-opposite-algebra",
  "type": "Example",
  "number": "2.2.8",
  "title": "(Isomorphism between matrices and its opposite algebra).",
  "body": " (Isomorphism between matrices and its opposite algebra) Let be matrices over . For we denote by the transpose of . Consider given by Note that This is an -algebra homomorphism. The kernel of , is a two-sided ideal of . By , is either or . Since is a nonzero map we must have , i.e., is an -algebra monomorphism. In particular is also an injective -linear map. As we get that is surjective. Therefore, is an isomorphism of -algebras. "
},
{
  "id": "matrices-over-matrices",
  "level": "2",
  "url": "sec-examples-rings-algebras-homomorphisms.html#matrices-over-matrices",
  "type": "Example",
  "number": "2.2.9",
  "title": "(Matrix ring over a matrix ring).",
  "body": " (Matrix ring over a matrix ring)  We show that for a ring , there is a ring isomorphism . Let , hence . The typical element of is of the following block form. Hence the above matrix has entries from in each row as well as in each column. Assume that and . So the above matrix becomes: The matrix multiplication of is the following matrix in . Define a map given by  . This is additive group homomorphism and eq. shows that , and maps unity to unity. Therefore, is a nonzero ring homomorphism. Verify that is a ring isomorphism.  "
},
{
  "id": "def-inner-automorphism",
  "level": "2",
  "url": "sec-examples-rings-algebras-homomorphisms.html#def-inner-automorphism",
  "type": "Example",
  "number": "2.2.10",
  "title": "(Inner automorphism).",
  "body": " (Inner automorphism)  Let be a nonzero -algebra and let be the set of all invertible elements of . Since the set is nonempty. Let . The inner automorphism of defined by is   "
},
{
  "id": "def-evaluation-map",
  "level": "2",
  "url": "sec-examples-rings-algebras-homomorphisms.html#def-evaluation-map",
  "type": "Example",
  "number": "2.2.11",
  "title": "(Evaluation map).",
  "body": " (Evaluation map)  Let be a field and let be the polynomial ring over in one variable. Fix . The evaluation at given below is an -algebra homomorphism. More generally, consider the polynomial ring over in variables. Fix . The evaluation map at given below is an -algebra homomorphism.   "
},
{
  "id": "matrix-representation-of-algebra",
  "level": "2",
  "url": "sec-examples-rings-algebras-homomorphisms.html#matrix-representation-of-algebra",
  "type": "Example",
  "number": "2.2.12",
  "title": "(Homomorphism from algebra to the endomorphism ring).",
  "body": " (Homomorphism from algebra to the endomorphism ring)  Let be a finite-dimensional -algebra (see ). By , for any we have . Given the map (resp., ) given by (resp., ) is an -linear map. We show that the following maps are -algebra homomorphisms.  Indeed,  Maps and are -linear. For and we have Similarly, using and we get the following.   Maps and are ring homomorphisms. Indeed, Hence, . We also have the following. Hence, . We also have and .    "
},
{
  "id": "projections",
  "level": "2",
  "url": "sec-examples-rings-algebras-homomorphisms.html#projections",
  "type": "Example",
  "number": "2.2.13",
  "title": "(Projection maps).",
  "body": " (Projection maps)  Let be a nonempty indexing set. Let be rings, where , and consider the product ring (see ). We denote the additive identity of by and the unity of by . For each consider where for each , Verify that is a ring homomorphism, and that Thus, are orthogonal idempotents of the ring .  "
},
{
  "id": "ex-ring-homomorphisms",
  "level": "1",
  "url": "ex-ring-homomorphisms.html",
  "type": "Exercises",
  "number": "2.3",
  "title": "Exercises",
  "body": "  Let be a field and let be the ring of matrices over . Show .  Describe all ring homomorphism from to .  Find and .  Show that the following rings are not isomorphic.  for     Does there exists a ring homomorphism from to ?  Let be a field, and let . Show that is an -algebra homomorphism.  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "ex-ring-homomorphisms.html#exercise-9",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "Let be a field and let be the ring of matrices over . Show . "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "ex-ring-homomorphisms.html#exercise-10",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": "Describe all ring homomorphism from to . "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "ex-ring-homomorphisms.html#exercise-11",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": "Find and . "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "ex-ring-homomorphisms.html#exercise-12",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": "Show that the following rings are not isomorphic.  for    "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "ex-ring-homomorphisms.html#exercise-13",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": "Does there exists a ring homomorphism from to ? "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "ex-ring-homomorphisms.html#exercise-14",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": "Let be a field, and let . Show that is an -algebra homomorphism. "
},
{
  "id": "sec-quotient-rings",
  "level": "1",
  "url": "sec-quotient-rings.html",
  "type": "Section",
  "number": "3.1",
  "title": "Definition",
  "body": " Definition   (Quotient ring)  Let be a ring with unity and be a two-sided ideal in . The set of all cosets of modulo is denoted by . Thus, Since is a subgroup of an abelian group , is an abelian group. We define multiplication on using multiplication on :    [Well-definedness of the multiplication] We only show that if then . As , i.e., , and is an ideal we have In particular,   Verify that is the additive identity of , and is the unity in .  Verify that the addition and multiplication on satisfy distributive laws given in (4).  Hence is a ring with unity.    The canonical map defined by is a ring epimorphism with kernel, .    Let be a ring and let be a two-sided ideal of . We write for .   "
},
{
  "id": "def-quotient-ring",
  "level": "2",
  "url": "sec-quotient-rings.html#def-quotient-ring",
  "type": "Definition",
  "number": "3.1.1",
  "title": "(Quotient ring).",
  "body": " (Quotient ring)  Let be a ring with unity and be a two-sided ideal in . The set of all cosets of modulo is denoted by . Thus, Since is a subgroup of an abelian group , is an abelian group. We define multiplication on using multiplication on :    [Well-definedness of the multiplication] We only show that if then . As , i.e., , and is an ideal we have In particular,   Verify that is the additive identity of , and is the unity in .  Verify that the addition and multiplication on satisfy distributive laws given in (4).  Hence is a ring with unity.  "
},
{
  "id": "canonical-quotient-map",
  "level": "2",
  "url": "sec-quotient-rings.html#canonical-quotient-map",
  "type": "Lemma",
  "number": "3.1.2",
  "title": "",
  "body": " The canonical map defined by is a ring epimorphism with kernel, .  "
},
{
  "id": "convention-9",
  "level": "2",
  "url": "sec-quotient-rings.html#convention-9",
  "type": "Convention",
  "number": "3.1.3",
  "title": "",
  "body": " Let be a ring and let be a two-sided ideal of . We write for .  "
},
{
  "id": "sec-isomorphism-theorems",
  "level": "1",
  "url": "sec-isomorphism-theorems.html",
  "type": "Section",
  "number": "3.2",
  "title": "Isomorphism theorems",
  "body": " Isomorphism theorems   (Fundamental theorem of homomorphisms of rings)  Let be a ring homomorphism, and let be the canonical ring homomorphism (see ). There is a unique ring monomorphism from such that . Moreover, there is a ring isomorphism .    (Correspondence between ideals of a ring and its quotient ring)  Let be an ideal of a ring . There is one-one map between ideals of containing and ideals of .     (First Isomorphism Theorem)  Let be an epimorphism of rings.  If is an ideal in then is an ideal in .  [First Isomorphism Theorem] If is an ideal in containing then is an isomorphism of rings.      (Second Isomorphism Theorem)  Let be a ring, be a subring of , and let be an ideal in . The set is a subring of , and the mapping is a ring isomorphism.    (Third isomorphism theorem)  Let be a ring and let and be two-sided ideals of with . Then is an ideal of and .   "
},
{
  "id": "FTH",
  "level": "2",
  "url": "sec-isomorphism-theorems.html#FTH",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "(Fundamental theorem of homomorphisms of rings).",
  "body": " (Fundamental theorem of homomorphisms of rings)  Let be a ring homomorphism, and let be the canonical ring homomorphism (see ). There is a unique ring monomorphism from such that . Moreover, there is a ring isomorphism .  "
},
{
  "id": "ideal-correspondence-quotient-ring",
  "level": "2",
  "url": "sec-isomorphism-theorems.html#ideal-correspondence-quotient-ring",
  "type": "Theorem",
  "number": "3.2.2",
  "title": "(Correspondence between ideals of a ring and its quotient ring).",
  "body": " (Correspondence between ideals of a ring and its quotient ring)  Let be an ideal of a ring . There is one-one map between ideals of containing and ideals of .   "
},
{
  "id": "FIT",
  "level": "2",
  "url": "sec-isomorphism-theorems.html#FIT",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "(First Isomorphism Theorem).",
  "body": " (First Isomorphism Theorem)  Let be an epimorphism of rings.  If is an ideal in then is an ideal in .  [First Isomorphism Theorem] If is an ideal in containing then is an isomorphism of rings.    "
},
{
  "id": "SIT",
  "level": "2",
  "url": "sec-isomorphism-theorems.html#SIT",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "(Second Isomorphism Theorem).",
  "body": " (Second Isomorphism Theorem)  Let be a ring, be a subring of , and let be an ideal in . The set is a subring of , and the mapping is a ring isomorphism.  "
},
{
  "id": "TIT",
  "level": "2",
  "url": "sec-isomorphism-theorems.html#TIT",
  "type": "Theorem",
  "number": "3.2.5",
  "title": "(Third isomorphism theorem).",
  "body": " (Third isomorphism theorem)  Let be a ring and let and be two-sided ideals of with . Then is an ideal of and .  "
},
{
  "id": "sec-prime-maximal-ideal-criterion",
  "level": "1",
  "url": "sec-prime-maximal-ideal-criterion.html",
  "type": "Section",
  "number": "3.3",
  "title": "Prime and maximal ideals",
  "body": " Prime and maximal ideals  We prove the following.   (Existence of a maximal ideal)  Every nonzero commutative ring has a maximal ideal.   Let be a nonzero commutative ring. Let be a set of all proper ideals in . Since the set . We order by inclusion. We will use Zorn's lemma Let be a nonempty partially ordered set. A subset is a chain of if for any either or . The Zorn's lemma asserts that if every chain of has an upper bound in , i.e., there exists such that for every we have , then has at least one maximal element. to prove the statement. In that vein, let be a chain of ideals in , i.e., for any either or . Then is a proper ideal in (verify!). Thus . We have shown that every chain in a nonempty set has an upper bound in . Hence, by Zorn's lemma, has a maximal element.  More generally we have the following.   (Existence of a maximal left ideal)  Let be a ring and let be a proper left ideal in . Then there exists a maximal left ideal in containing .    In a commutative ring every maximal ideal is a prime ideal.   Let be a commutative ring and be a maximal ideal in . Let be such that . Suppose that . Then the ideal generated by and , properly contains . Hence, . In particular, , say for some and . Hence, . Since we get that .   Let be a commutative ring. Then we have the following.  A proper ideal in is a prime ideal if and only if is an integral domain  A proper ideal in is a maximal ideal if and only if is a field.       Let be a prime ideal, and let be such that , i.e., . Thus, and either or because is a prime ideal. Hence, is an integral domain. Conversely, assume that is an integral domain for a proper ideal . Let . Thus . Since is an integral domain we have either or . Hence either or , i.e., is a prime ideal.  Suppose that is a field. By , ideals of containing are and . Thus is a maximal ideal. Conversely, assume that is a maximal ideal. By and the first part of this theorem, is an integral domain. By only ideals of are the trivial ideal and the whole ring. Thus for any nonzero the ideal generated by is . Therefore, there exists such that . Thus, is a field.    In the following proposition we use criterion for prime\/maximal ideal obtained in without explicitly mentioning it.   Let be a commutative ring and let be an ideal in . Then there is a one-one correspondence between prime ideals of containing and prime ideals of . Similarly, there is a one-one correspondence between maximal ideals of containing and maximal ideals of .    Let be a prime ideal in . Consider the ideal in . By , . As is an integral domain, we have is a prime ideal. Conversely assume that is a prime ideal in . Thus there exists an ideal in such that (see ). By , Since is an integral domain, is also an integral domain. Hence, is a prime ideal.  The mapping is one-one follows from .  The statement about maximal ideals follow by similar arguments as given above.    "
},
{
  "id": "existence-of-maximal-ideal",
  "level": "2",
  "url": "sec-prime-maximal-ideal-criterion.html#existence-of-maximal-ideal",
  "type": "Proposition",
  "number": "3.3.1",
  "title": "(Existence of a maximal ideal).",
  "body": " (Existence of a maximal ideal)  Every nonzero commutative ring has a maximal ideal.  "
},
{
  "id": "proof-6",
  "level": "2",
  "url": "sec-prime-maximal-ideal-criterion.html#proof-6",
  "type": "Proof",
  "number": "3.3.1",
  "title": "",
  "body": "Let be a nonzero commutative ring. Let be a set of all proper ideals in . Since the set . We order by inclusion. We will use Zorn's lemma Let be a nonempty partially ordered set. A subset is a chain of if for any either or . The Zorn's lemma asserts that if every chain of has an upper bound in , i.e., there exists such that for every we have , then has at least one maximal element. to prove the statement. In that vein, let be a chain of ideals in , i.e., for any either or . Then is a proper ideal in (verify!). Thus . We have shown that every chain in a nonempty set has an upper bound in . Hence, by Zorn's lemma, has a maximal element. "
},
{
  "id": "existence-of-maximal-left-ideal",
  "level": "2",
  "url": "sec-prime-maximal-ideal-criterion.html#existence-of-maximal-left-ideal",
  "type": "Proposition",
  "number": "3.3.2",
  "title": "(Existence of a maximal left ideal).",
  "body": " (Existence of a maximal left ideal)  Let be a ring and let be a proper left ideal in . Then there exists a maximal left ideal in containing .  "
},
{
  "id": "maximal-implies-prime",
  "level": "2",
  "url": "sec-prime-maximal-ideal-criterion.html#maximal-implies-prime",
  "type": "Lemma",
  "number": "3.3.3",
  "title": "",
  "body": " In a commutative ring every maximal ideal is a prime ideal.  "
},
{
  "id": "proof-7",
  "level": "2",
  "url": "sec-prime-maximal-ideal-criterion.html#proof-7",
  "type": "Proof",
  "number": "3.3.2",
  "title": "",
  "body": "Let be a commutative ring and be a maximal ideal in . Let be such that . Suppose that . Then the ideal generated by and , properly contains . Hence, . In particular, , say for some and . Hence, . Since we get that . "
},
{
  "id": "prime-maximal-criterion-using-quotient",
  "level": "2",
  "url": "sec-prime-maximal-ideal-criterion.html#prime-maximal-criterion-using-quotient",
  "type": "Proposition",
  "number": "3.3.4",
  "title": "",
  "body": " Let be a commutative ring. Then we have the following.  A proper ideal in is a prime ideal if and only if is an integral domain  A proper ideal in is a maximal ideal if and only if is a field.    "
},
{
  "id": "proof-8",
  "level": "2",
  "url": "sec-prime-maximal-ideal-criterion.html#proof-8",
  "type": "Proof",
  "number": "3.3.3",
  "title": "",
  "body": "  Let be a prime ideal, and let be such that , i.e., . Thus, and either or because is a prime ideal. Hence, is an integral domain. Conversely, assume that is an integral domain for a proper ideal . Let . Thus . Since is an integral domain we have either or . Hence either or , i.e., is a prime ideal.  Suppose that is a field. By , ideals of containing are and . Thus is a maximal ideal. Conversely, assume that is a maximal ideal. By and the first part of this theorem, is an integral domain. By only ideals of are the trivial ideal and the whole ring. Thus for any nonzero the ideal generated by is . Therefore, there exists such that . Thus, is a field.   "
},
{
  "id": "proposition-5",
  "level": "2",
  "url": "sec-prime-maximal-ideal-criterion.html#proposition-5",
  "type": "Proposition",
  "number": "3.3.5",
  "title": "",
  "body": " Let be a commutative ring and let be an ideal in . Then there is a one-one correspondence between prime ideals of containing and prime ideals of . Similarly, there is a one-one correspondence between maximal ideals of containing and maximal ideals of .    Let be a prime ideal in . Consider the ideal in . By , . As is an integral domain, we have is a prime ideal. Conversely assume that is a prime ideal in . Thus there exists an ideal in such that (see ). By , Since is an integral domain, is also an integral domain. Hence, is a prime ideal.  The mapping is one-one follows from .  The statement about maximal ideals follow by similar arguments as given above.   "
},
{
  "id": "ex-prime-maximal-ideals",
  "level": "1",
  "url": "ex-prime-maximal-ideals.html",
  "type": "Exercises",
  "number": "3.4",
  "title": "Exercises",
  "body": " Let be a ring homomorphism of commutative rings. Show that inverse image of a prime ideal under is a prime ideal.  Give an example of a ring homomorphism of commutative rings such that the inverse image of a maximal ideal need not be a maximal ideal. Consider the inclusion ring homomorphism .  Show that in a finite commutative ring every prime ideal is a maximal ideal. Let be a finite commutative ring, and let be a nonzero prime ideal in . Thus is a finite integral domain, therefore is a field.  Suppose that is a commutative ring in which for every and some . Show that every prime ideal in is maximal. Let be a prime ideal in . Let . We have , i.e., . Since is prime, is an integral domain. Thus either or .  Let be a commutative ring, and let be an ideal in . Define . Show that is an ideal in . Further show that if is a prime ideal in then .  Let be the ring of all continuous real-valued functions on . Show that the maximal ideals of are of the following form  Let be a maximal ideal in . Assume that for any , i.e., given there exists such that . Since is continuous function there exists an open interval containing such that for any . In this way we get an open covering of a compact space . Thus there are such that . Since is an ideal, the function and this function does not vanish on . Thus for any . Hence .  Let be the ring of all continuous real-valued functions on . Let be distinct real numbers. Show that is an ideal of which is not a prime ideal. Consider functions and .   Let be a commutative ring, and let be an ideal of . In each of the following cases decide whether or not is a prime ideal of or not.   and   .    and   .   and   .   "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "ex-prime-maximal-ideals.html#exercise-15",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": "Let be a ring homomorphism of commutative rings. Show that inverse image of a prime ideal under is a prime ideal. "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "ex-prime-maximal-ideals.html#exercise-16",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": "Give an example of a ring homomorphism of commutative rings such that the inverse image of a maximal ideal need not be a maximal ideal. Consider the inclusion ring homomorphism . "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "ex-prime-maximal-ideals.html#exercise-17",
  "type": "Exercise",
  "number": "3.4.3",
  "title": "",
  "body": "Show that in a finite commutative ring every prime ideal is a maximal ideal. Let be a finite commutative ring, and let be a nonzero prime ideal in . Thus is a finite integral domain, therefore is a field. "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "ex-prime-maximal-ideals.html#exercise-18",
  "type": "Exercise",
  "number": "3.4.4",
  "title": "",
  "body": "Suppose that is a commutative ring in which for every and some . Show that every prime ideal in is maximal. Let be a prime ideal in . Let . We have , i.e., . Since is prime, is an integral domain. Thus either or . "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "ex-prime-maximal-ideals.html#exercise-19",
  "type": "Exercise",
  "number": "3.4.5",
  "title": "",
  "body": "Let be a commutative ring, and let be an ideal in . Define . Show that is an ideal in . Further show that if is a prime ideal in then . "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "ex-prime-maximal-ideals.html#exercise-20",
  "type": "Exercise",
  "number": "3.4.6",
  "title": "",
  "body": "Let be the ring of all continuous real-valued functions on . Show that the maximal ideals of are of the following form  Let be a maximal ideal in . Assume that for any , i.e., given there exists such that . Since is continuous function there exists an open interval containing such that for any . In this way we get an open covering of a compact space . Thus there are such that . Since is an ideal, the function and this function does not vanish on . Thus for any . Hence . "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "ex-prime-maximal-ideals.html#exercise-21",
  "type": "Exercise",
  "number": "3.4.7",
  "title": "",
  "body": "Let be the ring of all continuous real-valued functions on . Let be distinct real numbers. Show that is an ideal of which is not a prime ideal. Consider functions and . "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "ex-prime-maximal-ideals.html#exercise-22",
  "type": "Exercise",
  "number": "3.4.8",
  "title": "",
  "body": " and   . "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "ex-prime-maximal-ideals.html#exercise-23",
  "type": "Exercise",
  "number": "3.4.9",
  "title": "",
  "body": " and   . "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "ex-prime-maximal-ideals.html#exercise-24",
  "type": "Exercise",
  "number": "3.4.10",
  "title": "",
  "body": " and   . "
},
{
  "id": "sec-arithmetic-in-Z",
  "level": "1",
  "url": "sec-arithmetic-in-Z.html",
  "type": "Section",
  "number": "4.1",
  "title": "Arithmetic in <span class=\"process-math\">\\(\\Z\\)<\/span>",
  "body": " Arithmetic in  Recall that every ideal in is generated by a single integer, i.e., every ideal in is principal (see ). For it is easy to see that . We use this fact without explicitly mentioning it.   (Divisibility and containment of ideals in )  Let . Let ideal generated by , and ideal generated by . Then we show the following  , i.e., divides if and only if .  If then .  If then .       Suppose that , i.e., there exists such that . Hence, and therefore any multiple of is also in the ideal . Thus . Conversely, if then there exists such that , i.e., divides .  Since every ideal of is principal and the intersection of ideals is an ideal, there exists such that . In particular, and . By (1), we have and . Therefore, and hence . Conversely, since , and we get that . We thus proved the result.  This is left to the reader. Recall that is the smallest ideal containing both and .    We next consider quotient rings.   Let be an ideal of , where . Then we have the following.  If is not a prime number then is not an integral domain.  The ring is a field if and only if is prime.  The group of units of ,        Suppose that is not a prime. Thus there exists natural numbers and such that . Hence where, and .  Suppose that is a prime number. For any , and hence (see (3)), i.e., there exists with . Therefore, , i.e., is invertible. Converse follows from the part (1) of this proposition.  Suppose that is a unit, i.e., there exists a unique such that , i.e., for some . If is a (positive) divisor of both and then must divide . Hence , i.e., . Converse is left to the reader.     Let be a prime number. The field is denoted by .   Let be the Euler's phi function, i.e., is the number of positive integers less equal and coprime to . Use a result from Group theory to show that if is a positive integer such that then    (Universal property of the field of rational numbers)  Consider the canonical homomorphism (see ). Let be a field and be a ring monomorphism. Then there is a unique ring monomorphism from such that .   For a nonzero element (resp., ) its inverse is denoted by (resp., ). For any , because is a monomorphism of rings. We define using as follows. It is left to the reader to check that is a well-defined ring monomorphism, and that . We show the uniqueness. Suppose that be a ring monomorphism such that . Since is a ring homomorphism we must have Thus we get , for any . By ring homomorphism properties we have . Hence uniqueness is proved.    (Chinese remainder theorem)  Suppose that are distinct prime numbers. Let be natural numbers, and put . There is a ring isomorphism defined by      [Well-definedness] Suppose that , i.e., . Hence for some . For each we therefore have (see Fundamental theorem of arithmetic ). Hence, for each , and thus is well-defined.  To check is a ring homomorphism is left to the reader.   [Injectivity] Suppose that , i.e., for each . In other words, . Since , by , we get that . Hence is injective.   [Surjectivity] We only show that is in the image of . By , we have for any . Therefore, for every , there are and such that Put . Then and Hence .     Since the isomorphism given in is a ring homomorphism the group of units on both sides are also isomorphic. Thus    "
},
{
  "id": "Divisibility-ideals-in-Z",
  "level": "2",
  "url": "sec-arithmetic-in-Z.html#Divisibility-ideals-in-Z",
  "type": "Lemma",
  "number": "4.1.1",
  "title": "(Divisibility and containment of ideals in <span class=\"process-math\">\\(\\Z\\)<\/span>).",
  "body": " (Divisibility and containment of ideals in )  Let . Let ideal generated by , and ideal generated by . Then we show the following  , i.e., divides if and only if .  If then .  If then .    "
},
{
  "id": "proof-10",
  "level": "2",
  "url": "sec-arithmetic-in-Z.html#proof-10",
  "type": "Proof",
  "number": "4.1.1",
  "title": "",
  "body": "  Suppose that , i.e., there exists such that . Hence, and therefore any multiple of is also in the ideal . Thus . Conversely, if then there exists such that , i.e., divides .  Since every ideal of is principal and the intersection of ideals is an ideal, there exists such that . In particular, and . By (1), we have and . Therefore, and hence . Conversely, since , and we get that . We thus proved the result.  This is left to the reader. Recall that is the smallest ideal containing both and .   "
},
{
  "id": "prime-number-implies-field-in-Z",
  "level": "2",
  "url": "sec-arithmetic-in-Z.html#prime-number-implies-field-in-Z",
  "type": "Proposition",
  "number": "4.1.2",
  "title": "",
  "body": " Let be an ideal of , where . Then we have the following.  If is not a prime number then is not an integral domain.  The ring is a field if and only if is prime.  The group of units of ,     "
},
{
  "id": "proof-11",
  "level": "2",
  "url": "sec-arithmetic-in-Z.html#proof-11",
  "type": "Proof",
  "number": "4.1.2",
  "title": "",
  "body": "  Suppose that is not a prime. Thus there exists natural numbers and such that . Hence where, and .  Suppose that is a prime number. For any , and hence (see (3)), i.e., there exists with . Therefore, , i.e., is invertible. Converse follows from the part (1) of this proposition.  Suppose that is a unit, i.e., there exists a unique such that , i.e., for some . If is a (positive) divisor of both and then must divide . Hence , i.e., . Converse is left to the reader.   "
},
{
  "id": "convention-10",
  "level": "2",
  "url": "sec-arithmetic-in-Z.html#convention-10",
  "type": "Convention",
  "number": "4.1.3",
  "title": "",
  "body": " Let be a prime number. The field is denoted by .  "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "sec-arithmetic-in-Z.html#exercise-25",
  "type": "Checkpoint",
  "number": "4.1.4",
  "title": "",
  "body": "Let be the Euler's phi function, i.e., is the number of positive integers less equal and coprime to . Use a result from Group theory to show that if is a positive integer such that then  "
},
{
  "id": "universal-property-of-Q",
  "level": "2",
  "url": "sec-arithmetic-in-Z.html#universal-property-of-Q",
  "type": "Proposition",
  "number": "4.1.5",
  "title": "(Universal property of the field of rational numbers).",
  "body": " (Universal property of the field of rational numbers)  Consider the canonical homomorphism (see ). Let be a field and be a ring monomorphism. Then there is a unique ring monomorphism from such that .  "
},
{
  "id": "proof-12",
  "level": "2",
  "url": "sec-arithmetic-in-Z.html#proof-12",
  "type": "Proof",
  "number": "4.1.3",
  "title": "",
  "body": "For a nonzero element (resp., ) its inverse is denoted by (resp., ). For any , because is a monomorphism of rings. We define using as follows. It is left to the reader to check that is a well-defined ring monomorphism, and that . We show the uniqueness. Suppose that be a ring monomorphism such that . Since is a ring homomorphism we must have Thus we get , for any . By ring homomorphism properties we have . Hence uniqueness is proved.  "
},
{
  "id": "Chinese-remainder-theorem-in-Z",
  "level": "2",
  "url": "sec-arithmetic-in-Z.html#Chinese-remainder-theorem-in-Z",
  "type": "Theorem",
  "number": "4.1.6",
  "title": "(Chinese remainder theorem).",
  "body": " (Chinese remainder theorem)  Suppose that are distinct prime numbers. Let be natural numbers, and put . There is a ring isomorphism defined by   "
},
{
  "id": "proof-13",
  "level": "2",
  "url": "sec-arithmetic-in-Z.html#proof-13",
  "type": "Proof",
  "number": "4.1.4",
  "title": "",
  "body": "  [Well-definedness] Suppose that , i.e., . Hence for some . For each we therefore have (see Fundamental theorem of arithmetic ). Hence, for each , and thus is well-defined.  To check is a ring homomorphism is left to the reader.   [Injectivity] Suppose that , i.e., for each . In other words, . Since , by , we get that . Hence is injective.   [Surjectivity] We only show that is in the image of . By , we have for any . Therefore, for every , there are and such that Put . Then and Hence .   "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-arithmetic-in-Z.html#remark-6",
  "type": "Remark",
  "number": "4.1.7",
  "title": "",
  "body": " Since the isomorphism given in is a ring homomorphism the group of units on both sides are also isomorphic. Thus   "
},
{
  "id": "sec-prime-maximal-ideals-in-Z",
  "level": "1",
  "url": "sec-prime-maximal-ideals-in-Z.html",
  "type": "Section",
  "number": "4.2",
  "title": "Prime and maximal ideals in <span class=\"process-math\">\\(\\Z\\)<\/span>",
  "body": " Prime and maximal ideals in   (Prime ideal is generated by a prime number)  A nonzero ideal in is a prime ideal if and only if is generated by a prime number.    Suppose that is a nonzero prime ideal. By , there exists such that . Let be such that , i.e., there exists such that . Since is a prime ideal, and , either or (see ). Thus either or . If then we get because, by our assumption, . If , say for some , then , i.e., . As is an integral domain, and hence . Thus a divisor of is either or , i.e., is a prime number.  Conversely let be a prime number and consider the ideal generated by , . We show that is a prime ideal. Let be such that , i.e., (see ). As is a prime numeber either or . By either or .    In view of the above result it is clear that there are infinitely many prime ideals in .   As a consequence of we obtain the following result.   (A nonzero prime ideal if and only if maximal)  A nonzero ideal in is a prime ideal if and only if is a maximal ideal.   This follows from and . Suppose that is a nonzero prime ideal. By , is generated by a prime number. By , is a field. If is an ideal containing then is an ideal of (see ). By only ideals of fields are the trivial ideal and the whole field we must have either or . Hence is a maximal ideal.  Suppose that is a maximal ideal, say generated by , i.e., . Let be a divisor of , i.e., . By , . As is maximal either or , i.e., either or (see ). Hence must be a prime number. By , is a prime ideal.    In a commutative ring, a maximal ideal is always a prime ideal. However, a prime ideal may not be a maximal ideal, in general.   "
},
{
  "id": "prime-ideal-generated-by-prime-in-Z",
  "level": "2",
  "url": "sec-prime-maximal-ideals-in-Z.html#prime-ideal-generated-by-prime-in-Z",
  "type": "Theorem",
  "number": "4.2.1",
  "title": "(Prime ideal is generated by a prime number).",
  "body": " (Prime ideal is generated by a prime number)  A nonzero ideal in is a prime ideal if and only if is generated by a prime number.  "
},
{
  "id": "proof-14",
  "level": "2",
  "url": "sec-prime-maximal-ideals-in-Z.html#proof-14",
  "type": "Proof",
  "number": "4.2.1",
  "title": "",
  "body": " Suppose that is a nonzero prime ideal. By , there exists such that . Let be such that , i.e., there exists such that . Since is a prime ideal, and , either or (see ). Thus either or . If then we get because, by our assumption, . If , say for some , then , i.e., . As is an integral domain, and hence . Thus a divisor of is either or , i.e., is a prime number.  Conversely let be a prime number and consider the ideal generated by , . We show that is a prime ideal. Let be such that , i.e., (see ). As is a prime numeber either or . By either or .  "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "sec-prime-maximal-ideals-in-Z.html#remark-7",
  "type": "Remark",
  "number": "4.2.2",
  "title": "",
  "body": " In view of the above result it is clear that there are infinitely many prime ideals in .  "
},
{
  "id": "every-prime-is-maximal-in-Z",
  "level": "2",
  "url": "sec-prime-maximal-ideals-in-Z.html#every-prime-is-maximal-in-Z",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "(A nonzero prime ideal if and only if maximal).",
  "body": " (A nonzero prime ideal if and only if maximal)  A nonzero ideal in is a prime ideal if and only if is a maximal ideal.  "
},
{
  "id": "proof-15",
  "level": "2",
  "url": "sec-prime-maximal-ideals-in-Z.html#proof-15",
  "type": "Proof",
  "number": "4.2.2",
  "title": "",
  "body": "This follows from and . Suppose that is a nonzero prime ideal. By , is generated by a prime number. By , is a field. If is an ideal containing then is an ideal of (see ). By only ideals of fields are the trivial ideal and the whole field we must have either or . Hence is a maximal ideal.  Suppose that is a maximal ideal, say generated by , i.e., . Let be a divisor of , i.e., . By , . As is maximal either or , i.e., either or (see ). Hence must be a prime number. By , is a prime ideal.  "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "sec-prime-maximal-ideals-in-Z.html#remark-8",
  "type": "Remark",
  "number": "4.2.4",
  "title": "",
  "body": " In a commutative ring, a maximal ideal is always a prime ideal. However, a prime ideal may not be a maximal ideal, in general.  "
},
{
  "id": "sec-polynomial-rings",
  "level": "1",
  "url": "sec-polynomial-rings.html",
  "type": "Section",
  "number": "4.3",
  "title": "Polynomial rings",
  "body": " Polynomial rings  Let be a ring. A polynomial ring in one variable over is the following: with if and only if for . If and with then the addition is defined to be commutative and is given as follows. and the multiplication is defined by Under the binary operations defined above is a ring with unity. The additive identity is and the multiplicative identity is . The ring is called a polynomial ring over . It is a commutative ring if and only if is a commutative ring. There is a ring monomorphism Suppose . We call the constant term of and the leading coefficient of . We denote the leading coefficient of by . If then the we define the degree of , . If then is called a monic polynomial . If or then we call a constant polynomial . We let . We define the degree of the zero polynomial . We follow the convention that for any we have and . A polynomial ring in variables , is defined as the polynomial ring in over , i.e.,     Let be a ring and let .   with equality if and only if     "
},
{
  "id": "p-55",
  "level": "2",
  "url": "sec-polynomial-rings.html#p-55",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polynomial ring in variables "
},
{
  "id": "lemma-9",
  "level": "2",
  "url": "sec-polynomial-rings.html#lemma-9",
  "type": "Lemma",
  "number": "4.3.1",
  "title": "",
  "body": " Let be a ring and let .   with equality if and only if    "
},
{
  "id": "sec-division-algorithm",
  "level": "1",
  "url": "sec-division-algorithm.html",
  "type": "Section",
  "number": "4.4",
  "title": "Division algorithm",
  "body": " Division algorithm   (Division Algorithm)  Let be a commutative ring with unity. Let and be elements of . Suppose that and . Then there exists , and with such that    If then the resuLC follows by taking and . So, assume that . Suppose that Put . Thus Therefore, . We use induction on . Thus, by induction, there exists , and with such that Hence,    If is invertible then there exists with such that Moreover, and are uniquely determined.    The above is particularly useful when we consider polynomial ring in several variables over a field.    (Divisor)  Let be a commutative ring and let . We say that divides , and write it as , if there exists such that .     Let be a commutative ring. Suppose that and . Then In other words, the evaluation map is a ring homomorphism. We use this observation without explicitly mentioning it.  If ring is not commutative then need not be the same as . We first recall that is obtained as follows: First write in the form and then .  Suppose that and consider the following polynomials over : Then We can then see that , while .     (Root of a polynomial)  Let be a commutative ring and . An element is said to be a root of in if .    (Root iff linear factor)  Let be a nonzero commutative ring. Suppose that and . We have if and only if for some .   Indeed, as is a unit, by , there exists with (i.e., is a constant polynomial) such that . Since we get . Thus , which is a constant polynomial, must be zero. Hence we get the resuLC.   Let be an integral domain, and let be a nonzero polynomial. If are pairwise distinct roots of then divides .   The case when is . We now assume that . By repeated application of , and . Since is an integral domain, . Moreover for , . Since is an integral domain and , we have . By induction, divides . Therefore, we get the resuLC.   (Finite roots)  Let be a field and . Then has at most many roots in .    Let , a product ring as defined in . It is a commutative ring but not an integral domain. There are infinitely many roots of the polynomial in . For instance, let be such that occurs at -th place and all other entries are . Then, is a root of for each .    (Gaussian integers as a quotient ring)  We show that . Consider the map defined by Check that the map is a ring epimorphism. We compute its kernel, . The ideal generated by , . Now suppose that . Since the is invertible in , we use , to obtain with such that . Hence, If then , by , for some . This implies that , a contradiction. Hence and . Therefore, and by , we get the resuLC.    (Radical of )   The below example has connections to geometry. We will not make the connection explicit in this course. However, you may see the curve in  here . Consider and the ideal generated by , . We show that if is such that for any then . We consider as polynomials over in variable . Thus we can apply to get the following. By the assumption, for every , and hence we get that This shows that the polynomial has infinitely many roots in . By , we must have . Comparing even degree and odd degree terms we get that . Thus, and the resuLC is proved.    (Examples of maximal ideals in )  Let be a field and let be the polynomial ring over in variables. We give examples of maximal ideals in . Fix . Consider the evaluation -algebra homomorphism. Thus the kernel of this map is Hence the ideal generated by , . We claim that   Let . We consider . By there exists with , i.e., is a constant polynomial in , i.e., such that We thus have . We now consider . Again applying , there exists with , i.e., is a constant polynomial in such that . Thus we also get . Continuing in this way we get that and, by , there exists with , i.e., such that Thus we have , i.e., . Putting successive expression of in we get that Hence and we get the desired resuLC.  The is surjective. Hence, by , . By the ideal generated by , is maximal.     (Reducible and irreducible polynomial in )   Let be a field. A nonconstant polynomial is said to be an reducible polynomial if there exists nonconstant polynomials with and such that .  A nonconstant polynomial in is called an irreducible polynomial in F[X] or an irreducible polynomial over if it is not reducible.     (Irreduciblility of polynomial depends on the underlying field)  If we consider over or then this polynomial is irreducible. However the same polynomial is reducible over . Indeed, , where is such that .   "
},
{
  "id": "division-algorithm",
  "level": "2",
  "url": "sec-division-algorithm.html#division-algorithm",
  "type": "Theorem",
  "number": "4.4.1",
  "title": "(Division Algorithm).",
  "body": " (Division Algorithm)  Let be a commutative ring with unity. Let and be elements of . Suppose that and . Then there exists , and with such that   "
},
{
  "id": "proof-16",
  "level": "2",
  "url": "sec-division-algorithm.html#proof-16",
  "type": "Proof",
  "number": "4.4.1",
  "title": "",
  "body": "If then the resuLC follows by taking and . So, assume that . Suppose that Put . Thus Therefore, . We use induction on . Thus, by induction, there exists , and with such that Hence,  "
},
{
  "id": "division-algorithm-for-LC-unit",
  "level": "2",
  "url": "sec-division-algorithm.html#division-algorithm-for-LC-unit",
  "type": "Corollary",
  "number": "4.4.2",
  "title": "",
  "body": " If is invertible then there exists with such that Moreover, and are uniquely determined.  "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "sec-division-algorithm.html#remark-9",
  "type": "Remark",
  "number": "4.4.3",
  "title": "",
  "body": " The above is particularly useful when we consider polynomial ring in several variables over a field.  "
},
{
  "id": "def-divisor-polynomial",
  "level": "2",
  "url": "sec-division-algorithm.html#def-divisor-polynomial",
  "type": "Definition",
  "number": "4.4.4",
  "title": "(Divisor).",
  "body": " (Divisor)  Let be a commutative ring and let . We say that divides , and write it as , if there exists such that .  "
},
{
  "id": "observation-9",
  "level": "2",
  "url": "sec-division-algorithm.html#observation-9",
  "type": "Observation",
  "number": "4.4.5",
  "title": "",
  "body": "  Let be a commutative ring. Suppose that and . Then In other words, the evaluation map is a ring homomorphism. We use this observation without explicitly mentioning it.  If ring is not commutative then need not be the same as . We first recall that is obtained as follows: First write in the form and then .  Suppose that and consider the following polynomials over : Then We can then see that , while .   "
},
{
  "id": "def-root",
  "level": "2",
  "url": "sec-division-algorithm.html#def-root",
  "type": "Definition",
  "number": "4.4.6",
  "title": "(Root of a polynomial).",
  "body": " (Root of a polynomial)  Let be a commutative ring and . An element is said to be a root of in if .  "
},
{
  "id": "root-iff-linear-factor",
  "level": "2",
  "url": "sec-division-algorithm.html#root-iff-linear-factor",
  "type": "Lemma",
  "number": "4.4.7",
  "title": "(Root iff linear factor).",
  "body": " (Root iff linear factor)  Let be a nonzero commutative ring. Suppose that and . We have if and only if for some .  "
},
{
  "id": "proof-17",
  "level": "2",
  "url": "sec-division-algorithm.html#proof-17",
  "type": "Proof",
  "number": "4.4.2",
  "title": "",
  "body": "Indeed, as is a unit, by , there exists with (i.e., is a constant polynomial) such that . Since we get . Thus , which is a constant polynomial, must be zero. Hence we get the resuLC. "
},
{
  "id": "lemma-11",
  "level": "2",
  "url": "sec-division-algorithm.html#lemma-11",
  "type": "Lemma",
  "number": "4.4.8",
  "title": "",
  "body": " Let be an integral domain, and let be a nonzero polynomial. If are pairwise distinct roots of then divides .  "
},
{
  "id": "proof-18",
  "level": "2",
  "url": "sec-division-algorithm.html#proof-18",
  "type": "Proof",
  "number": "4.4.3",
  "title": "",
  "body": "The case when is . We now assume that . By repeated application of , and . Since is an integral domain, . Moreover for , . Since is an integral domain and , we have . By induction, divides . Therefore, we get the resuLC. "
},
{
  "id": "finite-roots",
  "level": "2",
  "url": "sec-division-algorithm.html#finite-roots",
  "type": "Corollary",
  "number": "4.4.9",
  "title": "(Finite roots).",
  "body": " (Finite roots)  Let be a field and . Then has at most many roots in .  "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "sec-division-algorithm.html#remark-10",
  "type": "Remark",
  "number": "4.4.10",
  "title": "",
  "body": " Let , a product ring as defined in . It is a commutative ring but not an integral domain. There are infinitely many roots of the polynomial in . For instance, let be such that occurs at -th place and all other entries are . Then, is a root of for each .  "
},
{
  "id": "Gaussian-integers-as-quotient-rings",
  "level": "2",
  "url": "sec-division-algorithm.html#Gaussian-integers-as-quotient-rings",
  "type": "Example",
  "number": "4.4.11",
  "title": "(Gaussian integers as a quotient ring).",
  "body": " (Gaussian integers as a quotient ring)  We show that . Consider the map defined by Check that the map is a ring epimorphism. We compute its kernel, . The ideal generated by , . Now suppose that . Since the is invertible in , we use , to obtain with such that . Hence, If then , by , for some . This implies that , a contradiction. Hence and . Therefore, and by , we get the resuLC.  "
},
{
  "id": "radical-ideal-twisted-cubic-curve",
  "level": "2",
  "url": "sec-division-algorithm.html#radical-ideal-twisted-cubic-curve",
  "type": "Example",
  "number": "4.4.12",
  "title": "(Radical of <span class=\"process-math\">\\((Y^2-X^3)\\)<\/span>).",
  "body": " (Radical of )   The below example has connections to geometry. We will not make the connection explicit in this course. However, you may see the curve in  here . Consider and the ideal generated by , . We show that if is such that for any then . We consider as polynomials over in variable . Thus we can apply to get the following. By the assumption, for every , and hence we get that This shows that the polynomial has infinitely many roots in . By , we must have . Comparing even degree and odd degree terms we get that . Thus, and the resuLC is proved.  "
},
{
  "id": "maximal-ideals-in-poly-in-several-variables",
  "level": "2",
  "url": "sec-division-algorithm.html#maximal-ideals-in-poly-in-several-variables",
  "type": "Example",
  "number": "4.4.13",
  "title": "(Examples of maximal ideals in <span class=\"process-math\">\\(F[X_1,\\ldots,X_n]\\)<\/span>).",
  "body": " (Examples of maximal ideals in )  Let be a field and let be the polynomial ring over in variables. We give examples of maximal ideals in . Fix . Consider the evaluation -algebra homomorphism. Thus the kernel of this map is Hence the ideal generated by , . We claim that   Let . We consider . By there exists with , i.e., is a constant polynomial in , i.e., such that We thus have . We now consider . Again applying , there exists with , i.e., is a constant polynomial in such that . Thus we also get . Continuing in this way we get that and, by , there exists with , i.e., such that Thus we have , i.e., . Putting successive expression of in we get that Hence and we get the desired resuLC.  The is surjective. Hence, by , . By the ideal generated by , is maximal.   "
},
{
  "id": "def-irreducible-polynomial",
  "level": "2",
  "url": "sec-division-algorithm.html#def-irreducible-polynomial",
  "type": "Definition",
  "number": "4.4.14",
  "title": "(Reducible and irreducible polynomial in <span class=\"process-math\">\\(F[X]\\)<\/span>).",
  "body": " (Reducible and irreducible polynomial in )   Let be a field. A nonconstant polynomial is said to be an reducible polynomial if there exists nonconstant polynomials with and such that .  A nonconstant polynomial in is called an irreducible polynomial in F[X] or an irreducible polynomial over if it is not reducible.   "
},
{
  "id": "example-54",
  "level": "2",
  "url": "sec-division-algorithm.html#example-54",
  "type": "Example",
  "number": "4.4.15",
  "title": "(Irreduciblility of polynomial depends on the underlying field).",
  "body": " (Irreduciblility of polynomial depends on the underlying field)  If we consider over or then this polynomial is irreducible. However the same polynomial is reducible over . Indeed, , where is such that .  "
},
{
  "id": "sec-arithmetic-in-polynomials",
  "level": "1",
  "url": "sec-arithmetic-in-polynomials.html",
  "type": "Section",
  "number": "4.5",
  "title": "Arithmetic in <span class=\"process-math\">\\(F[X]\\)<\/span>",
  "body": " Arithmetic in   Let be a field and let . Then if and only if .    Let be a field and let be nonzero polynomials. Suppose that and . Thus there exists such that and . Therefore, , i.e., . As is an integral domain and , we have , i.e., are units in . Hence, are constant polynomials.    (Associates)  Two polynomials are said to be associates if there is a such that .    Let be a polynomial ring in one variable over a field . A nonzero polynomial is invertible if and only if it is a nonzero constant polynomial.    (Every ideal of is principal)  Let be a field. Every ideal of is generated by a single element.   We assume that is a nonzero ideal. Let be a nonzero element of least degree among all elements of . We claim that . Let . We apply to get with such that . Now if then we get that . This is a contradiction to the minimality of . Therefore, and . Hence the result is proved.   (Irreducible polynomial generates a maximal ideal)  Let be a field. An ideal generated by an irreducible polynomial in is a maximal ideal.   Let be an irreducible polynomial. Suppose that is an ideal containing . By , there exists such that . Since we have . However as is irreducible we must have is a unit or . In other words, or .   (Irreducible polynomial implies prime)  Let be a field and let be an irreducible polynomial. If then either or .   Suppose that , i.e., . Consider the ideal . By , , i.e., there exist such that . Therefore . By the assumption and hence , i.e., .   (Unique factorization in polynomial ring in one variable over a field)  Let be a field and let be the polynomial ring over in one variable. Then every non-constant polynomial can be written as a product of finite number of irreducible polynomials , i.e., Furthermore, the above expression is unique up to associates, i.e., if an another factorization of into irreducibles then and there is some renumbering of so that associate of .   If is irreducible then we are done. So, assume that is reducible. Let be a factorization of and neither is a constant polynomial. If both are irreducible polynomials we are done. Now assume that one of the polynomials, say is reducible. So, there are , not both constant, such that . Say is reducible. Then we continue the process. We claim that this process will eventually terminate. Suppose not. Then we get the following infinite chain of ideals: Since is not a constant polynomial the first inclusion is strict. Similar reasoning implies that all inclusion are strict. Consider the ideal . Since every ideal of is generated by a single element, there is with . Therefore, there is such that . Hence, , i.e., for any . Thus this shows that every non-constant polynomial is a product of irreducible factors. Now assume that Since is irreducible it divides for some . By renumbering we assume that divides . As is irreducible there is such that . Therefore, we have the following. Thus . Therefore, as is an integral domain, . We repeat the above argument to get , i.e., are units in . Hence, are constant polynomials. Therefore, and the last statement of the theorem is proved.   An ideal in is a prime ideal if and only if it is generated by an irreducible polynomial.    By , there exists be such that .  Suppose that is a nonzero prime ideal. Let be such that . Hence . Since is a prime ideal, either or . If then, using , we get that for some unit . Similar arguments shows that if then for some unit . Hence, is irreducible.  Conversely, assume that is irreducible. If then for some . By the , either or has as one of the irreducible factors. Hence, either or .    Let be a field and let . The greatest common divisor of is a polynomial such that and and if divides both then . It is denoted by .  The least common multiple of is a polynomial such that and and if is divisible by both then .    We have following properties of ideals corresponding to GCD and LCM.   (Existence of GCD and LCM)  Suppose that and are two-sided ideals of . Assume that and . Then and .   By , every ideal of is principal. Therefore, we can assume that and are principal. We first show that is generated by . Since , we have and . If is such that and then for every , i.e., . Hence .  Suppose that . We show that . Since and we have and . Suppose that is such that and . Thus , i.e., . Hence .    The ideal if and only if is a unit.   "
},
{
  "id": "lemma-12",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#lemma-12",
  "type": "Lemma",
  "number": "4.5.1",
  "title": "",
  "body": " Let be a field and let . Then if and only if .  "
},
{
  "id": "divides-each-other-then-differ-by-units-polynomials",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#divides-each-other-then-differ-by-units-polynomials",
  "type": "Observation",
  "number": "4.5.2",
  "title": "",
  "body": " Let be a field and let be nonzero polynomials. Suppose that and . Thus there exists such that and . Therefore, , i.e., . As is an integral domain and , we have , i.e., are units in . Hence, are constant polynomials.  "
},
{
  "id": "associates-polynomials",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#associates-polynomials",
  "type": "Definition",
  "number": "4.5.3",
  "title": "(Associates).",
  "body": " (Associates)  Two polynomials are said to be associates if there is a such that .  "
},
{
  "id": "units-in-polynomials",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#units-in-polynomials",
  "type": "Lemma",
  "number": "4.5.4",
  "title": "",
  "body": " Let be a polynomial ring in one variable over a field . A nonzero polynomial is invertible if and only if it is a nonzero constant polynomial.  "
},
{
  "id": "polynomial-ring-is-PID",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#polynomial-ring-is-PID",
  "type": "Theorem",
  "number": "4.5.5",
  "title": "(Every ideal of <span class=\"process-math\">\\(F[X]\\)<\/span> is principal).",
  "body": " (Every ideal of is principal)  Let be a field. Every ideal of is generated by a single element.  "
},
{
  "id": "proof-19",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#proof-19",
  "type": "Proof",
  "number": "4.5.1",
  "title": "",
  "body": "We assume that is a nonzero ideal. Let be a nonzero element of least degree among all elements of . We claim that . Let . We apply to get with such that . Now if then we get that . This is a contradiction to the minimality of . Therefore, and . Hence the result is proved. "
},
{
  "id": "irreducible-generates-maximal",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#irreducible-generates-maximal",
  "type": "Lemma",
  "number": "4.5.6",
  "title": "(Irreducible polynomial generates a maximal ideal).",
  "body": " (Irreducible polynomial generates a maximal ideal)  Let be a field. An ideal generated by an irreducible polynomial in is a maximal ideal.  "
},
{
  "id": "proof-20",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#proof-20",
  "type": "Proof",
  "number": "4.5.2",
  "title": "",
  "body": "Let be an irreducible polynomial. Suppose that is an ideal containing . By , there exists such that . Since we have . However as is irreducible we must have is a unit or . In other words, or . "
},
{
  "id": "irreducible-implies-prime",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#irreducible-implies-prime",
  "type": "Lemma",
  "number": "4.5.7",
  "title": "(Irreducible polynomial implies prime).",
  "body": " (Irreducible polynomial implies prime)  Let be a field and let be an irreducible polynomial. If then either or .  "
},
{
  "id": "proof-21",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#proof-21",
  "type": "Proof",
  "number": "4.5.3",
  "title": "",
  "body": "Suppose that , i.e., . Consider the ideal . By , , i.e., there exist such that . Therefore . By the assumption and hence , i.e., . "
},
{
  "id": "polynomial-ring-is-UFD",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#polynomial-ring-is-UFD",
  "type": "Theorem",
  "number": "4.5.8",
  "title": "(Unique factorization in polynomial ring in one variable over a field).",
  "body": " (Unique factorization in polynomial ring in one variable over a field)  Let be a field and let be the polynomial ring over in one variable. Then every non-constant polynomial can be written as a product of finite number of irreducible polynomials , i.e., Furthermore, the above expression is unique up to associates, i.e., if an another factorization of into irreducibles then and there is some renumbering of so that associate of .  "
},
{
  "id": "proof-22",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#proof-22",
  "type": "Proof",
  "number": "4.5.4",
  "title": "",
  "body": "If is irreducible then we are done. So, assume that is reducible. Let be a factorization of and neither is a constant polynomial. If both are irreducible polynomials we are done. Now assume that one of the polynomials, say is reducible. So, there are , not both constant, such that . Say is reducible. Then we continue the process. We claim that this process will eventually terminate. Suppose not. Then we get the following infinite chain of ideals: Since is not a constant polynomial the first inclusion is strict. Similar reasoning implies that all inclusion are strict. Consider the ideal . Since every ideal of is generated by a single element, there is with . Therefore, there is such that . Hence, , i.e., for any . Thus this shows that every non-constant polynomial is a product of irreducible factors. Now assume that Since is irreducible it divides for some . By renumbering we assume that divides . As is irreducible there is such that . Therefore, we have the following. Thus . Therefore, as is an integral domain, . We repeat the above argument to get , i.e., are units in . Hence, are constant polynomials. Therefore, and the last statement of the theorem is proved. "
},
{
  "id": "prime-iff-irreducible-polynomials",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#prime-iff-irreducible-polynomials",
  "type": "Proposition",
  "number": "4.5.9",
  "title": "",
  "body": " An ideal in is a prime ideal if and only if it is generated by an irreducible polynomial.  "
},
{
  "id": "proof-23",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#proof-23",
  "type": "Proof",
  "number": "4.5.5",
  "title": "",
  "body": " By , there exists be such that .  Suppose that is a nonzero prime ideal. Let be such that . Hence . Since is a prime ideal, either or . If then, using , we get that for some unit . Similar arguments shows that if then for some unit . Hence, is irreducible.  Conversely, assume that is irreducible. If then for some . By the , either or has as one of the irreducible factors. Hence, either or .  "
},
{
  "id": "gcd-lcm-of-polynomials",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#gcd-lcm-of-polynomials",
  "type": "Definition",
  "number": "4.5.10",
  "title": "",
  "body": " Let be a field and let . The greatest common divisor of is a polynomial such that and and if divides both then . It is denoted by .  The least common multiple of is a polynomial such that and and if is divisible by both then .   "
},
{
  "id": "existence-of-gcd-lcm",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#existence-of-gcd-lcm",
  "type": "Proposition",
  "number": "4.5.11",
  "title": "(Existence of GCD and LCM).",
  "body": " (Existence of GCD and LCM)  Suppose that and are two-sided ideals of . Assume that and . Then and .  "
},
{
  "id": "proof-24",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#proof-24",
  "type": "Proof",
  "number": "4.5.6",
  "title": "",
  "body": "By , every ideal of is principal. Therefore, we can assume that and are principal. We first show that is generated by . Since , we have and . If is such that and then for every , i.e., . Hence .  Suppose that . We show that . Since and we have and . Suppose that is such that and . Thus , i.e., . Hence .  "
},
{
  "id": "GCD-1-implication",
  "level": "2",
  "url": "sec-arithmetic-in-polynomials.html#GCD-1-implication",
  "type": "Corollary",
  "number": "4.5.12",
  "title": "",
  "body": " The ideal if and only if is a unit.  "
},
{
  "id": "sec-Kronecker-theorem",
  "level": "1",
  "url": "sec-Kronecker-theorem.html",
  "type": "Section",
  "number": "4.6",
  "title": "Kronecker’s Theorem",
  "body": " Kronecker's Theorem   (Kronecker's theorem)  Let be a field and let be an irreducible polynomial. The is a field, and has a root in .   Let be a nonconstant polynomial of . By , there exists with such that Then . Indeed, if then and . As is irreducible, is a unit or . Since and , we must have is a unit. Hence . Thus there exists such that . Thus i.e., is invertible in . This shows that is a field. We now show that , when considered as a polynomial over , has a root in . An element when considered as an element in is denoted by . Suppose that . Consider the polynomial . We show that is a root of . Indeed,     (Prime if and only if maximal)  A nonzero ideal of is prime if and only if it is maximal.    Suppose that is a nonzero prime ideal. Then there exists an irreducible polynomial such that (see ). By , is a field. By correspondence theorem, every ideal of is obtained by an ideal of containing . As is a field there are no proper ideals of that contains . Hence is maximal.  Conversely, assume that is maximal. Suppose that (see ). If is reducible then there exists such that . In this case and . The maximality of implies that either or (similarly for ). If then and there exists such that . Thus, . Since is an integral domain, . This shows that is a constant polynomial. If then is a unit. Therefore, we obtain that is irreducible. By we get the desired result.    We keep the notations of . We have a ring monomorphism given by composition: given by Thus .    Let be a field and let a non-constant polynomial. Then there exists a field containing isomorphic image of and a root of .    "
},
{
  "id": "Kronecker-theorem",
  "level": "2",
  "url": "sec-Kronecker-theorem.html#Kronecker-theorem",
  "type": "Theorem",
  "number": "4.6.1",
  "title": "(Kronecker’s theorem).",
  "body": " (Kronecker's theorem)  Let be a field and let be an irreducible polynomial. The is a field, and has a root in .  "
},
{
  "id": "proof-25",
  "level": "2",
  "url": "sec-Kronecker-theorem.html#proof-25",
  "type": "Proof",
  "number": "4.6.1",
  "title": "",
  "body": "Let be a nonconstant polynomial of . By , there exists with such that Then . Indeed, if then and . As is irreducible, is a unit or . Since and , we must have is a unit. Hence . Thus there exists such that . Thus i.e., is invertible in . This shows that is a field. We now show that , when considered as a polynomial over , has a root in . An element when considered as an element in is denoted by . Suppose that . Consider the polynomial . We show that is a root of . Indeed,   "
},
{
  "id": "prime-implies-maximal-in-polynomials",
  "level": "2",
  "url": "sec-Kronecker-theorem.html#prime-implies-maximal-in-polynomials",
  "type": "Corollary",
  "number": "4.6.2",
  "title": "(Prime if and only if maximal).",
  "body": " (Prime if and only if maximal)  A nonzero ideal of is prime if and only if it is maximal.  "
},
{
  "id": "proof-26",
  "level": "2",
  "url": "sec-Kronecker-theorem.html#proof-26",
  "type": "Proof",
  "number": "4.6.2",
  "title": "",
  "body": " Suppose that is a nonzero prime ideal. Then there exists an irreducible polynomial such that (see ). By , is a field. By correspondence theorem, every ideal of is obtained by an ideal of containing . As is a field there are no proper ideals of that contains . Hence is maximal.  Conversely, assume that is maximal. Suppose that (see ). If is reducible then there exists such that . In this case and . The maximality of implies that either or (similarly for ). If then and there exists such that . Thus, . Since is an integral domain, . This shows that is a constant polynomial. If then is a unit. Therefore, we obtain that is irreducible. By we get the desired result.  "
},
{
  "id": "observation-11",
  "level": "2",
  "url": "sec-Kronecker-theorem.html#observation-11",
  "type": "Observation",
  "number": "4.6.3",
  "title": "",
  "body": " We keep the notations of . We have a ring monomorphism given by composition: given by Thus .  "
},
{
  "id": "corollary-5",
  "level": "2",
  "url": "sec-Kronecker-theorem.html#corollary-5",
  "type": "Corollary",
  "number": "4.6.4",
  "title": "",
  "body": " Let be a field and let a non-constant polynomial. Then there exists a field containing isomorphic image of and a root of .  "
},
{
  "id": "sec-irreducibility-criterions",
  "level": "1",
  "url": "sec-irreducibility-criterions.html",
  "type": "Section",
  "number": "4.7",
  "title": "Irreducibility criterions",
  "body": " Irreducibility criterions  We have already seen the following result for determining whether polynomials of degree or in one variable over a field is reducible or not.   Let be a field. A polynomial of degree or is reducible if and only if it has a root in .    Let . If a rational number with is a root of then and .   Since is a root of . We have that This implies that Since and we get . Similarly, we have and this implies, by the similar reasoning as earlier, that .   Let be an integral domain and an ideal in . Let be a nonconstant monic polynomial. If the polynomial , when viewed as a polynomial in , can not be factored into proper factors in then, is irreducible in .   Assume that with and . Since is monic, we may assume that are also monic. Then is a factorization of in , a contradiction.   (Eisenstein's criterion)  Let be an integral domain and let be a prime ideal in . Let be a nonconstant monic polynomial. Suppose that and . Then is irreducible in .   Assume that is reducible, i.e., there are monic proper factors such that . Thus . Since we have that , and hence . Assume that and . Since is a prime ideal, is an integral domain. Thus, implies that either or . Without loss of generality assume that . We claim that as well. Let be the nonzero term of of the least degree. Thus, . Since we have . By our assumption is the nonzero least degree term in , therefore for and . Since and we must have , i.e., .  However implies that , a contradiction. Hence, must be an irreducible polynomial over .   "
},
{
  "id": "Irreducibility-2-3",
  "level": "2",
  "url": "sec-irreducibility-criterions.html#Irreducibility-2-3",
  "type": "Proposition",
  "number": "4.7.1",
  "title": "",
  "body": " Let be a field. A polynomial of degree or is reducible if and only if it has a root in .  "
},
{
  "id": "rational-root-criterion",
  "level": "2",
  "url": "sec-irreducibility-criterions.html#rational-root-criterion",
  "type": "Proposition",
  "number": "4.7.2",
  "title": "",
  "body": " Let . If a rational number with is a root of then and .  "
},
{
  "id": "proof-27",
  "level": "2",
  "url": "sec-irreducibility-criterions.html#proof-27",
  "type": "Proof",
  "number": "4.7.1",
  "title": "",
  "body": "Since is a root of . We have that This implies that Since and we get . Similarly, we have and this implies, by the similar reasoning as earlier, that . "
},
{
  "id": "proposition-12",
  "level": "2",
  "url": "sec-irreducibility-criterions.html#proposition-12",
  "type": "Proposition",
  "number": "4.7.3",
  "title": "",
  "body": " Let be an integral domain and an ideal in . Let be a nonconstant monic polynomial. If the polynomial , when viewed as a polynomial in , can not be factored into proper factors in then, is irreducible in .  "
},
{
  "id": "proof-28",
  "level": "2",
  "url": "sec-irreducibility-criterions.html#proof-28",
  "type": "Proof",
  "number": "4.7.2",
  "title": "",
  "body": "Assume that with and . Since is monic, we may assume that are also monic. Then is a factorization of in , a contradiction. "
},
{
  "id": "Eisenstein-criterion",
  "level": "2",
  "url": "sec-irreducibility-criterions.html#Eisenstein-criterion",
  "type": "Proposition",
  "number": "4.7.4",
  "title": "(Eisenstein’s criterion).",
  "body": " (Eisenstein's criterion)  Let be an integral domain and let be a prime ideal in . Let be a nonconstant monic polynomial. Suppose that and . Then is irreducible in .  "
},
{
  "id": "proof-29",
  "level": "2",
  "url": "sec-irreducibility-criterions.html#proof-29",
  "type": "Proof",
  "number": "4.7.3",
  "title": "",
  "body": "Assume that is reducible, i.e., there are monic proper factors such that . Thus . Since we have that , and hence . Assume that and . Since is a prime ideal, is an integral domain. Thus, implies that either or . Without loss of generality assume that . We claim that as well. Let be the nonzero term of of the least degree. Thus, . Since we have . By our assumption is the nonzero least degree term in , therefore for and . Since and we must have , i.e., .  However implies that , a contradiction. Hence, must be an irreducible polynomial over .  "
},
{
  "id": "sec-examples-irreducibility",
  "level": "1",
  "url": "sec-examples-irreducibility.html",
  "type": "Section",
  "number": "4.8",
  "title": "Examples",
  "body": " Examples   (Affine automorphism)  Let be a field and let with . We show that given by is a ring automorphism. We first show that is a ring homomorphism.   . While    Consider the map given by By the arguments in the last paragraph we see that is a ring homomorphism. Furthermore, using the fact that and are ring homomorphism we get the following.  This shows that is a ring automorphism.     The polynomial is irreducible in . Use the affine automorphism (refer ) given by and then apply Eisenstein's criterion.    We show that is reducible over . We have By the polynomial has no root in . More directly, since for any we have and hence .    ( -th Cyclotomic polynomial)  For a prime number we consider . This polynomial is called cyclotomic polynomial . Note that We show that is irreducible over using Eisenstein's criterion. Consider For each the prime divides . Hence, Eisenstein's criterion with prime implies that is irreducible over and hence is irreducible over by . Now assume that with . By clearing denominators we get such that . Let be a prime factor of . Therefore, . Since is an integral domain we must have either all coefficients or all coefficients . Hence, we can cancel from the equation . Continuing in this way we can cancel all prime factors of , and we get the equation with . However, we already proved that is irreducible over , i.e., either or . Hence proved.   "
},
{
  "id": "affine-automorphism",
  "level": "2",
  "url": "sec-examples-irreducibility.html#affine-automorphism",
  "type": "Example",
  "number": "4.8.1",
  "title": "(Affine automorphism).",
  "body": " (Affine automorphism)  Let be a field and let with . We show that given by is a ring automorphism. We first show that is a ring homomorphism.   . While    Consider the map given by By the arguments in the last paragraph we see that is a ring homomorphism. Furthermore, using the fact that and are ring homomorphism we get the following.  This shows that is a ring automorphism.   "
},
{
  "id": "example-56",
  "level": "2",
  "url": "sec-examples-irreducibility.html#example-56",
  "type": "Example",
  "number": "4.8.2",
  "title": "",
  "body": " The polynomial is irreducible in . Use the affine automorphism (refer ) given by and then apply Eisenstein's criterion.  "
},
{
  "id": "example-57",
  "level": "2",
  "url": "sec-examples-irreducibility.html#example-57",
  "type": "Example",
  "number": "4.8.3",
  "title": "",
  "body": " We show that is reducible over . We have By the polynomial has no root in . More directly, since for any we have and hence .  "
},
{
  "id": "pth-cyclotomic-polynomial",
  "level": "2",
  "url": "sec-examples-irreducibility.html#pth-cyclotomic-polynomial",
  "type": "Example",
  "number": "4.8.4",
  "title": "(<span class=\"process-math\">\\(p\\)<\/span>-th Cyclotomic polynomial).",
  "body": " ( -th Cyclotomic polynomial)  For a prime number we consider . This polynomial is called cyclotomic polynomial . Note that We show that is irreducible over using Eisenstein's criterion. Consider For each the prime divides . Hence, Eisenstein's criterion with prime implies that is irreducible over and hence is irreducible over by . Now assume that with . By clearing denominators we get such that . Let be a prime factor of . Therefore, . Since is an integral domain we must have either all coefficients or all coefficients . Hence, we can cancel from the equation . Continuing in this way we can cancel all prime factors of , and we get the equation with . However, we already proved that is irreducible over , i.e., either or . Hence proved.  "
},
{
  "id": "sec-poly-reducible-for-any-p",
  "level": "1",
  "url": "sec-poly-reducible-for-any-p.html",
  "type": "Section",
  "number": "4.9",
  "title": "Polynomial reducible over every <span class=\"process-math\">\\(\\mathbb{F}_p\\)<\/span>",
  "body": " Polynomial reducible over every  In this section we give an example of an irreducible polynomial over which is reducible over for any prime .  We show that is reducible over every , where is an odd prime number. The case when is left to the reader.   If is a prime number such that then .   Since we have . By Wilson's theorem, . Thus    Suppose that is an odd prime number. If are such that neither nor is a square in then    Consider the squaring map which is a group homomorphism: The kernel is . Therefore, , i.e., . This implies that , i.e., , i.e., .   If then is reducible over .   By there exists such that . Then    We make some computations. Hence Therefore, , , and . So, if there is a factorization of into quadratic polynomials then we necessarily have    If then is reducible over .   In view of we assume that is not a square in . Note that if is not a square then either or are squares in . Indeed if and (resp., ) is not a square then, by , their product (resp., ) is a square. If , then we have, by , is reducible over .  "
},
{
  "id": "neg-unity-is-square",
  "level": "2",
  "url": "sec-poly-reducible-for-any-p.html#neg-unity-is-square",
  "type": "Lemma",
  "number": "4.9.1",
  "title": "",
  "body": " If is a prime number such that then .  "
},
{
  "id": "proof-30",
  "level": "2",
  "url": "sec-poly-reducible-for-any-p.html#proof-30",
  "type": "Proof",
  "number": "4.9.1",
  "title": "",
  "body": "Since we have . By Wilson's theorem, . Thus  "
},
{
  "id": "product-of-nonsquare-is-a-square",
  "level": "2",
  "url": "sec-poly-reducible-for-any-p.html#product-of-nonsquare-is-a-square",
  "type": "Lemma",
  "number": "4.9.2",
  "title": "",
  "body": " Suppose that is an odd prime number. If are such that neither nor is a square in then   "
},
{
  "id": "proof-31",
  "level": "2",
  "url": "sec-poly-reducible-for-any-p.html#proof-31",
  "type": "Proof",
  "number": "4.9.2",
  "title": "",
  "body": "Consider the squaring map which is a group homomorphism: The kernel is . Therefore, , i.e., . This implies that , i.e., , i.e., . "
},
{
  "id": "proposition-14",
  "level": "2",
  "url": "sec-poly-reducible-for-any-p.html#proposition-14",
  "type": "Proposition",
  "number": "4.9.3",
  "title": "",
  "body": " If then is reducible over .  "
},
{
  "id": "proof-32",
  "level": "2",
  "url": "sec-poly-reducible-for-any-p.html#proof-32",
  "type": "Proof",
  "number": "4.9.3",
  "title": "",
  "body": "By there exists such that . Then  "
},
{
  "id": "proposition-15",
  "level": "2",
  "url": "sec-poly-reducible-for-any-p.html#proposition-15",
  "type": "Proposition",
  "number": "4.9.4",
  "title": "",
  "body": " If then is reducible over .  "
},
{
  "id": "proof-33",
  "level": "2",
  "url": "sec-poly-reducible-for-any-p.html#proof-33",
  "type": "Proof",
  "number": "4.9.4",
  "title": "",
  "body": "In view of we assume that is not a square in . Note that if is not a square then either or are squares in . Indeed if and (resp., ) is not a square then, by , their product (resp., ) is a square. If , then we have, by , is reducible over . "
},
{
  "id": "sec-Chinese-remainder-theorem-commutative-rings",
  "level": "1",
  "url": "sec-Chinese-remainder-theorem-commutative-rings.html",
  "type": "Section",
  "number": "4.10",
  "title": "Chinese Remainder Theorem",
  "body": " Chinese Remainder Theorem  We generalize to commutative rings.   (Chinese remainder theorem)  Let be a commutative ring and let be proper ideals of . Further assume that for , . Then    First we show that . We certainly have . We claim that and are such that . Indeed, since for , there are and such that for each . Thus, and hence So, there are and such that . Now for any we get . Consider the map given by It is left to the reader to check that is a well-defined ring homomorphism. We compute its kernel. We now show that is surjective. It is enough to show that is in the image of . Since for each there are and such that for each . We put . Then and Hence . By , we get the required result.    Let be the polynomial ring over a field . Let be pairwise distinct irreducible polynomials such that and are not associates for any . Then We first show that for . By  and hence for . We have (refer to the proof of ). Thus by Chinese remainder theorem we get the result.   "
},
{
  "id": "Chinese-remainder-theorem",
  "level": "2",
  "url": "sec-Chinese-remainder-theorem-commutative-rings.html#Chinese-remainder-theorem",
  "type": "Theorem",
  "number": "4.10.1",
  "title": "(Chinese remainder theorem).",
  "body": " (Chinese remainder theorem)  Let be a commutative ring and let be proper ideals of . Further assume that for , . Then   "
},
{
  "id": "proof-34",
  "level": "2",
  "url": "sec-Chinese-remainder-theorem-commutative-rings.html#proof-34",
  "type": "Proof",
  "number": "4.10.1",
  "title": "",
  "body": "First we show that . We certainly have . We claim that and are such that . Indeed, since for , there are and such that for each . Thus, and hence So, there are and such that . Now for any we get . Consider the map given by It is left to the reader to check that is a well-defined ring homomorphism. We compute its kernel. We now show that is surjective. It is enough to show that is in the image of . Since for each there are and such that for each . We put . Then and Hence . By , we get the required result.  "
},
{
  "id": "example-59",
  "level": "2",
  "url": "sec-Chinese-remainder-theorem-commutative-rings.html#example-59",
  "type": "Example",
  "number": "4.10.2",
  "title": "",
  "body": " Let be the polynomial ring over a field . Let be pairwise distinct irreducible polynomials such that and are not associates for any . Then We first show that for . By  and hence for . We have (refer to the proof of ). Thus by Chinese remainder theorem we get the result.  "
},
{
  "id": "ex-arithmetic-in-PID",
  "level": "1",
  "url": "ex-arithmetic-in-PID.html",
  "type": "Exercises",
  "number": "4.11",
  "title": "Exercises",
  "body": " Let be a field. Show that a polynomial in of degree or is reducible in if and only if has a root in . Give an example of a polynomial of degree over a field which is reducible in but it has no root in .  Find such that .  Show that the set is a principal ideal in . Furthermore show that this ideal is a prime ideal. Consider the polynomial and use the division algorithm.  Show that (resp. ) is irreducible in and . Also show that and (resp., and ) are fields. Further show that .  Let be the field with two elements. Show that is a field.  Show that and (resp., and ) are finite-dimensional vector spaces over (resp., ). Also show that is a finite-dimensional vector space over .  Let be a commutative ring and let . Show that .  Let be a field and let be the formal power series ring. Show that is an ideal generated by . Further show that is the only maximal ideal in . Refer to an elaborate discussion done in the class.  Let be a field and consider the following subset of . Show that is a ring and that is the only maximal ideal of . Show that every element not in is invertible.  Use the Chinese remainder theorem to find a solution to the following congruences   "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "ex-arithmetic-in-PID.html#exercise-26",
  "type": "Exercise",
  "number": "4.11.1",
  "title": "",
  "body": "Let be a field. Show that a polynomial in of degree or is reducible in if and only if has a root in . Give an example of a polynomial of degree over a field which is reducible in but it has no root in . "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "ex-arithmetic-in-PID.html#exercise-27",
  "type": "Exercise",
  "number": "4.11.2",
  "title": "",
  "body": "Find such that . "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "ex-arithmetic-in-PID.html#exercise-28",
  "type": "Exercise",
  "number": "4.11.3",
  "title": "",
  "body": "Show that the set is a principal ideal in . Furthermore show that this ideal is a prime ideal. Consider the polynomial and use the division algorithm. "
},
{
  "id": "ex-quadratic-extensions-of-ch-0",
  "level": "2",
  "url": "ex-arithmetic-in-PID.html#ex-quadratic-extensions-of-ch-0",
  "type": "Exercise",
  "number": "4.11.4",
  "title": "",
  "body": "Show that (resp. ) is irreducible in and . Also show that and (resp., and ) are fields. Further show that . "
},
{
  "id": "ex-quadratic-extensions-of-ch-2",
  "level": "2",
  "url": "ex-arithmetic-in-PID.html#ex-quadratic-extensions-of-ch-2",
  "type": "Exercise",
  "number": "4.11.5",
  "title": "",
  "body": "Let be the field with two elements. Show that is a field. "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "ex-arithmetic-in-PID.html#exercise-31",
  "type": "Exercise",
  "number": "4.11.6",
  "title": "",
  "body": "Show that and (resp., and ) are finite-dimensional vector spaces over (resp., ). Also show that is a finite-dimensional vector space over . "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "ex-arithmetic-in-PID.html#exercise-32",
  "type": "Exercise",
  "number": "4.11.7",
  "title": "",
  "body": "Let be a commutative ring and let . Show that . "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "ex-arithmetic-in-PID.html#exercise-33",
  "type": "Exercise",
  "number": "4.11.8",
  "title": "",
  "body": "Let be a field and let be the formal power series ring. Show that is an ideal generated by . Further show that is the only maximal ideal in . Refer to an elaborate discussion done in the class. "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "ex-arithmetic-in-PID.html#exercise-34",
  "type": "Exercise",
  "number": "4.11.9",
  "title": "",
  "body": "Let be a field and consider the following subset of . Show that is a ring and that is the only maximal ideal of . Show that every element not in is invertible. "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "ex-arithmetic-in-PID.html#exercise-35",
  "type": "Exercise",
  "number": "4.11.10",
  "title": "",
  "body": "Use the Chinese remainder theorem to find a solution to the following congruences  "
},
{
  "id": "sec-UFD-PID-ED",
  "level": "1",
  "url": "sec-UFD-PID-ED.html",
  "type": "Section",
  "number": "5.1",
  "title": "Unique Factorization Domains",
  "body": " Unique Factorization Domains  Let be an integral domain. An element is said to divide an element if there exists such that . In this case is called a divisor or a factor of and we write . We write to denote that is not a factor of . An element is called an unit if . Units are factors of every element. Two elements are called associates if and . We denote associates by . It is easy to see that if and only if and for some units . If and then is said to be a proper factor of . An element is said to be irreducible if is not a unit and has no proper factors other than units. It is easy to verify that if is irreducible and then is also irreducible. Suppose that is such that where are irreducibles. This is called a factorization of into irreducibles . A factorization of is said to be essentially unique if for any other factorization ( are irreducibles) we have and for a suitable permutation with .   (Factorial domain or Unique factorization domain) An integral domain is called factorial or unique factorization domain if every nonzero non-unit in has an essentially unique factorization into irreducibles.   (Divisor Chain Condition)  Let be an integral domain. We say that satisfy the divisor chain condition if is a sequence of elements of such that then there exists an integer such that .    (Primeness condition)  An integral domain is said to satisfy primeness condition if every irreducible is prime.    Let be an integral domain. Then is factorial (or UFD) if and only if satisfies the divisor chain condition and the primeness condition.    (Greatest Common Divisor)  Let be an integral domain. An element is called a greatest common divisor or g.c.d. of if and ; and if and then .    The g.c.d., if exists, is determined up to a unit multiplier.    Let be an integral domain. We say that satisfy the GCD condition if any two elements of have a g.c.d.    Let be an integral domain. The GCD condition implies the primeness condition.    Let be an integral domain. Then is factorial (or UFD) if and only if satisfies the divisor chain condition and the GCD condition.    (Subring of UFD need not be a UFD)  We will show in the later part that the ring of Gaussian integers is a UFD. Here we only show that its subring is not a UFD by showing that primeness condition does not hold. We show that is an irreducible element which is not a prime element. Suppose that for some . Considering the square of the norm in we have Note that all terms are non-negative integers. Hence if both are nonzero then RHS will be strictly greater than . Therefore either or . Suppose that . Then the above equation becomes Thus and either or . If then , i.e, , i.e., either or . This will contradiction to the assumption, because in this case  . Other case is left to the reader. Thus is irreducible. Note that however . Hence does not satisfy the primeness condition and therefore it is not a UFD.     (Quotient of a UFD is need not be a UFD)  In this example we use the fact that if is UFD then the polynomial ring over , is also a UFD. This fact will be proved in the next chapter. Thus if is a field then is a UFD. Consider the following subring of : Verify that the units of are same as the units of , i.e., units of are nonzero elements of , . We claim that is irreducible in but it is not a prime element. Indeed, suppose that are such that . Since is a subring of the same factorization can be considered in . However as is a UFD we must have and . Since and units of are we get is irreducible in . Furthermore, as we have . However, . Hence is irreducible but not a prime in . Consider a ring homomorphism given by The image of this map is the ring . We now compute its kernel. Note that . Now suppose that . We use division algorithm in : Hence Comparing degree on the both side we must have . Therefore, . By  . Thus quotient of a UFD need not be a UFD.    "
},
{
  "id": "def-UFD",
  "level": "2",
  "url": "sec-UFD-PID-ED.html#def-UFD",
  "type": "Definition",
  "number": "5.1.1",
  "title": "(Factorial domain or Unique factorization domain).",
  "body": " (Factorial domain or Unique factorization domain) An integral domain is called factorial or unique factorization domain if every nonzero non-unit in has an essentially unique factorization into irreducibles. "
},
{
  "id": "divisor-chain-condition",
  "level": "2",
  "url": "sec-UFD-PID-ED.html#divisor-chain-condition",
  "type": "Definition",
  "number": "5.1.2",
  "title": "(Divisor Chain Condition).",
  "body": " (Divisor Chain Condition)  Let be an integral domain. We say that satisfy the divisor chain condition if is a sequence of elements of such that then there exists an integer such that .  "
},
{
  "id": "primeness-condition",
  "level": "2",
  "url": "sec-UFD-PID-ED.html#primeness-condition",
  "type": "Definition",
  "number": "5.1.3",
  "title": "(Primeness condition).",
  "body": " (Primeness condition)  An integral domain is said to satisfy primeness condition if every irreducible is prime.  "
},
{
  "id": "UFD-iff-primeness",
  "level": "2",
  "url": "sec-UFD-PID-ED.html#UFD-iff-primeness",
  "type": "Theorem",
  "number": "5.1.4",
  "title": "",
  "body": " Let be an integral domain. Then is factorial (or UFD) if and only if satisfies the divisor chain condition and the primeness condition.  "
},
{
  "id": "def-GCD",
  "level": "2",
  "url": "sec-UFD-PID-ED.html#def-GCD",
  "type": "Definition",
  "number": "5.1.5",
  "title": "(Greatest Common Divisor).",
  "body": " (Greatest Common Divisor)  Let be an integral domain. An element is called a greatest common divisor or g.c.d. of if and ; and if and then .  "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "sec-UFD-PID-ED.html#remark-11",
  "type": "Remark",
  "number": "5.1.6",
  "title": "",
  "body": " The g.c.d., if exists, is determined up to a unit multiplier.  "
},
{
  "id": "def-GCD-condition",
  "level": "2",
  "url": "sec-UFD-PID-ED.html#def-GCD-condition",
  "type": "Definition",
  "number": "5.1.7",
  "title": "",
  "body": " Let be an integral domain. We say that satisfy the GCD condition if any two elements of have a g.c.d.  "
},
{
  "id": "GCD-implies-primeness",
  "level": "2",
  "url": "sec-UFD-PID-ED.html#GCD-implies-primeness",
  "type": "Proposition",
  "number": "5.1.8",
  "title": "",
  "body": " Let be an integral domain. The GCD condition implies the primeness condition.  "
},
{
  "id": "UFD-iff-GCD",
  "level": "2",
  "url": "sec-UFD-PID-ED.html#UFD-iff-GCD",
  "type": "Theorem",
  "number": "5.1.9",
  "title": "",
  "body": " Let be an integral domain. Then is factorial (or UFD) if and only if satisfies the divisor chain condition and the GCD condition.  "
},
{
  "id": "subring-of-UFD",
  "level": "2",
  "url": "sec-UFD-PID-ED.html#subring-of-UFD",
  "type": "Example",
  "number": "5.1.10",
  "title": "(Subring of UFD need not be a UFD).",
  "body": " (Subring of UFD need not be a UFD)  We will show in the later part that the ring of Gaussian integers is a UFD. Here we only show that its subring is not a UFD by showing that primeness condition does not hold. We show that is an irreducible element which is not a prime element. Suppose that for some . Considering the square of the norm in we have Note that all terms are non-negative integers. Hence if both are nonzero then RHS will be strictly greater than . Therefore either or . Suppose that . Then the above equation becomes Thus and either or . If then , i.e, , i.e., either or . This will contradiction to the assumption, because in this case  . Other case is left to the reader. Thus is irreducible. Note that however . Hence does not satisfy the primeness condition and therefore it is not a UFD.   "
},
{
  "id": "quotient-of-UFD",
  "level": "2",
  "url": "sec-UFD-PID-ED.html#quotient-of-UFD",
  "type": "Example",
  "number": "5.1.11",
  "title": "(Quotient of a UFD is need not be a UFD).",
  "body": " (Quotient of a UFD is need not be a UFD)  In this example we use the fact that if is UFD then the polynomial ring over , is also a UFD. This fact will be proved in the next chapter. Thus if is a field then is a UFD. Consider the following subring of : Verify that the units of are same as the units of , i.e., units of are nonzero elements of , . We claim that is irreducible in but it is not a prime element. Indeed, suppose that are such that . Since is a subring of the same factorization can be considered in . However as is a UFD we must have and . Since and units of are we get is irreducible in . Furthermore, as we have . However, . Hence is irreducible but not a prime in . Consider a ring homomorphism given by The image of this map is the ring . We now compute its kernel. Note that . Now suppose that . We use division algorithm in : Hence Comparing degree on the both side we must have . Therefore, . By  . Thus quotient of a UFD need not be a UFD.   "
},
{
  "id": "sec-chain-conditions",
  "level": "1",
  "url": "sec-chain-conditions.html",
  "type": "Section",
  "number": "5.2",
  "title": "Chain conditions and Principal Ideal Domains",
  "body": " Chain conditions and Principal Ideal Domains   A ring is said to satisfy ascending chain condition (a.c.c) if every ascending chain of (left or right or two-sided) ideals stabilize, i.e, if is a chain of (left or right or two-sided) ideals then there exists such that for any .    A ring is said to satisfy descending chain condition (d.c.c) if every descending chain of (left or right or two-sided) ideals stabilize, i.e, if is a chain of (left or right or two-sided) ideals then there exists such that for any .    (Principal ideal domain)  An integral domain in which every ideal is principal, i.e., every ideal can be generated by an element, is said to be a principal ideal domain .    We abbreviate a principal ideal domain by PID.    Every PID satisfy the ascending chain condition.   Let be a PID and let be an ascending chain of ideals in . Thus, is an ideal of . Suppose that for each . Since is PID, there exists such that . Suppose that . We claim that for all . Indeed, since we have . Conversely, as for every , the ideal generated by , for every .   An ideal generated by an irreducible element in a PID is maximal.   Let be a PID and let be an irreducible. Suppose that is an ideal containing . Since is PID there exists such that . Hence . Since is irreducible either or is a unit. In other words, either or .  By , an ideal generated by an irreducible element in a PID will be a prime ideal. Thus we get the following.   In a PID every irreducible element is a prime element.    Every PID is UFD.    (UFD but not a PID)  Let be a field and let be the polynomial ring over in two variables. Note that hence it is UFD (we prove this result in ). We show that the ideal generated by and , is not principal. Suppose that is such that . By , Note that considered as an element in the polynomial ring over F[x] in the variable is a constant polynomial. Thus, when viewed as a polynomial over in the variable must have degree zero. Similarly the degree of as a polynomial in is zero. Hence and thus . However, . Therefore, is not a principal ideal.   "
},
{
  "id": "def-acc",
  "level": "2",
  "url": "sec-chain-conditions.html#def-acc",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": " A ring is said to satisfy ascending chain condition (a.c.c) if every ascending chain of (left or right or two-sided) ideals stabilize, i.e, if is a chain of (left or right or two-sided) ideals then there exists such that for any .  "
},
{
  "id": "def-dcc",
  "level": "2",
  "url": "sec-chain-conditions.html#def-dcc",
  "type": "Definition",
  "number": "5.2.2",
  "title": "",
  "body": " A ring is said to satisfy descending chain condition (d.c.c) if every descending chain of (left or right or two-sided) ideals stabilize, i.e, if is a chain of (left or right or two-sided) ideals then there exists such that for any .  "
},
{
  "id": "def-PID",
  "level": "2",
  "url": "sec-chain-conditions.html#def-PID",
  "type": "Definition",
  "number": "5.2.3",
  "title": "(Principal ideal domain).",
  "body": " (Principal ideal domain)  An integral domain in which every ideal is principal, i.e., every ideal can be generated by an element, is said to be a principal ideal domain .  "
},
{
  "id": "convention-11",
  "level": "2",
  "url": "sec-chain-conditions.html#convention-11",
  "type": "Convention",
  "number": "5.2.4",
  "title": "",
  "body": " We abbreviate a principal ideal domain by PID.  "
},
{
  "id": "theorem-16",
  "level": "2",
  "url": "sec-chain-conditions.html#theorem-16",
  "type": "Theorem",
  "number": "5.2.5",
  "title": "",
  "body": " Every PID satisfy the ascending chain condition.  "
},
{
  "id": "proof-35",
  "level": "2",
  "url": "sec-chain-conditions.html#proof-35",
  "type": "Proof",
  "number": "5.2.1",
  "title": "",
  "body": "Let be a PID and let be an ascending chain of ideals in . Thus, is an ideal of . Suppose that for each . Since is PID, there exists such that . Suppose that . We claim that for all . Indeed, since we have . Conversely, as for every , the ideal generated by , for every . "
},
{
  "id": "irreducible-implies-maximal-PID",
  "level": "2",
  "url": "sec-chain-conditions.html#irreducible-implies-maximal-PID",
  "type": "Lemma",
  "number": "5.2.6",
  "title": "",
  "body": " An ideal generated by an irreducible element in a PID is maximal.  "
},
{
  "id": "proof-36",
  "level": "2",
  "url": "sec-chain-conditions.html#proof-36",
  "type": "Proof",
  "number": "5.2.2",
  "title": "",
  "body": "Let be a PID and let be an irreducible. Suppose that is an ideal containing . Since is PID there exists such that . Hence . Since is irreducible either or is a unit. In other words, either or . "
},
{
  "id": "irreducible-implies-prime-PID",
  "level": "2",
  "url": "sec-chain-conditions.html#irreducible-implies-prime-PID",
  "type": "Theorem",
  "number": "5.2.7",
  "title": "",
  "body": " In a PID every irreducible element is a prime element.  "
},
{
  "id": "PID-implies-UFD",
  "level": "2",
  "url": "sec-chain-conditions.html#PID-implies-UFD",
  "type": "Theorem",
  "number": "5.2.8",
  "title": "",
  "body": " Every PID is UFD.  "
},
{
  "id": "UFD-but-not-PID",
  "level": "2",
  "url": "sec-chain-conditions.html#UFD-but-not-PID",
  "type": "Example",
  "number": "5.2.9",
  "title": "(UFD but not a PID).",
  "body": " (UFD but not a PID)  Let be a field and let be the polynomial ring over in two variables. Note that hence it is UFD (we prove this result in ). We show that the ideal generated by and , is not principal. Suppose that is such that . By , Note that considered as an element in the polynomial ring over F[x] in the variable is a constant polynomial. Thus, when viewed as a polynomial over in the variable must have degree zero. Similarly the degree of as a polynomial in is zero. Hence and thus . However, . Therefore, is not a principal ideal.  "
},
{
  "id": "sec-ED",
  "level": "1",
  "url": "sec-ED.html",
  "type": "Section",
  "number": "5.3",
  "title": "Euclidean Domains",
  "body": " Euclidean Domains   (Euclidean Domain) An integral domain is said to be an Euclidean domain if there is a function such that if are nonzero then there exists such that    ( is an Euclidean Domain)  If we define by the absolute value map, i.e., for then becomes an Euclidean domain.    ( is an Euclidean Domain)  Also the division algorithm for polynomials in shows that is an Euclidean domain if we define by .    (Gaussian integers as an Euclidean Domain) We show that the ring of Gaussian integers is an Euclidean domain. Recall that the ring of Gaussian integers is a subring of . Hence, it is an integral domain. We define a map by Consider nonzero elements . If then we take and to obtain . So we assume that . Let . Since its inverse exists in . Therefore, with . Choose such that and . Put and . Thus . In other words, . Note that . However, . Following the definition of it is easy to see that .   Every Euclidean domain is a principal ideal domain.   Let be an Euclidean domain with a map . Since the zero ideal is principal we show that every nonzero ideal in is principal. Suppose that is a nonzero ideal. Choose with for every nonzero element . Thus for any there exists with and . By the choice of we thus have . This shows that , i.e., is a principal ideal.  Using and the above we get the following result.   Every Euclidean domain is factorial\/UFD.   "
},
{
  "id": "def-ED",
  "level": "2",
  "url": "sec-ED.html#def-ED",
  "type": "Definition",
  "number": "5.3.1",
  "title": "(Euclidean Domain).",
  "body": " (Euclidean Domain) An integral domain is said to be an Euclidean domain if there is a function such that if are nonzero then there exists such that  "
},
{
  "id": "Z-is-ED",
  "level": "2",
  "url": "sec-ED.html#Z-is-ED",
  "type": "Example",
  "number": "5.3.2",
  "title": "(<span class=\"process-math\">\\(\\Z\\)<\/span> is an Euclidean Domain).",
  "body": " ( is an Euclidean Domain)  If we define by the absolute value map, i.e., for then becomes an Euclidean domain.  "
},
{
  "id": "poly-is-ED",
  "level": "2",
  "url": "sec-ED.html#poly-is-ED",
  "type": "Example",
  "number": "5.3.3",
  "title": "(<span class=\"process-math\">\\(F[X]\\)<\/span> is an Euclidean Domain).",
  "body": " ( is an Euclidean Domain)  Also the division algorithm for polynomials in shows that is an Euclidean domain if we define by .  "
},
{
  "id": "Gaussion-integer-is-ED",
  "level": "2",
  "url": "sec-ED.html#Gaussion-integer-is-ED",
  "type": "Example",
  "number": "5.3.4",
  "title": "(Gaussian integers as an Euclidean Domain).",
  "body": " (Gaussian integers as an Euclidean Domain) We show that the ring of Gaussian integers is an Euclidean domain. Recall that the ring of Gaussian integers is a subring of . Hence, it is an integral domain. We define a map by Consider nonzero elements . If then we take and to obtain . So we assume that . Let . Since its inverse exists in . Therefore, with . Choose such that and . Put and . Thus . In other words, . Note that . However, . Following the definition of it is easy to see that . "
},
{
  "id": "ED-implies-PID",
  "level": "2",
  "url": "sec-ED.html#ED-implies-PID",
  "type": "Theorem",
  "number": "5.3.5",
  "title": "",
  "body": " Every Euclidean domain is a principal ideal domain.  "
},
{
  "id": "proof-37",
  "level": "2",
  "url": "sec-ED.html#proof-37",
  "type": "Proof",
  "number": "5.3.1",
  "title": "",
  "body": "Let be an Euclidean domain with a map . Since the zero ideal is principal we show that every nonzero ideal in is principal. Suppose that is a nonzero ideal. Choose with for every nonzero element . Thus for any there exists with and . By the choice of we thus have . This shows that , i.e., is a principal ideal. "
},
{
  "id": "corollary-6",
  "level": "2",
  "url": "sec-ED.html#corollary-6",
  "type": "Corollary",
  "number": "5.3.6",
  "title": "",
  "body": " Every Euclidean domain is factorial\/UFD.  "
},
{
  "id": "ex-UFD-PID-ED",
  "level": "1",
  "url": "ex-UFD-PID-ED.html",
  "type": "Exercises",
  "number": "5.4",
  "title": "Exercises",
  "body": " Show that a field is a PID.  Show that is ED.  Suppose that is a PID and it is a subring of an integral domain . Show that for if then .  Show that the map given by is a ring epimorphism. Show that is not a UFD. We prove in the next chapter that is a UFD. This shows that epimorphism of a UFD need not be a UFD.  .  Show that if is an integral domain but not a field then is not a PID. If is a PID then the ideal is maximal. Indeed, if then (since is a PID), and for some . Degree consideration implies that or , i.e., either or . Hence is maximal and thus is a field.  Show that if is a ring isomorphism, and is a UFD then is a UFD.  Determine irreducible elements of .  Let be a prime number. Show that there exists such that , i.e., . Consider and use Wilson's theorem, i.e., .  Suppose that is a prime number. Show that is reducible in . By the above exercise there exists such that . In , . Assume that is irreducible in . Thus is a prime element in (why?). This implies that either or .  If is a prime number such that then is a sum of two squares in . Using the above exercise write with such that is irreducible in and is a non-unit in . Taking Euclidean norm defined on , and using the fact that is a UFD we get the result.  "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "ex-UFD-PID-ED.html#exercise-36",
  "type": "Exercise",
  "number": "5.4.1",
  "title": "",
  "body": "Show that a field is a PID. "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "ex-UFD-PID-ED.html#exercise-37",
  "type": "Exercise",
  "number": "5.4.2",
  "title": "",
  "body": "Show that is ED. "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "ex-UFD-PID-ED.html#exercise-38",
  "type": "Exercise",
  "number": "5.4.3",
  "title": "",
  "body": "Suppose that is a PID and it is a subring of an integral domain . Show that for if then . "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "ex-UFD-PID-ED.html#exercise-39",
  "type": "Exercise",
  "number": "5.4.4",
  "title": "",
  "body": "Show that the map given by is a ring epimorphism. Show that is not a UFD. We prove in the next chapter that is a UFD. This shows that epimorphism of a UFD need not be a UFD.  . "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "ex-UFD-PID-ED.html#exercise-40",
  "type": "Exercise",
  "number": "5.4.5",
  "title": "",
  "body": "Show that if is an integral domain but not a field then is not a PID. If is a PID then the ideal is maximal. Indeed, if then (since is a PID), and for some . Degree consideration implies that or , i.e., either or . Hence is maximal and thus is a field. "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "ex-UFD-PID-ED.html#exercise-41",
  "type": "Exercise",
  "number": "5.4.6",
  "title": "",
  "body": "Show that if is a ring isomorphism, and is a UFD then is a UFD. "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "ex-UFD-PID-ED.html#exercise-42",
  "type": "Exercise",
  "number": "5.4.7",
  "title": "",
  "body": "Determine irreducible elements of . "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "ex-UFD-PID-ED.html#exercise-43",
  "type": "Exercise",
  "number": "5.4.8",
  "title": "",
  "body": "Let be a prime number. Show that there exists such that , i.e., . Consider and use Wilson's theorem, i.e., . "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "ex-UFD-PID-ED.html#exercise-44",
  "type": "Exercise",
  "number": "5.4.9",
  "title": "",
  "body": "Suppose that is a prime number. Show that is reducible in . By the above exercise there exists such that . In , . Assume that is irreducible in . Thus is a prime element in (why?). This implies that either or . "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "ex-UFD-PID-ED.html#exercise-45",
  "type": "Exercise",
  "number": "5.4.10",
  "title": "",
  "body": "If is a prime number such that then is a sum of two squares in . Using the above exercise write with such that is irreducible in and is a non-unit in . Taking Euclidean norm defined on , and using the fact that is a UFD we get the result. "
},
{
  "id": "sec-multiplicatively-closed-subset",
  "level": "1",
  "url": "sec-multiplicatively-closed-subset.html",
  "type": "Section",
  "number": "6.1",
  "title": "Multiplicatively closed subset",
  "body": " Multiplicatively closed subset  We begin with the definition of multiplicatively closed subset of a commutative ring.   A subset of a commutative ring is said to be multiplicatively closed if following conditions are satisfied:   If then      (Compliment of a prime ideal)  Let be a commutative ring and let be a prime ideal in . It is straightforward to verify that is a multiplicatively closed subset of .    (Non-zero elements of an integral domain)  Let be an integral domain. The subset of all nonzero element of is a multiplicatively closed set.    Let be a commutative ring and let . The set is a multiplicative subset of .   "
},
{
  "id": "definition-49",
  "level": "2",
  "url": "sec-multiplicatively-closed-subset.html#definition-49",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": " A subset of a commutative ring is said to be multiplicatively closed if following conditions are satisfied:   If then    "
},
{
  "id": "Compliment-of-prime-ideal",
  "level": "2",
  "url": "sec-multiplicatively-closed-subset.html#Compliment-of-prime-ideal",
  "type": "Example",
  "number": "6.1.2",
  "title": "(Compliment of a prime ideal).",
  "body": " (Compliment of a prime ideal)  Let be a commutative ring and let be a prime ideal in . It is straightforward to verify that is a multiplicatively closed subset of .  "
},
{
  "id": "example-67",
  "level": "2",
  "url": "sec-multiplicatively-closed-subset.html#example-67",
  "type": "Example",
  "number": "6.1.3",
  "title": "(Non-zero elements of an integral domain).",
  "body": " (Non-zero elements of an integral domain)  Let be an integral domain. The subset of all nonzero element of is a multiplicatively closed set.  "
},
{
  "id": "example-68",
  "level": "2",
  "url": "sec-multiplicatively-closed-subset.html#example-68",
  "type": "Example",
  "number": "6.1.4",
  "title": "",
  "body": " Let be a commutative ring and let . The set is a multiplicative subset of .  "
},
{
  "id": "sec-ring-of-fractions",
  "level": "1",
  "url": "sec-ring-of-fractions.html",
  "type": "Section",
  "number": "6.2",
  "title": "Ring of fractions",
  "body": " Ring of fractions   Let be a commutative ring and let be a multiplicatively closed subset of . Consider . Define a relation on as follows: This is an equivalence relation.    We keep the notation of . We denote the equivalence class of by .    We keep the notations of . The set with addition and multiplication defined below is a commutative ring.  for and  for and .  The additive identity of is while the multiplicative identity of is .      (Ring of fractions) Let be a commutative ring and let be a multiplicatively closed subset of . Then is called the ring of fractions of with respect to .    (Localization at a prime)  Let be a commutative ring and let be a prime ideal in . Consider a multiplicative set . The ring of fractions is also called the localization at a prime . It is often denoted by .    (Field of fractions\/Quotient field)  Let be an integral domain. The set is a multiplicatively closed subset of . The ring is a field and it is called the field of fractions of or the quotient field of . Note that it is a particular case of with the prime ideal . The field of rational numbers is obtained as the field of fractions of .     Let be an integral domain and let be the field of fractions of . The mapping given by is a ring monomorphism.    (Universal property of field of fractions)  Let be an integral domain and let be the field of fractions of . Suppose that is a field. If there is a ring monomorphism then there is a unique ring monomorphism such that .   We define by .  [Well-definedness] Suppose that , i.e., there exists such that (refer ). Since is an integral domain, . Thus, . By the assumption is an monomorphism, and . Hence, .   [Ring homomorphism] Left to the reader.   [Injectivity] Suppose that . Thus and since is given to be a monomorphism . By we have and thus is injective.   [Uniqueness] Let be a ring monomorphism such that . Thus . For we have Hence . Therefore, .       If is a field of characteristic zero then there is a unique ring monomorphism .  If is a field of characteristic then there is a unique ring monomorphism .     (Rational function field) Consider the polynomial ring over a field . Describe the field of fractions\/quotient field of . We denote the field of fractions of by , and it is called the rational function field .  "
},
{
  "id": "equivalence-relation-quotient",
  "level": "2",
  "url": "sec-ring-of-fractions.html#equivalence-relation-quotient",
  "type": "Lemma",
  "number": "6.2.1",
  "title": "",
  "body": " Let be a commutative ring and let be a multiplicatively closed subset of . Consider . Define a relation on as follows: This is an equivalence relation.  "
},
{
  "id": "convention-12",
  "level": "2",
  "url": "sec-ring-of-fractions.html#convention-12",
  "type": "Convention",
  "number": "6.2.2",
  "title": "",
  "body": " We keep the notation of . We denote the equivalence class of by .  "
},
{
  "id": "proposition-17",
  "level": "2",
  "url": "sec-ring-of-fractions.html#proposition-17",
  "type": "Proposition",
  "number": "6.2.3",
  "title": "",
  "body": " We keep the notations of . The set with addition and multiplication defined below is a commutative ring.  for and  for and .  The additive identity of is while the multiplicative identity of is .    "
},
{
  "id": "def-ring-of-fractions",
  "level": "2",
  "url": "sec-ring-of-fractions.html#def-ring-of-fractions",
  "type": "Definition",
  "number": "6.2.4",
  "title": "(Ring of fractions).",
  "body": " (Ring of fractions) Let be a commutative ring and let be a multiplicatively closed subset of . Then is called the ring of fractions of with respect to .  "
},
{
  "id": "def-localization-at-prime",
  "level": "2",
  "url": "sec-ring-of-fractions.html#def-localization-at-prime",
  "type": "Example",
  "number": "6.2.5",
  "title": "(Localization at a prime).",
  "body": " (Localization at a prime)  Let be a commutative ring and let be a prime ideal in . Consider a multiplicative set . The ring of fractions is also called the localization at a prime . It is often denoted by .  "
},
{
  "id": "def-field-of-fractions",
  "level": "2",
  "url": "sec-ring-of-fractions.html#def-field-of-fractions",
  "type": "Example",
  "number": "6.2.6",
  "title": "(Field of fractions\/Quotient field).",
  "body": " (Field of fractions\/Quotient field)  Let be an integral domain. The set is a multiplicatively closed subset of . The ring is a field and it is called the field of fractions of or the quotient field of . Note that it is a particular case of with the prime ideal . The field of rational numbers is obtained as the field of fractions of .   "
},
{
  "id": "lemma-20",
  "level": "2",
  "url": "sec-ring-of-fractions.html#lemma-20",
  "type": "Lemma",
  "number": "6.2.7",
  "title": "",
  "body": " Let be an integral domain and let be the field of fractions of . The mapping given by is a ring monomorphism.  "
},
{
  "id": "universal-property-field-of-fractions",
  "level": "2",
  "url": "sec-ring-of-fractions.html#universal-property-field-of-fractions",
  "type": "Proposition",
  "number": "6.2.8",
  "title": "(Universal property of field of fractions).",
  "body": " (Universal property of field of fractions)  Let be an integral domain and let be the field of fractions of . Suppose that is a field. If there is a ring monomorphism then there is a unique ring monomorphism such that .  "
},
{
  "id": "proof-38",
  "level": "2",
  "url": "sec-ring-of-fractions.html#proof-38",
  "type": "Proof",
  "number": "6.2.1",
  "title": "",
  "body": "We define by .  [Well-definedness] Suppose that , i.e., there exists such that (refer ). Since is an integral domain, . Thus, . By the assumption is an monomorphism, and . Hence, .   [Ring homomorphism] Left to the reader.   [Injectivity] Suppose that . Thus and since is given to be a monomorphism . By we have and thus is injective.   [Uniqueness] Let be a ring monomorphism such that . Thus . For we have Hence . Therefore, .   "
},
{
  "id": "corollary-7",
  "level": "2",
  "url": "sec-ring-of-fractions.html#corollary-7",
  "type": "Corollary",
  "number": "6.2.9",
  "title": "",
  "body": "   If is a field of characteristic zero then there is a unique ring monomorphism .  If is a field of characteristic then there is a unique ring monomorphism .    "
},
{
  "id": "def-rational-function-field",
  "level": "2",
  "url": "sec-ring-of-fractions.html#def-rational-function-field",
  "type": "Checkpoint",
  "number": "6.2.10",
  "title": "(Rational function field).",
  "body": "(Rational function field) Consider the polynomial ring over a field . Describe the field of fractions\/quotient field of . We denote the field of fractions of by , and it is called the rational function field . "
},
{
  "id": "sec-Gauss-Lemma",
  "level": "1",
  "url": "sec-Gauss-Lemma.html",
  "type": "Section",
  "number": "7.1",
  "title": "Gauss’s Lemma",
  "body": " Gauss's Lemma  Throughout this section we assume that is a UFD and is a polynomial ring over in one variable. We start with the following definition.   (Content of a polynomial over UFD)  The content of a nonzero polynomial is .    The content of is unique up to units. For notational convenience we write for a choice of the content of .    (Primitive polynomial)  A polynomial is said to be primitive if the content of , .    Let .  For , .  There exists a primitive polynomial such that and .  If is a nonconstant irreducible polynomial then is primitive. The converse is not true.     We only prove the last statement. Assume that is a nonconstant irreducible polynomial. We have , where is a primitive polynomial. If then, as is a UFD, can be factored into a product of irreducibles in . Since irreducible elements of remains irreducible in , we must have . Thus we get the result. The converse is not true can be seen by considering the polynomial .    (Clearing denominators)  Let be a UFD and be the field of fractions of . For any there exists and a primitive polynomial such that . This factorization is unique up to unit multipliers in .    Suppose that . Put . Then , say . By there exists a primitive polynomial such that . Therefore, .  Now assume that there exists primitive polynomials and such that for . Hence . As are primitive we must have , i.e., there exists a unit such that , i.e., . Hence uniqueness is proved.    If are primitive polynomials and in . Then in .   Suppose that is such that . By uniqueness part of , there exists a unit such that . Thus is a unit.   Let be a nonconstant primitive. If is reducible polynomial in , then there exists with and .   Suppose that there are such that . If , i.e., if is constant then , i.e., is a unit and in .   (Gauss's theorem)  Let be a UFD. The product of primitive polynomials in is primitive.   Let be primitive polynomials. Suppose that is not a primitive polynomial. Let be a prime element in which is a factor of . Thus is an integral domain and by the assumption . Hence either or . In particular, either or . This is a contradiction to the assumption that and are primitive polynomials.  "
},
{
  "id": "def-content",
  "level": "2",
  "url": "sec-Gauss-Lemma.html#def-content",
  "type": "Definition",
  "number": "7.1.1",
  "title": "(Content of a polynomial over UFD).",
  "body": " (Content of a polynomial over UFD)  The content of a nonzero polynomial is .  "
},
{
  "id": "convention-13",
  "level": "2",
  "url": "sec-Gauss-Lemma.html#convention-13",
  "type": "Convention",
  "number": "7.1.2",
  "title": "",
  "body": " The content of is unique up to units. For notational convenience we write for a choice of the content of .  "
},
{
  "id": "def-primitive-polynomial",
  "level": "2",
  "url": "sec-Gauss-Lemma.html#def-primitive-polynomial",
  "type": "Definition",
  "number": "7.1.3",
  "title": "(Primitive polynomial).",
  "body": " (Primitive polynomial)  A polynomial is said to be primitive if the content of , .  "
},
{
  "id": "properties-of-content",
  "level": "2",
  "url": "sec-Gauss-Lemma.html#properties-of-content",
  "type": "Lemma",
  "number": "7.1.4",
  "title": "",
  "body": " Let .  For , .  There exists a primitive polynomial such that and .  If is a nonconstant irreducible polynomial then is primitive. The converse is not true.    "
},
{
  "id": "proof-39",
  "level": "2",
  "url": "sec-Gauss-Lemma.html#proof-39",
  "type": "Proof",
  "number": "7.1.1",
  "title": "",
  "body": "We only prove the last statement. Assume that is a nonconstant irreducible polynomial. We have , where is a primitive polynomial. If then, as is a UFD, can be factored into a product of irreducibles in . Since irreducible elements of remains irreducible in , we must have . Thus we get the result. The converse is not true can be seen by considering the polynomial .  "
},
{
  "id": "clearing-denominators",
  "level": "2",
  "url": "sec-Gauss-Lemma.html#clearing-denominators",
  "type": "Lemma",
  "number": "7.1.5",
  "title": "(Clearing denominators).",
  "body": " (Clearing denominators)  Let be a UFD and be the field of fractions of . For any there exists and a primitive polynomial such that . This factorization is unique up to unit multipliers in .  "
},
{
  "id": "proof-40",
  "level": "2",
  "url": "sec-Gauss-Lemma.html#proof-40",
  "type": "Proof",
  "number": "7.1.2",
  "title": "",
  "body": " Suppose that . Put . Then , say . By there exists a primitive polynomial such that . Therefore, .  Now assume that there exists primitive polynomials and such that for . Hence . As are primitive we must have , i.e., there exists a unit such that , i.e., . Hence uniqueness is proved.  "
},
{
  "id": "primitive-in-UFD-and-ff",
  "level": "2",
  "url": "sec-Gauss-Lemma.html#primitive-in-UFD-and-ff",
  "type": "Corollary",
  "number": "7.1.6",
  "title": "",
  "body": " If are primitive polynomials and in . Then in .  "
},
{
  "id": "proof-41",
  "level": "2",
  "url": "sec-Gauss-Lemma.html#proof-41",
  "type": "Proof",
  "number": "7.1.3",
  "title": "",
  "body": "Suppose that is such that . By uniqueness part of , there exists a unit such that . Thus is a unit. "
},
{
  "id": "corollary-9",
  "level": "2",
  "url": "sec-Gauss-Lemma.html#corollary-9",
  "type": "Corollary",
  "number": "7.1.7",
  "title": "",
  "body": " Let be a nonconstant primitive. If is reducible polynomial in , then there exists with and .  "
},
{
  "id": "proof-42",
  "level": "2",
  "url": "sec-Gauss-Lemma.html#proof-42",
  "type": "Proof",
  "number": "7.1.4",
  "title": "",
  "body": "Suppose that there are such that . If , i.e., if is constant then , i.e., is a unit and in . "
},
{
  "id": "Gauss-theorem",
  "level": "2",
  "url": "sec-Gauss-Lemma.html#Gauss-theorem",
  "type": "Theorem",
  "number": "7.1.8",
  "title": "(Gauss’s theorem).",
  "body": " (Gauss's theorem)  Let be a UFD. The product of primitive polynomials in is primitive.  "
},
{
  "id": "proof-43",
  "level": "2",
  "url": "sec-Gauss-Lemma.html#proof-43",
  "type": "Proof",
  "number": "7.1.5",
  "title": "",
  "body": "Let be primitive polynomials. Suppose that is not a primitive polynomial. Let be a prime element in which is a factor of . Thus is an integral domain and by the assumption . Hence either or . In particular, either or . This is a contradiction to the assumption that and are primitive polynomials. "
},
{
  "id": "sec-polynomial-rings-over-UFD-is-UFD",
  "level": "1",
  "url": "sec-polynomial-rings-over-UFD-is-UFD.html",
  "type": "Section",
  "number": "7.2",
  "title": "Polynomial ring over a UFD is a UFD",
  "body": " Polynomial ring over a UFD is a UFD  We show that a polynomial ring over a UFD is again a UFD.   Let be a UFD and be its quotient field. A nonconstant irreducible polynomial over remains irreducible over .   Suppose that is a nonconstant irreducible polynomial in . By , is primitive. Suppose that for some polynomials in with and . By , there are and primitive polynomials such that and . Thus . By Gauss's lemma ( ), is a primitive polynomial. Therefore, is a unit in . We thus get the result.   If is a UFD then is a UFD.    First observe that an irreducible element in remains irreducible in . Thus in order to show is a UFD we first show that any nonzero nonunit polynomial can be factored into a product of irreducibles. So we assume that is a nonzero nonunit. By , there exists a primitive polynomial such that . Since is UFD, can be uniquely factored into irreducibles in . Thus we further assume that is a primitive reducible polynomial. So there are such that , and and . By induction on we get can be factored in , thus can be factored in a product of irreducibles in .  Now we show that the factorization obtained above is essentially unique. Suppose that is a nonconstant primitive polynomial in and By each and remains irreducible over the quotient field of . Since is UFD we must have and there are such that for some permutation . However, as and are irreducibles in , by , are primitive elements of . Therefore, for every (see ), i.e., .    A polynomial ring in -variable over a field , is a UFD.   "
},
{
  "id": "irreducible-over-quotient-field",
  "level": "2",
  "url": "sec-polynomial-rings-over-UFD-is-UFD.html#irreducible-over-quotient-field",
  "type": "Proposition",
  "number": "7.2.1",
  "title": "",
  "body": " Let be a UFD and be its quotient field. A nonconstant irreducible polynomial over remains irreducible over .  "
},
{
  "id": "proof-44",
  "level": "2",
  "url": "sec-polynomial-rings-over-UFD-is-UFD.html#proof-44",
  "type": "Proof",
  "number": "7.2.1",
  "title": "",
  "body": "Suppose that is a nonconstant irreducible polynomial in . By , is primitive. Suppose that for some polynomials in with and . By , there are and primitive polynomials such that and . Thus . By Gauss's lemma ( ), is a primitive polynomial. Therefore, is a unit in . We thus get the result. "
},
{
  "id": "theorem-21",
  "level": "2",
  "url": "sec-polynomial-rings-over-UFD-is-UFD.html#theorem-21",
  "type": "Theorem",
  "number": "7.2.2",
  "title": "",
  "body": " If is a UFD then is a UFD.  "
},
{
  "id": "proof-45",
  "level": "2",
  "url": "sec-polynomial-rings-over-UFD-is-UFD.html#proof-45",
  "type": "Proof",
  "number": "7.2.2",
  "title": "",
  "body": " First observe that an irreducible element in remains irreducible in . Thus in order to show is a UFD we first show that any nonzero nonunit polynomial can be factored into a product of irreducibles. So we assume that is a nonzero nonunit. By , there exists a primitive polynomial such that . Since is UFD, can be uniquely factored into irreducibles in . Thus we further assume that is a primitive reducible polynomial. So there are such that , and and . By induction on we get can be factored in , thus can be factored in a product of irreducibles in .  Now we show that the factorization obtained above is essentially unique. Suppose that is a nonconstant primitive polynomial in and By each and remains irreducible over the quotient field of . Since is UFD we must have and there are such that for some permutation . However, as and are irreducibles in , by , are primitive elements of . Therefore, for every (see ), i.e., .  "
},
{
  "id": "polynomial-ring-over-field-is-UFD",
  "level": "2",
  "url": "sec-polynomial-rings-over-UFD-is-UFD.html#polynomial-ring-over-field-is-UFD",
  "type": "Corollary",
  "number": "7.2.3",
  "title": "",
  "body": " A polynomial ring in -variable over a field , is a UFD.  "
},
{
  "id": "sec-Brahmagupta-equation",
  "level": "1",
  "url": "sec-Brahmagupta-equation.html",
  "type": "Section",
  "number": "8.1",
  "title": "Brahmagupta’s equations",
  "body": " Brahmagupta's equations  Let us consider the following equation where is a square-free integer. Problem is to find integers satisfying the above equation. Indian mathematician Brahmagupta discovered, among other things, the following identity: for given integers , and there exists integers such that Using this identity Bramhagupta was able to produce infinitely many solutions of , and also able to solve for certain values of and . In this section we give a connection between the ring theory and equations of type . We begin with the following.    Let be a square-free integer. The set is an integral domain, and the map is multiplicative, i.e., .    The map defined above is a square of the absolute value in .    We keep notations of .  is a unit in if and only if .  If is a prime number in then is irreducible.     Show that is a unit if and only if .   (Connection with Brahmagupta's equation)  The integer solutions of the equation or are precisely units in the ring .     (Units in )  By the above lemma an element is a unit if and only if . Thus we must have and .   Suppose that with . Then we can consider . Note that we can always choose with If we plot integers on -axis and integer multiples of on the -axis then the choice of will be clear. Note that it is similar to the result proved for Gaussian integers (ref ).   ( is ED)  For nonzero there exists such that     Consider with the map Suppose that are nonzero elements such that Suppose that we want to find such that . Thus In order to have we must have Since for any we have and hence is always bigger than . Thus with the map there does not exists with .   "
},
{
  "id": "norm-of-sqrt-d",
  "level": "2",
  "url": "sec-Brahmagupta-equation.html#norm-of-sqrt-d",
  "type": "Lemma",
  "number": "8.1.1",
  "title": "",
  "body": " Let be a square-free integer. The set is an integral domain, and the map is multiplicative, i.e., .  "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "sec-Brahmagupta-equation.html#remark-12",
  "type": "Remark",
  "number": "8.1.2",
  "title": "",
  "body": " The map defined above is a square of the absolute value in .  "
},
{
  "id": "lemma-24",
  "level": "2",
  "url": "sec-Brahmagupta-equation.html#lemma-24",
  "type": "Lemma",
  "number": "8.1.3",
  "title": "",
  "body": " We keep notations of .  is a unit in if and only if .  If is a prime number in then is irreducible.    "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "sec-Brahmagupta-equation.html#exercise-47",
  "type": "Checkpoint",
  "number": "8.1.4",
  "title": "",
  "body": "Show that is a unit if and only if . "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "sec-Brahmagupta-equation.html#remark-13",
  "type": "Remark",
  "number": "8.1.5",
  "title": "(Connection with Brahmagupta’s equation).",
  "body": " (Connection with Brahmagupta's equation)  The integer solutions of the equation or are precisely units in the ring .  "
},
{
  "id": "lemma-25",
  "level": "2",
  "url": "sec-Brahmagupta-equation.html#lemma-25",
  "type": "Lemma",
  "number": "8.1.6",
  "title": "(Units in <span class=\"process-math\">\\(\\Z[\\sqrt{-2}]\\)<\/span>).",
  "body": " (Units in )  By the above lemma an element is a unit if and only if . Thus we must have and .  "
},
{
  "id": "division-algorithm-in-sqrt-2",
  "level": "2",
  "url": "sec-Brahmagupta-equation.html#division-algorithm-in-sqrt-2",
  "type": "Proposition",
  "number": "8.1.7",
  "title": "(<span class=\"process-math\">\\(\\Z[\\sqrt{-2}]\\)<\/span> is ED).",
  "body": " ( is ED)  For nonzero there exists such that   "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "sec-Brahmagupta-equation.html#remark-14",
  "type": "Remark",
  "number": "8.1.8",
  "title": "",
  "body": " Consider with the map Suppose that are nonzero elements such that Suppose that we want to find such that . Thus In order to have we must have Since for any we have and hence is always bigger than . Thus with the map there does not exists with .  "
},
{
  "id": "sec-Eisenstein-integers",
  "level": "1",
  "url": "sec-Eisenstein-integers.html",
  "type": "Section",
  "number": "8.2",
  "title": "Eisenstein integer",
  "body": " Eisenstein integer  Throughout this section we let . This is a primitive -rd root of unity and it satisfies the following quadratic irreducible polynomial:    (Eisenstein integers) The ring is called the ring of Eisenstein integers.  The set is indeed a ring. You may need to use the fact that .   The map is multiplicative and non-negative. Furthermore, if and only if .   By completing the square we get This observation may be used to get a proof of the result.   (Units in Eisenstein integers)  An element is a unit if and only if . Only units in are .   Suppose that , i.e., . Hence , i.e., . Thus we should have and corresponding Eisenstein integers are Every element in the above set is a unit (see equation ). Furthermore, by equation .   The ring of Eisenstein integers is an Euclidean domain.   "
},
{
  "id": "def-eisenstein-integers",
  "level": "2",
  "url": "sec-Eisenstein-integers.html#def-eisenstein-integers",
  "type": "Definition",
  "number": "8.2.1",
  "title": "(Eisenstein integers).",
  "body": " (Eisenstein integers) The ring is called the ring of Eisenstein integers. "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "sec-Eisenstein-integers.html#exercise-48",
  "type": "Checkpoint",
  "number": "8.2.2",
  "title": "",
  "body": "The set is indeed a ring. You may need to use the fact that . "
},
{
  "id": "lemma-26",
  "level": "2",
  "url": "sec-Eisenstein-integers.html#lemma-26",
  "type": "Lemma",
  "number": "8.2.3",
  "title": "",
  "body": " The map is multiplicative and non-negative. Furthermore, if and only if .  "
},
{
  "id": "proof-46",
  "level": "2",
  "url": "sec-Eisenstein-integers.html#proof-46",
  "type": "Proof",
  "number": "8.2.1",
  "title": "",
  "body": "By completing the square we get This observation may be used to get a proof of the result. "
},
{
  "id": "units-in-eisenstein-integers",
  "level": "2",
  "url": "sec-Eisenstein-integers.html#units-in-eisenstein-integers",
  "type": "Lemma",
  "number": "8.2.4",
  "title": "(Units in Eisenstein integers).",
  "body": " (Units in Eisenstein integers)  An element is a unit if and only if . Only units in are .  "
},
{
  "id": "proof-47",
  "level": "2",
  "url": "sec-Eisenstein-integers.html#proof-47",
  "type": "Proof",
  "number": "8.2.2",
  "title": "",
  "body": "Suppose that , i.e., . Hence , i.e., . Thus we should have and corresponding Eisenstein integers are Every element in the above set is a unit (see equation ). Furthermore, by equation . "
},
{
  "id": "theorem-22",
  "level": "2",
  "url": "sec-Eisenstein-integers.html#theorem-22",
  "type": "Theorem",
  "number": "8.2.5",
  "title": "",
  "body": " The ring of Eisenstein integers is an Euclidean domain.  "
},
{
  "id": "sec-modules",
  "level": "1",
  "url": "sec-modules.html",
  "type": "Section",
  "number": "9.1",
  "title": "Definition",
  "body": " Definition  We generalize the concept of a vector space over a field.   (Left Module)  Let be a ring. An abelian group is said to be a left -module if there is a map scalar multiplication  satisfying the following conditions:  For any and any   For any and any   For any and any   For any       A left module is referred to as an -mod.   In a similar way we define a right module.   (Right Module)  Let be a ring. An abelian group is said to be a right -module if there is a map scalar multiplication  satisfying the following conditions:  For any and any   For any and any   For any and any   For any       A right module is referred as mod- .   Following properties follows immediately from the definition of -module.   Let be a left -module. For any and any we have the following.     For and any we have  For we have .     "
},
{
  "id": "def-left-module",
  "level": "2",
  "url": "sec-modules.html#def-left-module",
  "type": "Definition",
  "number": "9.1.1",
  "title": "(Left Module).",
  "body": " (Left Module)  Let be a ring. An abelian group is said to be a left -module if there is a map scalar multiplication  satisfying the following conditions:  For any and any   For any and any   For any and any   For any     "
},
{
  "id": "convention-14",
  "level": "2",
  "url": "sec-modules.html#convention-14",
  "type": "Convention",
  "number": "9.1.2",
  "title": "",
  "body": " A left module is referred to as an -mod.  "
},
{
  "id": "def-right-module",
  "level": "2",
  "url": "sec-modules.html#def-right-module",
  "type": "Definition",
  "number": "9.1.3",
  "title": "(Right Module).",
  "body": " (Right Module)  Let be a ring. An abelian group is said to be a right -module if there is a map scalar multiplication  satisfying the following conditions:  For any and any   For any and any   For any and any   For any     "
},
{
  "id": "convention-15",
  "level": "2",
  "url": "sec-modules.html#convention-15",
  "type": "Convention",
  "number": "9.1.4",
  "title": "",
  "body": " A right module is referred as mod- .  "
},
{
  "id": "lemma-28",
  "level": "2",
  "url": "sec-modules.html#lemma-28",
  "type": "Lemma",
  "number": "9.1.5",
  "title": "",
  "body": " Let be a left -module. For any and any we have the following.     For and any we have  For we have .    "
},
{
  "id": "sec-examples-of-modules",
  "level": "1",
  "url": "sec-examples-of-modules.html",
  "type": "Section",
  "number": "9.2",
  "title": "Examples",
  "body": " Examples   (Abelian groups as -modules)  We show that every abelian group is a left -module. Indeed, let be an abelian group. We define the map by if and if . It is left to the reader to verify that with this map becomes -module. Conversely, any -module is, by definition, an abelian group.     (Vector spaces as left modules)  Let be a finite-dimensional vector space over a field . Then is also a left -module. In other words, left modules over a field are vector spaces.    (Vector space as -module)  Let be an -vector space. We define the map: Verify that with this map is a left -module.    (Vector space as an -module)  Let be a vector space over a field , and fix an -linear map . Recall that is the linear map given by . We define a map by It is left to the reader to verify that this makes a left -module.    (Ring as a module over itself)  Let be a ring. The ring multiplication maps defines a left and a right -module structure on .     (Ring homomorphisms and module structures)   Let be an abelian group. The group of all group endomorphisms of , is a ring. Assume that there is a ring homomorphism . We make as an -mod using . Indeed, consider the following map: This map makes into an -mod. The verification is left to the reader.  Conversely, suppose that is a left -module. For define a group homomorphism by . We get a ring homomorphism All verifications are left to the reader.  Thus, there is a left -module structure on an abelian group if and only if there is a ring homomorphism .     (Induced module structure via a ring homomorphism)  Let be a ring homomorphism, and let be a left -module. We show that can be considered as a left -module. Indeed, define . Verify that this makes a left -module. If we consider the identity homomorphism on then we get .     (Modules over a ring and its opposite ring)  Let be a ring and be its opposite ring (see ). If is a left -module (resp., a right -module) then is a right -module (resp., a left -module). Indeed, given a left -module we define by    "
},
{
  "id": "abelian-groups-Z-modules",
  "level": "2",
  "url": "sec-examples-of-modules.html#abelian-groups-Z-modules",
  "type": "Example",
  "number": "9.2.1",
  "title": "(Abelian groups as <span class=\"process-math\">\\(\\Z\\)<\/span>-modules).",
  "body": " (Abelian groups as -modules)  We show that every abelian group is a left -module. Indeed, let be an abelian group. We define the map by if and if . It is left to the reader to verify that with this map becomes -module. Conversely, any -module is, by definition, an abelian group.   "
},
{
  "id": "vs-as-modules",
  "level": "2",
  "url": "sec-examples-of-modules.html#vs-as-modules",
  "type": "Example",
  "number": "9.2.2",
  "title": "(Vector spaces as left modules).",
  "body": " (Vector spaces as left modules)  Let be a finite-dimensional vector space over a field . Then is also a left -module. In other words, left modules over a field are vector spaces.  "
},
{
  "id": "vs-as-End-module",
  "level": "2",
  "url": "sec-examples-of-modules.html#vs-as-End-module",
  "type": "Example",
  "number": "9.2.3",
  "title": "(Vector space as <span class=\"process-math\">\\(\\End_F(V)\\)<\/span>-module).",
  "body": " (Vector space as -module)  Let be an -vector space. We define the map: Verify that with this map is a left -module.  "
},
{
  "id": "vs-as-FX-module",
  "level": "2",
  "url": "sec-examples-of-modules.html#vs-as-FX-module",
  "type": "Example",
  "number": "9.2.4",
  "title": "(Vector space as an <span class=\"process-math\">\\(F[X]\\)<\/span>-module).",
  "body": " (Vector space as an -module)  Let be a vector space over a field , and fix an -linear map . Recall that is the linear map given by . We define a map by It is left to the reader to verify that this makes a left -module.  "
},
{
  "id": "module-over-itself",
  "level": "2",
  "url": "sec-examples-of-modules.html#module-over-itself",
  "type": "Example",
  "number": "9.2.5",
  "title": "(Ring as a module over itself).",
  "body": " (Ring as a module over itself)  Let be a ring. The ring multiplication maps defines a left and a right -module structure on .  "
},
{
  "id": "ring-hom-and-modules",
  "level": "2",
  "url": "sec-examples-of-modules.html#ring-hom-and-modules",
  "type": "Example",
  "number": "9.2.6",
  "title": "(Ring homomorphisms and module structures).",
  "body": " (Ring homomorphisms and module structures)   Let be an abelian group. The group of all group endomorphisms of , is a ring. Assume that there is a ring homomorphism . We make as an -mod using . Indeed, consider the following map: This map makes into an -mod. The verification is left to the reader.  Conversely, suppose that is a left -module. For define a group homomorphism by . We get a ring homomorphism All verifications are left to the reader.  Thus, there is a left -module structure on an abelian group if and only if there is a ring homomorphism .   "
},
{
  "id": "module-struture-via-ring-hom",
  "level": "2",
  "url": "sec-examples-of-modules.html#module-struture-via-ring-hom",
  "type": "Example",
  "number": "9.2.7",
  "title": "(Induced module structure via a ring homomorphism).",
  "body": " (Induced module structure via a ring homomorphism)  Let be a ring homomorphism, and let be a left -module. We show that can be considered as a left -module. Indeed, define . Verify that this makes a left -module. If we consider the identity homomorphism on then we get .   "
},
{
  "id": "left-module-as-right-module",
  "level": "2",
  "url": "sec-examples-of-modules.html#left-module-as-right-module",
  "type": "Example",
  "number": "9.2.8",
  "title": "(Modules over a ring and its opposite ring).",
  "body": " (Modules over a ring and its opposite ring)  Let be a ring and be its opposite ring (see ). If is a left -module (resp., a right -module) then is a right -module (resp., a left -module). Indeed, given a left -module we define by   "
},
{
  "id": "sec-min-poly-of-linear-map",
  "level": "1",
  "url": "sec-min-poly-of-linear-map.html",
  "type": "Section",
  "number": "9.3",
  "title": "Minimal polynomial of a linear map",
  "body": " Minimal polynomial of a linear map  The minimal polynomial of a linear map was defined in Linear Algebra course. We obtain the minimal polynomial using Module Theory.  Let be a field and let the polynomial ring in one variable over . Suppose that is a finite-dimensional vector space over , i.e., is a left -module. Consider an -linear map . We make as an -module using as follows. The scalar multiplication is defined by Thus for if we consider then we have, for any , It is left to the reader to verify that with the scalar multiplication defined above becomes an -module. Given we define a group endomorphism of an abelian group as follows: As in we consider the following ring homomorphism: Note that is not only a group endomorphism but it is an -linear map. Thus, . Since is a ring homomorphism its kernel, is an ideal in . By the fundamental isomorphism theorem we get a ring and a vector space isomorphism Since and , while , the is non-trivial. As is a PID there exists a monic polynomial such that . Thus is characterized by each of the following properties:  Let and is monic. Then if and only .  The polynomial is a monic polynomial of the least degree such that .  The polynomial is called the minimal polynomial of .   We reprove the following result from Linear Algebra course.   Keep notations of the above paragraph. An element is a root of the minimal polynomial if and only if is an eigenvalue of .   Assume that is a root of , i.e., with . Since is a monic generator of we must have . So let be such that . Therefore we have the following. In other words, is an eigenvalue of with an eigenvector . Now we show the converse. Suppose that is an eigenvalue of . Thus there exists such that . By division algorithm there exists a constant and such that Hence, Since we get that and hence , i.e., is a root of .   "
},
{
  "id": "p-102",
  "level": "2",
  "url": "sec-min-poly-of-linear-map.html#p-102",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimal polynomial of "
},
{
  "id": "proposition-21",
  "level": "2",
  "url": "sec-min-poly-of-linear-map.html#proposition-21",
  "type": "Proposition",
  "number": "9.3.1",
  "title": "",
  "body": " Keep notations of the above paragraph. An element is a root of the minimal polynomial if and only if is an eigenvalue of .  "
},
{
  "id": "proof-48",
  "level": "2",
  "url": "sec-min-poly-of-linear-map.html#proof-48",
  "type": "Proof",
  "number": "9.3.1",
  "title": "",
  "body": "Assume that is a root of , i.e., with . Since is a monic generator of we must have . So let be such that . Therefore we have the following. In other words, is an eigenvalue of with an eigenvector . Now we show the converse. Suppose that is an eigenvalue of . Thus there exists such that . By division algorithm there exists a constant and such that Hence, Since we get that and hence , i.e., is a root of .  "
},
{
  "id": "sec-submodules",
  "level": "1",
  "url": "sec-submodules.html",
  "type": "Section",
  "number": "9.4",
  "title": "Submodules",
  "body": " Submodules   Let be a left -module. A subgroup of is said to be a submodule of or -submodule if is closed under the scalar multiplication of on , i.e., for any and any we have .   A submodule of a module is denoted by .   (Submodule generated by a subset)  Let be a left -module, and let be a subset of . The -submodule generated by is  If is a finite set, say then we write the -module generated by as and we call such an -module a finitely generated -module .  In particular, if then the finitely generated -module is called principal -module or cyclic -module .     Let be a left -module. An element is said to be an -linear combination of if     Trivial submodule  Let be a ring and let be a left -module. The trivial subgroup is an -submodule of . Also, module is an -submodule of itself.    (Vector subspaces are submodules)  If is an -vector space then any subspace of is an -submodule of .    (Subgroups of abelian groups as submodules)  Every subgroup of an abelian group is a -submodule, refer to .    (Ideals as submodules)  Consider a ring as a left module over itself via the left multiplication (see ). If is a left ideal of then is a left -module.    (Annihilator of a module)  Let be a left -module. By there is a ring homomorphism . The kernel of this ring homomorphism is called the annihilator of : being a two-sided ideal of is a left -submodule of . Consider as a -module. In this case .     (Invariant subspaces)  Let be a vector space over a field , i.e., is an -mod. Fix a linear transformation . As in we consider as an -mod. We show that submodules of as an -mod are precisely -invariant -subspaces of a vector space . Assume that is an -submodule of . First observe that is also an -subspace of . Indeed, under -module structure any constant polynomial acts on by the following way: where is the scalar multiplication via the vector space structure. For any we have and hence is a -invariant subspace of .  Conversely assume that is a -invariant subspace of . Then for any and any we have is -invariant subspace of . Therefore, for any and any , we get that Hence is an -submodule.     (Proper submodule and non-trivial submodule) A left -submodule is said to be proper if and is said to be non-trivial if .   (Simple module)  Let be a ring and let be an -module. We say that is simple module if has no proper non-trivial submodule.    If is a simple left -module then it is a cyclic module.   Let . Consider the left non-trivial submodule generated by , . Since is simple and we have .   (Simple abelian groups)  In we showed that -modules are precisely abelian groups. Thus a simple -module must be a cyclic group of a prime order.    (Vector space as an -module is simple)  Let be a finite-dimensional vector space over a field . As in we consider as an -module. We show that is a simple -module. In view of it is enough to show that given any with there exists such that . Since we can extend to a basis of , say . For a set we define a map and , and we extend linearly. Thus is a required map.    "
},
{
  "id": "def-submodule",
  "level": "2",
  "url": "sec-submodules.html#def-submodule",
  "type": "Definition",
  "number": "9.4.1",
  "title": "",
  "body": " Let be a left -module. A subgroup of is said to be a submodule of or -submodule if is closed under the scalar multiplication of on , i.e., for any and any we have .  "
},
{
  "id": "convention-16",
  "level": "2",
  "url": "sec-submodules.html#convention-16",
  "type": "Convention",
  "number": "9.4.2",
  "title": "",
  "body": "A submodule of a module is denoted by . "
},
{
  "id": "def-submodule-generated-by-subset",
  "level": "2",
  "url": "sec-submodules.html#def-submodule-generated-by-subset",
  "type": "Definition",
  "number": "9.4.3",
  "title": "(Submodule generated by a subset).",
  "body": " (Submodule generated by a subset)  Let be a left -module, and let be a subset of . The -submodule generated by is  If is a finite set, say then we write the -module generated by as and we call such an -module a finitely generated -module .  In particular, if then the finitely generated -module is called principal -module or cyclic -module .   "
},
{
  "id": "module-linear-combination",
  "level": "2",
  "url": "sec-submodules.html#module-linear-combination",
  "type": "Definition",
  "number": "9.4.4",
  "title": "",
  "body": " Let be a left -module. An element is said to be an -linear combination of if   "
},
{
  "id": "trivial-submodule",
  "level": "2",
  "url": "sec-submodules.html#trivial-submodule",
  "type": "Example",
  "number": "9.4.5",
  "title": "Trivial submodule.",
  "body": " Trivial submodule  Let be a ring and let be a left -module. The trivial subgroup is an -submodule of . Also, module is an -submodule of itself.  "
},
{
  "id": "vector-subspaces-as-submodules",
  "level": "2",
  "url": "sec-submodules.html#vector-subspaces-as-submodules",
  "type": "Example",
  "number": "9.4.6",
  "title": "(Vector subspaces are submodules).",
  "body": " (Vector subspaces are submodules)  If is an -vector space then any subspace of is an -submodule of .  "
},
{
  "id": "subgroups-as-submodules",
  "level": "2",
  "url": "sec-submodules.html#subgroups-as-submodules",
  "type": "Example",
  "number": "9.4.7",
  "title": "(Subgroups of abelian groups as submodules).",
  "body": " (Subgroups of abelian groups as submodules)  Every subgroup of an abelian group is a -submodule, refer to .  "
},
{
  "id": "ideals-as-submodules",
  "level": "2",
  "url": "sec-submodules.html#ideals-as-submodules",
  "type": "Example",
  "number": "9.4.8",
  "title": "(Ideals as submodules).",
  "body": " (Ideals as submodules)  Consider a ring as a left module over itself via the left multiplication (see ). If is a left ideal of then is a left -module.  "
},
{
  "id": "annihilator-of-module",
  "level": "2",
  "url": "sec-submodules.html#annihilator-of-module",
  "type": "Example",
  "number": "9.4.9",
  "title": "(Annihilator of a module).",
  "body": " (Annihilator of a module)  Let be a left -module. By there is a ring homomorphism . The kernel of this ring homomorphism is called the annihilator of : being a two-sided ideal of is a left -submodule of . Consider as a -module. In this case .   "
},
{
  "id": "invariant-subspaces",
  "level": "2",
  "url": "sec-submodules.html#invariant-subspaces",
  "type": "Example",
  "number": "9.4.10",
  "title": "(Invariant subspaces).",
  "body": " (Invariant subspaces)  Let be a vector space over a field , i.e., is an -mod. Fix a linear transformation . As in we consider as an -mod. We show that submodules of as an -mod are precisely -invariant -subspaces of a vector space . Assume that is an -submodule of . First observe that is also an -subspace of . Indeed, under -module structure any constant polynomial acts on by the following way: where is the scalar multiplication via the vector space structure. For any we have and hence is a -invariant subspace of .  Conversely assume that is a -invariant subspace of . Then for any and any we have is -invariant subspace of . Therefore, for any and any , we get that Hence is an -submodule.   "
},
{
  "id": "def-proper-nontrivial-submodule",
  "level": "2",
  "url": "sec-submodules.html#def-proper-nontrivial-submodule",
  "type": "Definition",
  "number": "9.4.11",
  "title": "(Proper submodule and non-trivial submodule).",
  "body": " (Proper submodule and non-trivial submodule) A left -submodule is said to be proper if and is said to be non-trivial if . "
},
{
  "id": "def-simple-module",
  "level": "2",
  "url": "sec-submodules.html#def-simple-module",
  "type": "Definition",
  "number": "9.4.12",
  "title": "(Simple module).",
  "body": " (Simple module)  Let be a ring and let be an -module. We say that is simple module if has no proper non-trivial submodule.  "
},
{
  "id": "simple-implies-cyclic",
  "level": "2",
  "url": "sec-submodules.html#simple-implies-cyclic",
  "type": "Lemma",
  "number": "9.4.13",
  "title": "",
  "body": " If is a simple left -module then it is a cyclic module.  "
},
{
  "id": "proof-49",
  "level": "2",
  "url": "sec-submodules.html#proof-49",
  "type": "Proof",
  "number": "9.4.1",
  "title": "",
  "body": "Let . Consider the left non-trivial submodule generated by , . Since is simple and we have . "
},
{
  "id": "simple-abelian-groups",
  "level": "2",
  "url": "sec-submodules.html#simple-abelian-groups",
  "type": "Example",
  "number": "9.4.14",
  "title": "(Simple abelian groups).",
  "body": " (Simple abelian groups)  In we showed that -modules are precisely abelian groups. Thus a simple -module must be a cyclic group of a prime order.  "
},
{
  "id": "simple-modules-of-End",
  "level": "2",
  "url": "sec-submodules.html#simple-modules-of-End",
  "type": "Example",
  "number": "9.4.15",
  "title": "(Vector space as an <span class=\"process-math\">\\(\\End_F(V)\\)<\/span>-module is simple).",
  "body": " (Vector space as an -module is simple)  Let be a finite-dimensional vector space over a field . As in we consider as an -module. We show that is a simple -module. In view of it is enough to show that given any with there exists such that . Since we can extend to a basis of , say . For a set we define a map and , and we extend linearly. Thus is a required map.   "
},
{
  "id": "sec-module-hom",
  "level": "1",
  "url": "sec-module-hom.html",
  "type": "Section",
  "number": "9.5",
  "title": "Module homomorphisms",
  "body": " Module homomorphisms  Let be a ring. Let and are left -modules. A map is said to be an -module homomorphism if for any and any we have   Let be a ring, and let be an -module homomorphism. The kernel of is and the image of is   It is easy to verify that and are -submodules of and , respectively.   (Left multiplication module homomorphism)  Let be a commutative ring, and let be a left -module. We fix and consider the map defined by The map is an -module homomorphism.    ( -module homomorphism)  Let be a finite-dimensional vector space over a field . We fix an -linear endomorphism of , say . We consider as a left -module via the following scalar multiplication (refer to ): Consider the following map. It is left to the reader to verify that is an -module.    (Abelian group homomorphisms)  A -module homomorphism is same as the group homomorphism.    (Annihilator of an element)  Let be a ring and let be a left -module. Fix an element . The map define by is an -module homomorphism. The kernel of this map is called the annihilator of and it is denoted by . Thus is a left ideal of .    (Inclusion homomorphism)  Let be a ring and let be left -modules with . Then is a submodule of if and only if inclusion is an -module homomorphism.    Let be a ring and let be left -modules. An -module homomorphism if injective if and only if .   Let be a ring and let be left -modules. An -module homomorphism is said to be an -isomorphism if there exists an -module homomorphism such that and . If there is an -isomorphism between and then we say that0 isomorphic to , and write .   An -module homomorphism is isomorphism if and only if is a bijective -module homomorphism.    (Minimal left ideals of )  Consider the matrix ring over a field , . Then are left ideals of , and hence left -submodules of . We define a map It is left to the reader to check that is an -module homomorphism. Furthermore, the map is also an -module homomorphism with Thus -modules are isomorphic. Furthermore we show that is a simple left -module. By a similar reasoning can be shown as a simple left -mdoule. Suppose that is a nonzero element and be an arbitrary element. We show that there exists such that . Indeed, we get the following equations from . This can be solved to obtain and . Hence, is a simple left -module. In other words, is a minimal left ideal of .    Let be a simple left -module and let be a left -module. Any nonzero -module homomorphism is injective.    Let be a simple left -module and let be a left -module. Any nonzero -module homomorphism is surjective.   "
},
{
  "id": "def-module-hom",
  "level": "2",
  "url": "sec-module-hom.html#def-module-hom",
  "type": "Definition",
  "number": "9.5.1",
  "title": "",
  "body": "Let be a ring. Let and are left -modules. A map is said to be an -module homomorphism if for any and any we have  "
},
{
  "id": "def-kernel-module-hom",
  "level": "2",
  "url": "sec-module-hom.html#def-kernel-module-hom",
  "type": "Definition",
  "number": "9.5.2",
  "title": "",
  "body": "Let be a ring, and let be an -module homomorphism. The kernel of is and the image of is  "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "sec-module-hom.html#remark-15",
  "type": "Remark",
  "number": "9.5.3",
  "title": "",
  "body": "It is easy to verify that and are -submodules of and , respectively. "
},
{
  "id": "left-multiplication-module-hom",
  "level": "2",
  "url": "sec-module-hom.html#left-multiplication-module-hom",
  "type": "Example",
  "number": "9.5.4",
  "title": "(Left multiplication module homomorphism).",
  "body": " (Left multiplication module homomorphism)  Let be a commutative ring, and let be a left -module. We fix and consider the map defined by The map is an -module homomorphism.  "
},
{
  "id": "example-88",
  "level": "2",
  "url": "sec-module-hom.html#example-88",
  "type": "Example",
  "number": "9.5.5",
  "title": "(<span class=\"process-math\">\\(F[X]\\)<\/span>-module homomorphism).",
  "body": " ( -module homomorphism)  Let be a finite-dimensional vector space over a field . We fix an -linear endomorphism of , say . We consider as a left -module via the following scalar multiplication (refer to ): Consider the following map. It is left to the reader to verify that is an -module.  "
},
{
  "id": "example-89",
  "level": "2",
  "url": "sec-module-hom.html#example-89",
  "type": "Example",
  "number": "9.5.6",
  "title": "(Abelian group homomorphisms).",
  "body": " (Abelian group homomorphisms)  A -module homomorphism is same as the group homomorphism.  "
},
{
  "id": "annihilator-of-element",
  "level": "2",
  "url": "sec-module-hom.html#annihilator-of-element",
  "type": "Example",
  "number": "9.5.7",
  "title": "(Annihilator of an element).",
  "body": " (Annihilator of an element)  Let be a ring and let be a left -module. Fix an element . The map define by is an -module homomorphism. The kernel of this map is called the annihilator of and it is denoted by . Thus is a left ideal of .  "
},
{
  "id": "example-91",
  "level": "2",
  "url": "sec-module-hom.html#example-91",
  "type": "Example",
  "number": "9.5.8",
  "title": "(Inclusion homomorphism).",
  "body": " (Inclusion homomorphism)  Let be a ring and let be left -modules with . Then is a submodule of if and only if inclusion is an -module homomorphism.  "
},
{
  "id": "lemma-30",
  "level": "2",
  "url": "sec-module-hom.html#lemma-30",
  "type": "Lemma",
  "number": "9.5.9",
  "title": "",
  "body": " Let be a ring and let be left -modules. An -module homomorphism if injective if and only if .  "
},
{
  "id": "definition-63",
  "level": "2",
  "url": "sec-module-hom.html#definition-63",
  "type": "Definition",
  "number": "9.5.10",
  "title": "",
  "body": "Let be a ring and let be left -modules. An -module homomorphism is said to be an -isomorphism if there exists an -module homomorphism such that and . If there is an -isomorphism between and then we say that0 isomorphic to , and write . "
},
{
  "id": "lemma-31",
  "level": "2",
  "url": "sec-module-hom.html#lemma-31",
  "type": "Lemma",
  "number": "9.5.11",
  "title": "",
  "body": " An -module homomorphism is isomorphism if and only if is a bijective -module homomorphism.  "
},
{
  "id": "minimal-left-ideals-of-matrices",
  "level": "2",
  "url": "sec-module-hom.html#minimal-left-ideals-of-matrices",
  "type": "Example",
  "number": "9.5.12",
  "title": "(Minimal left ideals of <span class=\"process-math\">\\(M_2(F)\\)<\/span>).",
  "body": " (Minimal left ideals of )  Consider the matrix ring over a field , . Then are left ideals of , and hence left -submodules of . We define a map It is left to the reader to check that is an -module homomorphism. Furthermore, the map is also an -module homomorphism with Thus -modules are isomorphic. Furthermore we show that is a simple left -module. By a similar reasoning can be shown as a simple left -mdoule. Suppose that is a nonzero element and be an arbitrary element. We show that there exists such that . Indeed, we get the following equations from . This can be solved to obtain and . Hence, is a simple left -module. In other words, is a minimal left ideal of .  "
},
{
  "id": "lemma-32",
  "level": "2",
  "url": "sec-module-hom.html#lemma-32",
  "type": "Lemma",
  "number": "9.5.13",
  "title": "",
  "body": " Let be a simple left -module and let be a left -module. Any nonzero -module homomorphism is injective.  "
},
{
  "id": "lemma-33",
  "level": "2",
  "url": "sec-module-hom.html#lemma-33",
  "type": "Lemma",
  "number": "9.5.14",
  "title": "",
  "body": " Let be a simple left -module and let be a left -module. Any nonzero -module homomorphism is surjective.  "
},
{
  "id": "sec-sums-products-of-modules",
  "level": "1",
  "url": "sec-sums-products-of-modules.html",
  "type": "Section",
  "number": "9.6",
  "title": "Sums, products, and direct sums",
  "body": " Sums, products, and direct sums  Throughout this section we assume that is a left module over a ring . For some non-empty indexing set , let ( ) be left -submodules of .   (Sum of submodules)  The sum of -submodules is the submodule generated by . It is denoted by . Thus     (Product of modules)  Let be a family of left modules over a ring . We give the Cartesian product an -module structure by defining addition and multiplication as follows. For any and any , the scalar multiplication is defined by     (Projection maps)  Let be a family of left modules over a ring . For each we get the family of -module homomorphism An -mod homomorphism is called the projection homomorphism .    (Direct sum of modules)  Consider a family of left modules over a ring . The direct sum of is the following submodule of .     Consider as a left module over itself. We denote by an -module of the direct sum of -copies of , i.e.,     (Minimal generating subset and the rank of a module)  Let be a finitely generated left -module. Suppose that are such that . We call a generating subset of . By Well-ordering principle, there exists a minimal generating subset of , such a generating subset is called a minimal generating subset of . The cardinality of a minimal generating subset of is called the rank of . The rank of is denoted by .    (Free module of a finite rank)  An -module is said to be a free module of a finite rank if is -module isomorphic to for some natural number .    ( -linearly independence)  Let be an -mod, and let . We say that are -linearly independent if then . Elements are said to be -linearly dependent if are not -linearly independent. In other words, are -linearly dependent if there are , not all zero, such that .     (Linear dependence of an element of a finite cyclic group)  Consider an abelian group , i.e., consider as a -module. We show that any is -linearly independent. Indeed, for any we have .   "
},
{
  "id": "def-sums-fo-module",
  "level": "2",
  "url": "sec-sums-products-of-modules.html#def-sums-fo-module",
  "type": "Definition",
  "number": "9.6.1",
  "title": "(Sum of submodules).",
  "body": " (Sum of submodules)  The sum of -submodules is the submodule generated by . It is denoted by . Thus   "
},
{
  "id": "def-product-of-modules",
  "level": "2",
  "url": "sec-sums-products-of-modules.html#def-product-of-modules",
  "type": "Definition",
  "number": "9.6.2",
  "title": "(Product of modules).",
  "body": " (Product of modules)  Let be a family of left modules over a ring . We give the Cartesian product an -module structure by defining addition and multiplication as follows. For any and any , the scalar multiplication is defined by   "
},
{
  "id": "def-projection-maps",
  "level": "2",
  "url": "sec-sums-products-of-modules.html#def-projection-maps",
  "type": "Definition",
  "number": "9.6.3",
  "title": "(Projection maps).",
  "body": " (Projection maps)  Let be a family of left modules over a ring . For each we get the family of -module homomorphism An -mod homomorphism is called the projection homomorphism .  "
},
{
  "id": "def-direct-sum",
  "level": "2",
  "url": "sec-sums-products-of-modules.html#def-direct-sum",
  "type": "Definition",
  "number": "9.6.4",
  "title": "(Direct sum of modules).",
  "body": " (Direct sum of modules)  Consider a family of left modules over a ring . The direct sum of is the following submodule of .   "
},
{
  "id": "convention-17",
  "level": "2",
  "url": "sec-sums-products-of-modules.html#convention-17",
  "type": "Convention",
  "number": "9.6.5",
  "title": "",
  "body": " Consider as a left module over itself. We denote by an -module of the direct sum of -copies of , i.e.,   "
},
{
  "id": "def-minimal-generating-subset",
  "level": "2",
  "url": "sec-sums-products-of-modules.html#def-minimal-generating-subset",
  "type": "Definition",
  "number": "9.6.6",
  "title": "(Minimal generating subset and the rank of a module).",
  "body": " (Minimal generating subset and the rank of a module)  Let be a finitely generated left -module. Suppose that are such that . We call a generating subset of . By Well-ordering principle, there exists a minimal generating subset of , such a generating subset is called a minimal generating subset of . The cardinality of a minimal generating subset of is called the rank of . The rank of is denoted by .  "
},
{
  "id": "def-free-module-of-finite-rank",
  "level": "2",
  "url": "sec-sums-products-of-modules.html#def-free-module-of-finite-rank",
  "type": "Definition",
  "number": "9.6.7",
  "title": "(Free module of a finite rank).",
  "body": " (Free module of a finite rank)  An -module is said to be a free module of a finite rank if is -module isomorphic to for some natural number .  "
},
{
  "id": "def-R-independence",
  "level": "2",
  "url": "sec-sums-products-of-modules.html#def-R-independence",
  "type": "Definition",
  "number": "9.6.8",
  "title": "(<span class=\"process-math\">\\(R\\)<\/span>-linearly independence).",
  "body": " ( -linearly independence)  Let be an -mod, and let . We say that are -linearly independent if then . Elements are said to be -linearly dependent if are not -linearly independent. In other words, are -linearly dependent if there are , not all zero, such that .   "
},
{
  "id": "example-93",
  "level": "2",
  "url": "sec-sums-products-of-modules.html#example-93",
  "type": "Example",
  "number": "9.6.9",
  "title": "(Linear dependence of an element of a finite cyclic group).",
  "body": " (Linear dependence of an element of a finite cyclic group)  Consider an abelian group , i.e., consider as a -module. We show that any is -linearly independent. Indeed, for any we have .  "
},
{
  "id": "sec-torsion-module-over-domain",
  "level": "1",
  "url": "sec-torsion-module-over-domain.html",
  "type": "Section",
  "number": "9.7",
  "title": "Torsion module over an integral domain",
  "body": " Torsion module over an integral domain   Let be an integral domain, and let be a left -module. The torsion submodule of is  If then we say that is a torsion  -module.  If then is said to be a torsion-free  -module.     (Finite abelian groups as torsion modules) Let be a finite abelian group, i.e., is a finite -module. We have .   (Free module is torsion-free)  Let be an integral domain. A free -module can be seen to be torsion-free.    (Rank module which is not a free module)  Consider an -module . We show that the rank of is . Suppose that and are two distinct elements of with either or . We then have the following relation that implies that are -linearly dependent. If both and then implies that are -linearly dependent. Thus the cardinality of a maximal linearly independent subset of , i.e., .  Since is -linearly independent, we get that .  However, is not isomorphic to as a -mdoule. Indeed, has nonzero torsion elements while does not have any nonzero torsion elements.     (Vector space as -module is torsion)  Let be a finite-dimensional vector space over a field , and let . Using we consider as a left -module: By definition By the Cayley-Hamilton's, the characteristic polynomial of , annihilates , i.e., for every . Hence .    (Rank of a torsion module is zero) Let be a left module over an integral domain , and assume that . For any there exists such that , i.e., every is -linearly dependent. Thus the rank of a torsion module over an integral domain is .  "
},
{
  "id": "def-torsion",
  "level": "2",
  "url": "sec-torsion-module-over-domain.html#def-torsion",
  "type": "Definition",
  "number": "9.7.1",
  "title": "",
  "body": " Let be an integral domain, and let be a left -module. The torsion submodule of is  If then we say that is a torsion  -module.  If then is said to be a torsion-free  -module.   "
},
{
  "id": "finite-abelian-group-as-torsion-module",
  "level": "2",
  "url": "sec-torsion-module-over-domain.html#finite-abelian-group-as-torsion-module",
  "type": "Example",
  "number": "9.7.2",
  "title": "(Finite abelian groups as torsion modules).",
  "body": " (Finite abelian groups as torsion modules) Let be a finite abelian group, i.e., is a finite -module. We have . "
},
{
  "id": "free-module-is-torsion-free",
  "level": "2",
  "url": "sec-torsion-module-over-domain.html#free-module-is-torsion-free",
  "type": "Example",
  "number": "9.7.3",
  "title": "(Free module is torsion-free).",
  "body": " (Free module is torsion-free)  Let be an integral domain. A free -module can be seen to be torsion-free.  "
},
{
  "id": "example-96",
  "level": "2",
  "url": "sec-torsion-module-over-domain.html#example-96",
  "type": "Example",
  "number": "9.7.4",
  "title": "(Rank <span class=\"process-math\">\\(1\\)<\/span> module which is not a free module).",
  "body": " (Rank module which is not a free module)  Consider an -module . We show that the rank of is . Suppose that and are two distinct elements of with either or . We then have the following relation that implies that are -linearly dependent. If both and then implies that are -linearly dependent. Thus the cardinality of a maximal linearly independent subset of , i.e., .  Since is -linearly independent, we get that .  However, is not isomorphic to as a -mdoule. Indeed, has nonzero torsion elements while does not have any nonzero torsion elements.   "
},
{
  "id": "example-97",
  "level": "2",
  "url": "sec-torsion-module-over-domain.html#example-97",
  "type": "Example",
  "number": "9.7.5",
  "title": "(Vector space as <span class=\"process-math\">\\(F[X]\\)<\/span>-module is torsion).",
  "body": " (Vector space as -module is torsion)  Let be a finite-dimensional vector space over a field , and let . Using we consider as a left -module: By definition By the Cayley-Hamilton's, the characteristic polynomial of , annihilates , i.e., for every . Hence .  "
},
{
  "id": "torsion-module-has-rank-0",
  "level": "2",
  "url": "sec-torsion-module-over-domain.html#torsion-module-has-rank-0",
  "type": "Example",
  "number": "9.7.6",
  "title": "(Rank of a torsion module is zero).",
  "body": " (Rank of a torsion module is zero) Let be a left module over an integral domain , and assume that . For any there exists such that , i.e., every is -linearly dependent. Thus the rank of a torsion module over an integral domain is . "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
