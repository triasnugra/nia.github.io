import pygame
import sys

# Initialize Pygame
pygame.init()

# Set up display
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Love in the Sky")

# Colors
WHITE = (255, 255, 255)
RED = (255, 0, 0)

# Load airplane image
airplane_img = pygame.image.load('airplane.png')

# Main loop
while True:
    screen.fill(WHITE)  # Fill the screen with white
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Draw airplanes
    # Here you would iterate over a list of airplane objects and draw each one
    # For simplicity, I'll draw a single airplane at the moment
    screen.blit(airplane_img, (100, 100))  # Draw airplane at position (100, 100)

    # Draw love-shaped cloud
    # Here you would draw the love-shaped cloud
    # For simplicity, I'll draw a red heart shape
    pygame.draw.circle(screen, RED, (400, 300), 50)
    pygame.draw.circle(screen, RED, (450, 300), 50)
    pygame.draw.polygon(screen, RED, [(375, 275), (475, 275), (425, 375)])

    pygame.display.flip()  # Update the display
