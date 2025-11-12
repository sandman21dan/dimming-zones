# Dimming Zones

This is a small web app that helps visualize the dimming zones of a monitor. It's useful for understanding what local dimming looks like and how much detail you can expect from a given number of zones.

## How it works

The application calculates the aspect ratio of your screen and then divides it into a grid of dimming zones. Each zone is represented by a white rectangle on a black background.

## How to use

1.  Clone the repository.
2.  Install the dependencies with `npm install`.
3.  Start the development server with `npm start`.
4.  Open the URL provided by Parcel in your browser.

The application will automatically set a default number of dimming zones (1152) and update the URL with a `dimming_zones` query parameter (e.g., `http://localhost:1234/?dimming_zones=1152`). You can change this value directly in the URL to visualize a different number of dimming zones. For example, to see 576 dimming zones, you would navigate to `http://localhost:1234/?dimming_zones=576`.

## Example

If you have a screen with a resolution of 3840x2160 (16:9 aspect ratio) and you set the number of dimming zones to 1152, the application will create a grid of 72x16 dimming zones.
