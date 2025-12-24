function generateSOP() {
    const product = document.getElementById("product").value;
    const output = document.getElementById("output");

    if (product === "") {
        output.innerHTML = "<p>Please select a product.</p>";
        return;
    }

    if (product === "MCB") {
        output.innerHTML = `
        <h3>MCB Assembly SOP</h3>

        <h4>Assembly Steps:</h4>
        <ol>
            <li>Inspect all components visually before assembly</li>
            <li>Fix bimetal strip in designated slot</li>
            <li>Install magnetic coil</li>
            <li>Assemble moving and fixed contacts</li>
            <li>Insert arc chute properly</li>
            <li>Assemble toggle and trip mechanism</li>
            <li>Close casing and tighten screws</li>
        </ol>

        <h4>Visual Inspection Points:</h4>
        <ul>
            <li>No cracks on casing</li>
            <li>Proper alignment of toggle</li>
            <li>Correct labeling and rating</li>
            <li>Terminal screws properly tightened</li>
            <li>No loose parts</li>
        </ul>

        <h4>Safety Precautions:</h4>
        <ul>
            <li>Follow SOP strictly</li>
            <li>Use correct tools</li>
            <li>Maintain cleanliness</li>
        </ul>
        `;
    }

    if (product === "RCCB") {
        output.innerHTML = `
        <h3>RCCB Assembly SOP</h3>

        <h4>Assembly Steps:</h4>
        <ol>
            <li>Check CT, relay, and operating mechanism</li>
            <li>Assemble current transformer</li>
            <li>Connect phase and neutral paths</li>
            <li>Install trip relay</li>
            <li>Mount test button mechanism</li>
            <li>Close casing and secure screws</li>
        </ol>

        <h4>Visual Inspection Points:</h4>
        <ul>
            <li>No damage to CT</li>
            <li>Test button working freely</li>
            <li>Clear markings and ratings</li>
            <li>No loose terminals</li>
            <li>No burn marks</li>
        </ul>

        <h4>Safety Precautions:</h4>
        <ul>
            <li>Ensure correct wiring path</li>
            <li>Follow quality standards</li>
            <li>Verify assembly sequence</li>
        </ul>
        `;
    }
}
