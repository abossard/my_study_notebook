# Uses python3
import sys

def binary_search(haystack, needle):
    start, end = 0, len(haystack)
    if end == 0:
        return -1
    middle = int((end - start)/2)
    if haystack[middle] == needle:
        return middle
    elif needle < haystack[middle]:
        return binary_search(haystack[:middle - 1], needle)
    else: 
        return binary_search(haystack[middle+1:], needle)


def linear_search(a, x):
    for i in range(len(a)):
        if a[i] == x:
            return i
    return -1

if __name__ == '__main__':
    haystack = list(map(int, sys.stdin.read().split()))[1:]
    needles = list(map(int, sys.stdin.read().split()))[1:]
    for needle in needles:
        print(binary_search(haystack, needle), end = ' ')