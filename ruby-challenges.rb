# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# Pseudo Code:
# Create a method that takes in a number parameter
# Declare an if statement that evaluates if the parameter is even by invoking the even method
    # Within if, have the function print the string interpolation, "x is even"
    # Within if, declare an else statement that prints the string interpolation, "x is odd"
# Run method with provided test variables

def oh_ee x
    if x.even?
        p "#{x} is even"
    else
        p "#{x} is odd"
    end
end

oh_ee 3
oh_ee 30


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo Code:
# Create a method that takes in a string parameter
# Invoke the delete method on the parameter using a string of vowels as a parameter, and print the result
# Run the method with the provided test variables

def no_vow x
    p x.delete "aeiouAEIOU"
end

no_vow album1
no_vow album2
no_vow album3


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo Code:
# Create a method that takes in a string parameter.
# Declare an if statement that evaluates if the parameter with the downcase method invoked is equal to the parameter with the reverse and downcase methods invoked.
    # Within if, have the function print the string interpolation, "x is a palindrome"
    # Within if, declare an else statement that prints the string interpolation, "x is not a palindrome"
# Run the method with the provided test variables.

def pali x
    if x.downcase == x.reverse.downcase
        p "#{x} is a palindrome"
    else
        p "#{x} is not a palindrome"
    end
end

pali palindrome_tester1
pali palindrome_tester2
pali palindrome_tester3
