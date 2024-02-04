package sk.itvkurze.metis.zadanie20;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
public class AppTest
{
    @Test
    public void shouldAnswerWithTrue()
    {
        assertTrue( true );
    }
    @Test
    void testReturnMessage(){

        TestMethods TestMethods = new TestMethods();
        String expectedMessage = "Hello World";

        String actualMessage = TestMethods.returnMessage();

        Assertions.assertEquals(expectedMessage, "Hello World");
    }
}