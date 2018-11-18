# Uses python3
import sys, math

def get_majority_element(array, low, high):
    if low == high:
        return array[high]

    mid = low + (high - low) // 2

    left = get_majority_element(array, low, mid)
    right = get_majority_element(array, mid + 1, high)
    
    if left == right:
        return left
    
    majority_requirement = ((high - low) / 2) + 1

    if left != -1:
        left_count = len([value for value in array[low: high + 1] if value == left])
        if left_count >= majority_requirement:
            return left
    if right != -1:
        right_count = len([value for value in array[low: high + 1] if value == right])
        if right_count >= majority_requirement:
            return right
    return -1

if __name__ == '__main__':
    #input = [2, 3, 9, 2, 2]
    #print(get_majority_element(input, 0, len(input) - 1))
    input = sys.stdin.read()
    n, *a = list(map(int, input.split()))
    if get_majority_element(a, 0, n - 1) != -1:
        print(1)
    else:
        print(0)
