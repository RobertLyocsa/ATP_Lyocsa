package sk.itvkurze.metis;
import java.util.List;

public class Class {
    private String[] cars = {"Bugati", "Mazde", "Subaru", "Jaguare"};
    private List<String> wordsFromList = List.of("Testing", "by", "JUnit5", "is", "awesome", "heck yeah");
    int[] evenNumbers = {22, 14, 8, 32, 44};

    public String returnMessage(String message) {
        return message;
    }

    public List<String> getWordsFromList() {
        return wordsFromList;
    }

    public String[] getCars() {
        return cars;
    }

    public boolean reverseBoolean(boolean param) {
        return !param;
    }

    public boolean isFirstNumberMore(double a, double b, double c) {
        return a > b && a > c;
    }
    public double division(double a, double b) {
        return a / b;
    }


    public String getTestingWithCorrectName(String name) {
        return "Testing in " + name + " is awesome";
    }

    public String throwException(int a) throws Exception {
        if (a < 10) {
            throw new Exception("Value should be greater than or equal to 10");
        }
        return "Value is greater than or equal to 10";
    }

    public int sum(int a, int b) {
        return a + b;
    }

    public boolean isEvenNumber(int n) {
        return n % 2 == 0;
    }
    public int findIndexOfString(String[] array, String element) {
        for (int i = 0; i < array.length; i++) {
            if (array[i].equals(element)) {
                return i;
            }
        }
        return -1;
    }

    public int getMaxFromArray(int[] numbers) {
        int max = Integer.MIN_VALUE;
        for (int number : numbers) {
            if (number > max) {
                max = number;
            }
        }
        return max;
    }
}
 