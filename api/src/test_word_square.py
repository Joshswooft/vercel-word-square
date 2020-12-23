import unittest
from collections import Counter
from word_square import check_solution_is_valid, generate_word_square


class WordSquareTestCase(unittest.TestCase):

    def test_invalid_square(self):
        with self.assertRaises(AssertionError):
            generate_word_square(-1, "foo")

    def test_check_solution_is_valid(self):
        words = ["rose", "oven", "send", "ends"]
        n = 4
        res = check_solution_is_valid(words=words, square_size=n)
        self.assertTrue(res)

    def test_check_solution_invalid_length(self):
        words = ["rose", "oven", "send", "ends"]
        n = 8
        res = check_solution_is_valid(words, n)
        self.assertFalse(res)

    def test_check_solution_invalid_words(self):
        words = ['foo', 'bar', 'baz']
        n = 3
        res = check_solution_is_valid(words, n)
        self.assertFalse(res)

    def test_generates_square(self):
        n = 4
        m = "eeeeddoonnnsssrv"
        res = generate_word_square(n, m)
        c = Counter("".join(r for r in res))
        c2 = Counter(m)
        self.assertEqual(c, c2)
        self.assertTrue(check_solution_is_valid(res, n))
        expected = ['rose', 'oven', 'send', 'ends']
        self.assertEqual(res, expected)
        
if __name__ == '__main__':
    unittest.main()
