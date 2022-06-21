    const gradeConverter = scores => {
        for (let i = 0; i < scores.length; i++) {
            if (scores[i] <= 50) console.log(`You received a score of ${scores[i]}%`);
            if (scores[i] >= 70) console.log(`You received a passing score of ${scores[i]}%`);
        }
    }
    const gradePrinter = scores => {
        const finalScores = gradeConverter(scores);
        console.log(finalScores)
    }
    const scores = [34, 56, 78, 87, 12, 34, 90];
    console.log(gradePrinter(scores));