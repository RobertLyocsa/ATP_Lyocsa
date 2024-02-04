package sk.itvkurze.metis;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

class AppTest {

    @Test
    void returnMessageTest() {
        Class myClass = new Class();
        String expectedMessage = "Hello, JUnit!";
        String actualMessage = myClass.returnMessage(expectedMessage);
        assertEquals(expectedMessage, actualMessage);
    }

    @Test
    void getWordsFromListTest() {
        Class myClass = new Class();
        List<String> expectedWords = List.of("Testing", "by", "JUnit5", "is", "awesome", "heck yeah");
        List<String> actualWords = myClass.getWordsFromList();
        assertEquals(expectedWords, actualWords);
    }

    @Test
    void getCarsTest() {
        Class myClass = new Class();
        String[] expectedCars = {"Bugati", "Mazde", "Subaru", "Jaguare"};
        String[] actualCars = myClass.getCars();
        assertArrayEquals(expectedCars, actualCars);
    }

    @Test
    void reverseBooleanTest() {
        Class myClass = new Class();
        assertTrue(myClass.reverseBoolean(false));
        assertFalse(myClass.reverseBoolean(true));
    }

    @Test
    void isFirstNumberMoreTest() {
        Class myClass = new Class();
        assertTrue(myClass.isFirstNumberMore(5.0, 2.0, 3.0));
        assertFalse(myClass.isFirstNumberMore(5.0, 5.0, 5.0));
    }

    @Test
    void divisionTest() {
        Class myClass = new Class();
        assertEquals(2.0, myClass.division(4.0, 2.0), 0.0001);
        assertEquals(0.5, myClass.division(1.0, 2.0), 0.0001);
    }

    @Test
    void getTestingWithCorrectNameTest() {
        Class myClass = new Class();
        String expected = "Testing in JUnit is awesome";
        String actual = myClass.getTestingWithCorrectName("JUnit");
        assertEquals(expected, actual);
    }

    @Test
    void throwExceptionTest() {
        Class myClass = new Class();
        assertThrows(Exception.class, () -> myClass.throwException(5));
        assertDoesNotThrow(() -> myClass.throwException(10));
    }

    @Test
    void sumTest() {
        Class myClass = new Class();
        assertEquals(10, myClass.sum(5, 5));
        assertEquals(-5, myClass.sum(-10, 5));
    }

    @Test
    void isEvenNumberTest() {
        Class myClass = new Class();
        assertTrue(myClass.isEvenNumber(22));
        assertTrue(myClass.isEvenNumber(14));
        assertTrue(myClass.isEvenNumber(8));
        assertTrue(myClass.isEvenNumber(32));
        assertTrue(myClass.isEvenNumber(44));
        assertFalse(myClass.isEvenNumber(3));
    }

    @Test
    void findIndexOfStringTest() {
        Class myClass = new Class();
        String[] array = {"Bugati", "Mazde", "Subaru", "Jaguare"};
        assertEquals(2, myClass.findIndexOfString(array, "Subaru"));
        assertEquals(-1, myClass.findIndexOfString(array, "Ferrari"));
    }

    @Test
    void getMaxFromArrayTest() {
        Class myClass = new Class();
        int[] numbers = {22, 14, 8, 32, 44};
        assertEquals(44, myClass.getMaxFromArray(numbers));
    }
}
